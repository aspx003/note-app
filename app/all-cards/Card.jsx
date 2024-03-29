import React from 'react'
import Link from 'next/link'

export default function Card({ title, content, color, id }) {
    return (
        <Link href={"all-cards/" + id} style={{ textDecoration: "none" }}>
            <div className={`card mb-3 text-bg-${color}`} style={{ width: "25rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {content.slice(0, 100)}...
                    </p>
                </div>
            </div>
        </Link>
    )
}
