"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CreateCard() {

    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState('low');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const card = {
            title, content, color
        }

        const res = await fetch('http://localhost:4000/cards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(card),
        })

        if (res.status === 201) {
            router.refresh();
            router.push('/all-cards');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 conatiner-md">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Title:
                </label>
                <input
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Give a title here"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Content
                </label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                />
            </div>
            <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="form-select"
            >
                <option value="light">White</option>
                <option value="primary">Blue</option>
                <option value="secondary">Grey</option>
                <option value="success">Green</option>
                <option value="danger">Red</option>
                <option value="warning">Yello</option>
                <option value="info">Lt. Blue</option>
                <option value="dark">Black</option>
            </select>
            <button className="btn btn-primary mt-3" disabled={isLoading}>
                {
                    isLoading && <span>Adding...</span>
                }

                {
                    !isLoading && <span>Add Card!</span>
                }
            </button>
        </form>
    )
}
