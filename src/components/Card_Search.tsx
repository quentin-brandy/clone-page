import { useState } from "react";
export default function CardSearch(cards: any) {
    const [isliked, setIsliked] = useState(false);

    const ClickOnHeart = () => {
        setIsliked(!isliked);
    };
let card = cards.cards;
return (
    <div className="flex gap-4 border-2 border-lightgrey rounded-lg">
        <img src={card.img} alt={card.title} className="w-20 object-cover overflow-hidden relative" />
        <div className="flex flex-col gap-4 pr-4">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-console">{card.platform}</p>
            <svg
                    className="cursor-pointer"
                    onClick={ClickOnHeart}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isliked ? 'red' : 'none'}
                    stroke="red"
                    strokeWidth="2"
                >
                    <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
                </svg>
        </div>
    </div>
);

}