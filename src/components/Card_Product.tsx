import React from 'react';
import arrowright from '/other/arrow_right.svg';
import CarrousselProduct from './CarrousselProduct';
import GoldCoin from '/other/my-nintendo-gold-coin.png';
import { useState } from 'react';
import GameRate from '/other/game_rate.svg';
import Download from '/other/download.svg';

const CardProduct: React.FC = () => {
    const [isliked, setIsliked] = useState(false);

    const ClickOnHeart = () => {
        setIsliked(!isliked);
    };

    return (
        <section className="w-full xl:flex xl:justify-center xl:bg-lightblue xl:pt-10 mb-28">
            <div className="w-full xl:max-w-screen-xl border-2 pl-2 rounded-lg shadow-lg grid md:grid-cols-2 gap-5 py-8 bg-white mb-10 xl:-mb-10 md:px-5 xl:px-10">
            <div className="md:col-span-1">
                <div className="flex gap-2 py-4 text-gray-400 font-bold text-xs">
                <p className="text-gray-400 font-bold text-xs">Store</p>
                <img src={arrowright} alt="" />
                <p>Games</p>
                <img src={arrowright} alt="" />
                <p className="text-logo"> Stardew Valley </p>
                </div>

                <div className="w-full">
                <CarrousselProduct />
                <a
                    className="hidden md:flex justify-start text-xs max-w-96 gap-2 mt-5"
                    href="https://www.esrb.org/ratings-guide/"
                >
                    <img src={GameRate} alt="" />
                    <div className="flex flex-col gap-1">
                    <p className="border-b border-black pb-1">
                        Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood
                    </p>
                    <p>Users Interact</p>
                    </div>
                </a>
                </div>
            </div>
            <div className="flex flex-col mt-6 pl-2 gap-6 text-logo md:col-span-1 md:pr-4 md:pt-9">
                <p className="border-l-2 border-secondary pl-1 text-sm text-logo">Nintendo Switch</p>
                <h2 className="text-2xl text-logo font-bold">Stardew Valley</h2>
                <div className="flex justify-between w-full pr-4">
                <p className="text-2xl font-bold">${14.99.toFixed(2)}</p>
                <svg
                    className="cursor-pointer"
                    onClick={ClickOnHeart}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isliked ? 'red' : 'none'}
                    stroke="red"
                    strokeWidth="3"
                >
                    <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
                </svg>
                </div>
                <div className="flex items-center gap-2">
                <img className="w-6" src={GoldCoin} width={16} height={16} alt="" />
                <p className="text-xs text-logo">
                    Eligible for up to <span className="font-bold text-logo">75</span> gold Points
                </p>
                </div>
                <button className="flex justify-center items-center gap-4 bg-secondary rounded-lg py-4 text-primary font-bold w-full hover:bg-secondary-dark">
                    <img src={Download} alt="" />
                    <p>Direct download</p>
                </button>
                <p className="text-xs">This item will be sent to your system automatically after purchase.</p>
            </div>
            </div>
        </section>
    );
};

export default CardProduct;