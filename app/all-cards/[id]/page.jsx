import { notFound } from "next/navigation";
import SingleCard from "./SingleCard";

export const dynamicParams = true;

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/cards');
    const cards = await res.json();

    return cards.map((card) => (
        { id: card.id }
    ))
}

// data fetch function
async function getCard(id) {
    const res = await fetch('http://localhost:4000/cards/' + id, {
        next: {
            revalidate: 60
        }
    });

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function Card({ params }) {
    const card = await getCard(params.id);
    return (
        <div className="container">
            <SingleCard {...card} />
        </div>
    )
}
