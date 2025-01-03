import CardSearch from './Card_Search';
import MytimeatPortia from '/a52346fa3eeb45c7ccd23985e659a21df452a802bd0b105f666ab6231fd468ab.jpg';
import MarioLuigiBrothership from '/search/9afc95d7bb55198b983e6942649af01932c45df112e8b8842e0578143dcdeaeb.png';
import MySimsCozyBundle from '/search/75826a6bef43399a5092771092ddf67c519567c08cf6b94d18101218d650132b.png';
import NintendoSoundClock  from '/search/121311-nintendo-sound-clock-alarmo-mario-face-front-1200x675.png';
import MarioJamboree from '/search/ba0572bf9d840b03bf9958809943fb3c76c3adfd6d8f2704b0f1b766f8aa4027.png';
import close from '/close.svg';

interface SearchPageProps {
    handleCloseSearch?: () => void;
  }
export default function SearchPage({ handleCloseSearch }: SearchPageProps) {
        let topstoreproduct = [
            {
                img: MarioJamboree,
                title: "Super Mario Party™ Jamboree",
                platform: "Nintendo Switch",
            },
            {
                img:  MySimsCozyBundle,
                title: "MySims™: Cozy Bundle",
                platform: "Nintendo Switch",
            },
            {
                img: MarioLuigiBrothership,
                title: "Mario & Luigi™: Brothership",
                platform: "Nintendo Switch",
            },
            {
                img: NintendoSoundClock,
                title: "Nintendo Sound Clock: Alarmo™",
                platform: "Hardware",
            },
        ]
    return (
        <div className='flex flex-col xl:flex-row items-start px-8 lg:px-28 py-10 xl:pt-2 justify-start h-fit  z-10'>
             <div className='flex items-center gap-4 w-full lg:hidden mb-6 border-b border-secondary pb-2'>
                <input 
                    type="search"
                    placeholder="Search games, hardware, news, etc"
                    className='w-full focus:outline-none'
                />
                <img 
                    src={close} 
                    alt="close" 
                    className='cursor-pointer w-6 h-6'
                    onClick={handleCloseSearch}
                />
            </div>
            <div>
            <h2 className='text-logo mb-8 lg:mb-2 text-2xl lg:text-base font-bold'>Trending topics</h2>
            <ul className='flex flex-col gap-6 md:gap-2'>
            <li className="text-secondary font-medium lg:font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch bundles</li>
            <li className="text-secondary font-medium lg:font-bold cursor-pointer hover:text-secondary-dark">Games on sale</li>
            <li className="text-secondary font-medium lg:font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch</li>
            <li className="text-secondary font-medium lg:font-bold cursor-pointer hover:text-secondary-dark">Games</li>
            <li className="text-secondary font-medium lg:font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch Game Vouchers</li>
            <li className="text-secondary font-medium lg:font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch OLED</li>
            </ul>
            </div>
            <div className='flex flex-col gap-3 xl:w-full xl:justify-center'>
            <h2 className='text-logo text-2xl lg:text-base  mb-2 font-bold lg:font-medium mt-10 xl:mt-0 xl:flex xl:w-full xl:justify-center'>Top store products</h2>
            <div className='flex xl:w-full xl:justify-center'>
            <ul className='flex flex-wrap gap-6 xl:w-full xl:justify-center xl:max-w-screen-lg'>
            {topstoreproduct.map((product, index) => (
            <CardSearch key={index} cards={product} />
        ))}            </ul>
        </div>
        </div>
        </div>
    );
};

