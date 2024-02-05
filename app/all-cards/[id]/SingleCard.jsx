import Link from 'next/link'
import React from 'react'

export default function SingleCard({ color, title, content }) {
    return (
        <div>
            <div className={`card mb-3 text-bg-${color}`}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {content}
                    </p>
                </div>
            </div>
            <Link href="/all-cards" className='btn btn-primary'>Go Back</Link>
        </div>
    )
}
