import { useState , useEffect } from 'react';
import search from '/searchDesktop.svg';
import imgprofile from '/téléchargé.svg';
import arrowdown from '/arrow_down.svg'
import logo from '/logo.svg'
import flag from '/FlagUsaIconRegionSelect.png'
import nintendostore from '/my_nintendo_store.svg'
import nintendopoints from '/my_nintendo_points.svg'
import shipping from '/shipping.svg'
import SearchPage from './SearchPage';

export default function HeaderDesktop() {
const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
const [showFirstMessage, setShowFirstMessage] = useState(true);
const [openSearch, setOpenSearch] = useState(false);

const handleSearchClick = () => {
    setOpenSearch(true);
};


    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstMessage(prevShowFirstMessage => !prevShowFirstMessage);
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <header>
                <div className='flex justify-between w-full items-center'>
                    <div className={`flex justify-center gap-2 h-full items-${openSearch ? 'start' : 'center'}`}>
                    <img src={logo} className='cursor-pointer bg-secondary py-3 px-4' alt="" />
                            <div className='flex items-start mt-2 w-screen h-fit'>
                              <div className='flex items-center  border-b border-logo pb-2 text-logo hover:border-secondary cursor-pointer hover:text-secondary'onClick={handleSearchClick}>
                             <div className='flex gap-2' onClick={handleSearchClick}>

                             <img src={search} width={16} height={16} alt="" />
                             <input
                                 type="search"
                                 placeholder={openSearch ? "Search games , hardware , news , etc" : "Search"}
                                 className="text-xs font-normal w-40 opacity-40 bg-transparent border-none focus:outline-none"
                             />
                         </div>
                         <div className='relative flex gap-4 justify-center items-center'>
                             <select
                                 className='appearance-none bg-transparent text-xs focus:bg-lightgrey border-none font-medium cursor-pointer pr-6'
                                 onClick={() => setHoveredIcon('rotate')}
                                 onMouseLeave={() => setHoveredIcon(null)}
                             >
                                 <option className='font-medium text-black' value="All categories">All categories</option>
                                 <option className='font-medium text-black' value="Games">Games</option>
                                 <option className='font-medium text-black' value="Hardware">Hardware</option>
                                 <option className='font-medium text-black' value="Merchandise">Merchandise</option>
                                 <option className='font-medium text-black' value="Sales & deals">Sales & deals</option>
                             </select>
                             <img
                                 src={arrowdown}
                                 width={12}
                                 height={12}
                                 alt=""
                                 className={`absolute -right-1 mr-2 top-1/2 transform -translate-y-1/2 transition-transform ${hoveredIcon === 'rotate' ? 'rotate-180' : ''}`}
                             />
                         </div>
                         </div>
                         </div>
                    </div>
                    <div className='flex  items-center justify-center gap-4'>
                    <img src={flag}className=' cursor-pointer border-1 border-primary h-3' alt="" />
                    </div>
                </div>
                {openSearch ? (
                    <SearchPage />
                ) : null}
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
       </header>
        </>
    );
}
