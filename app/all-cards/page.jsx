import Card from "./Card"

async function getCards() {
    const res = await fetch('http://localhost:4000/cards', {
        next: {
            revalidate: 5
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export default async function AllCards() {
    const cards = await getCards();

    return (
        <div className="container ">
            <div className="row">
                {cards.map((card) => (
                    <div key={card.id} className="col">
                        <Card  {...card} />
                    </div>
                ))}
            </div>
        </div>
    )
}
