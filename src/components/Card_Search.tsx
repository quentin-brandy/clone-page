import { useEffect, useState } from "react";
export default function CardSearch(cards: any) {
    const [isliked, setIsliked] = useState(false);
    const [isHardware , setIsHardware] = useState(false);

    const ClickOnHeart = () => {
        setIsliked(!isliked);
    };
let card = cards.cards;

useEffect(() => {
    setIsHardware(card.platform === 'Hardware');
}, [card.platform]);

return (
    <div className="flex gap-4 border-2 border-lightgrey rounded-2xl w-[360px] relative cursor-pointer">
        <img src={card.img} alt={card.title} className="object-cover overflow-hidden rounded-s-2xl min-w-36 max-w-36" />
        <div className="flex flex-col items-stretch justify-between gap-2 pr-2 py-2 w-full">
            <h2 className="text-logo font-medium text-sm">{card.title}</h2>
            <div className="flex justify-between items-center w-full">
            <p className={`flex items-center border-l-2 pl-2 ${isHardware ? 'border-support' : 'border-secondary'} text-logo font-light h-4 text-sm`}>{card.platform}</p>
                <svg
                    className="cursor-pointer"
                    onClick={ClickOnHeart}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={isliked ? 'red' : 'none'}
                    stroke="red"
                    strokeWidth="3"
                >
                    <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
                </svg>
            </div>
        </div>
    </div>
);

}