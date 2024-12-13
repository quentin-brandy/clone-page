import { useState , useEffect } from 'react';
import search from '/search mobile.svg';
import imgprofile from '/téléchargé.svg';
import logo from '/logo.svg'
import flag from '/FlagUsaIconRegionSelect.png'
import nintendostore from '/my_nintendo_store.svg'
import nintendopoints from '/my_nintendo_points.svg'
import shipping from '/shipping.svg'

export default function Header() {
const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
const [showFirstMessage, setShowFirstMessage] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstMessage(prevShowFirstMessage => !prevShowFirstMessage);
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <header>
                <div className='flex justify-between w-full items-center bg-secondary py-3 px-4'>
                    <div className='flex justify-center items-center'>
                    <img src={logo} className='cursor-pointer h-6' alt="" />
                    </div>
                    <div className='flex  items-center justify-center gap-4'>
                    <img src={nintendostore} className='cursor-pointer h-6' alt="" />
                    <img src={flag}className=' cursor-pointer border-1 border-primary h-3' alt="" />
                    </div>
                </div>
                {showFirstMessage ? (
                    <div className='flex justify-center w-full items-center gap-4 bg-lightgrey py-2 px-4 font-light'>
                        <img src={nintendopoints} alt="" />
                        <p>Earn <span className='font-medium underline cursor-pointer text-logo'>My Nintendo Points</span> on digital games</p>
                    </div>
                ) : (
                    <div className='flex justify-center items-center gap-2 py-2 font-light w-full bg-lightgrey'>
                        <div className='flex justify-center items-center gap-4'>
                            <img className='text-secondary' src={shipping} alt="" />
                            <p><span className='font-medium text-logo'>Free shipping</span> on orders $50 or more.</p>
                        </div>
                        <a className='text-xs underline text-logo' href="#"> Restriction apply</a>
                    </div>
                )}
            <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4 flex justify-between w-3/4 max-w-md">
                <div
                    className="flex flex-col justify-center items-center cursor-pointer hover:text-red-500"
                    onMouseEnter={() => setHoveredIcon('menu')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px" fill={hoveredIcon === 'menu' ? 'red' : 'black'}>
                        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
                    </svg>
                </div>
                <div
                    className="flex flex-col justify-center items-center cursor-pointer hover:text-red-500"
                    onMouseEnter={() => setHoveredIcon('heart')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={hoveredIcon === 'heart' ? 'red' : 'black'}>
                        <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
                    </svg>
                </div>
                <div className="flex relative flex-col items-center bg-secondary p-2 rounded-full -mt-4 cursor-pointer">
                    <img src={search} alt="icon3" className="w-10 h-10 text-primary" />
                </div>
                <div
                    className="flex flex-col justify-center items-center cursor-pointer hover:text-red-500"
                    onMouseEnter={() => setHoveredIcon('cart')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={hoveredIcon === 'cart' ? 'red' : 'black'}>
                        <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
                        <circle cx="10.5" cy="19.5" r="1.5" />
                        <circle cx="17.5" cy="19.5" r="1.5" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer hover:text-red-500">
                    <img src={imgprofile} alt="icon5" className="w-6 h-6" />
                </div>
            </nav>
       </header>
        </>
    );
}