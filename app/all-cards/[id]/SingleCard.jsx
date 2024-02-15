import Link from 'next/link'

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
            <button href="/all-cards" className='btn btn-primary m-2'>Delete Note</button>
        </div>
    )
}