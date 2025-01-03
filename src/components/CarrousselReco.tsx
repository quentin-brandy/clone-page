import MytimeatPortia from '/mytimeatportia.jpg';
import PotionPermit from '/potionpermit.jpg'
import Ooblets from '/ooblets.jpg'
import BearAndBreakfast from '/bread&breakfast.jpg'
import faefarm from '/faefarm.jpg'
import CarrousselArrowRight from '/CarrousselArrowRight.svg';
import CarrousselArrowLeft from '/CarrousselArrowLeft.svg';
import Reduc from '/reduc.svg';
import { useRef, useState, useEffect } from 'react';

export default function CarrousselReco() {
    const cards = [
        {
            img: MytimeatPortia,
            date: "4/16/19",
            price: "$29.99",
            title: "My Time at Portia",
            platform: "Nintendo Switch",
        },
        {
            img: PotionPermit,
            date: "9/22/22",
            price: "$19.99",
            title: "Potion Permit",
            platform: "Nintendo Switch",
            saleprice: "$9.99",
            saleend: "2 days",
            reduce: "-50%",
        },
        {
            img: faefarm,
            date: "9/8/23",
            price: "$29.99",
            title: "Fae Farm",
            platform: "Nintendo Switch",
            demo: true,
        },
        {
            img: BearAndBreakfast,
            date: "9/15/22",
            price: "$19.99",
            title: "Bear and Breakfast",
            platform: "Nintendo Switch",
        },
        {
            img: Ooblets,
            date: "9/1/22",
            price: "$29.99",
            title: "Ooblets",
            platform: "Nintendo Switch",
        },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [likedCards, setLikedCards] = useState<boolean[]>(new Array(cards.length).fill(false));

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                setIsAtStart(scrollLeft === 0);
                setIsAtEnd(scrollLeft + clientWidth === scrollWidth);
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isAtStart, isAtEnd]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const toggleLike = (index: number) => {
        setLikedCards(prevLikedCards => {
            const newLikedCards = [...prevLikedCards];
            newLikedCards[index] = !newLikedCards[index];
            return newLikedCards;
        });
    };

    return (
        <div className='relative pl-10'>
            <button
                onClick={scrollLeft} 
                className='absolute left-10  top-1/2 transform -translate-y-1/2 bg-black opacity-20 px-3 h-80 rounded-lg hover:opacity-70 hover:scale-110 z-10'
                style={{ display: isAtStart ? 'none' : 'block' }}
            >
                <img src={CarrousselArrowLeft} alt="Left Arrow" />
            </button>
            <div 
                ref={scrollContainerRef} 
                className='flex gap-5 overflow-hidden w-full scroll-smooth snap-x snap-mandatory'
            >
                {cards.map((card, index) => (
                    <div key={index} className='group flex flex-col gap-3 flex-shrink-0 overflow-hidden border border-logo border-opacity-20 rounded-xl snap-start pb-4 h-fit transition-transform transform  hover:shadow-lg hover:cursor-pointer'>
                        <div className='relative'>
                            <img className='max-h-28 md:max-h-36 object-cover transition-transform transform group-hover:-translate-y-2' src={card.img} alt={card.title} />
                            {card.demo && (
                                <div className='absolute top-0 left-0 bg-blue-600 font-medium text-white text-xs px-2 py-1 z-10'>
                                    Demo Available
                                </div>
                            )}
                        </div>
                   
                        <div className='flex flex-col gap-1 mb-5 px-4 '>
                            <p className='text-logo font-bold text-sm group-hover:text-secondary'>{card.title}</p>
                            <p className='text-xs'>{card.date}</p>
                        </div>
                        <div className='px-4'>
                        {card.demo && (
                                <p className='bg-indigo-500 font-medium w-fit rounded-full text-white text-xs px-2 py-1 z-10'>
                                    Free demo
                                </p>
                            )}
                            {card.saleprice && (
                                <p className='text-xs bg-secondary w-fit rounded-2xl px-2 mb-2 font-bold text-primary'>Sale ends: {card.saleend}</p>
                            )}
                            {card.saleprice ? (
                                <div className='flex items-center gap-2'>
                            <p className='font-bold text-logo'>
                                        {card.saleprice} 
                                        </p>
                                        <p className='line-through text-xs font-light'>{card.price}</p>
                                        <div className='flex items-center justify-center w-fit h-fit'>
                                            <img  className='h-4 w-fit' src={Reduc} alt="Reduc" />
                                        <p className='bg-secondary text-primary w-fit text-xs font-medium'>{card.reduce}</p>
                                        </div>
                                        </div>
                                ) : (
                                    <p className='font-bold text-logo'>
                                    {card.price}
                                    </p>
                                )}
                            <div className='flex w-full justify-between mt-3'>
                                <div className=''>
                                    <p className='flex items-center border-l-2 border-secondary pl-2 text-sm'>{card.platform}</p>
                                </div>
                                <svg
                                    className="cursor-pointer"
                                    onClick={() => toggleLike(index)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill={likedCards[index] ? 'red' : 'none'}
                                    stroke="red"
                                    strokeWidth="3"
                                >
                                    <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={scrollRight} 
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black opacity-20 px-3 h-80 rounded-lg hover:opacity-70 hover:scale-110'
                style={{ display: isAtEnd ? 'none' : 'block' }}
            >
                <img src={CarrousselArrowRight} alt="Right Arrow" />
            </button>
        </div>
    );
}