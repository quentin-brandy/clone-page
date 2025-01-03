import { useState } from "react";
import mario from '/other/mario.svg';
import Dpad from '/nav/DPadIcon.svg';
import starshop from "/nav/starmobile_red.svg";
import joycon from "/nav/joycon.svg";
import support from "/nav/support.svg";
import news from "/nav/news.svg";
interface NavbarContentMobileProps {
  handleNavItemClick: (id: string | null) => void;
}

export default function NavbarContentMobile({ handleNavItemClick }: NavbarContentMobileProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [dropdownMenu, setDropdownMenu] = useState<string | null>(null);

  const handleBackClick = () => {
    setCurrentMenu(null);
    setDropdownMenu(null);
  };
  
  const handleClose = () => {
    handleNavItemClick(null);
  };

  const handleMenuItemClick = (menu: string) => {
    setCurrentMenu(menu);
    setDropdownMenu(null);
  };

  const handleDropdownClick = (menu: string) => {
    setDropdownMenu(dropdownMenu === menu ? null : menu);
  };
  

  const renderSubcategories = (menu: string) => {
    switch (menu) {
      case 'My Nintendo Store':
        return (
          <ul className="p-4">
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">Shop all</li>
            <li className=" flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " onClick={() => handleDropdownClick('Games')}>Games
            <span>&#x2304;</span>
            </li>
            {dropdownMenu === 'Games' && (
                <ul className="flex flex-col gap-4 bg-lightgrey font-light p-4">
                <li className="hover:text-secondary cursor-pointer">Shop all games</li>
                <li className="hover:text-secondary cursor-pointer">Nintendo Switch games</li>
                <li className="hover:text-secondary cursor-pointer">New releases</li>
                <li className="hover:text-secondary cursor-pointer">Sales & deals</li>
                </ul>
            )}
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " onClick={() => handleDropdownClick('Hardware')}>Hardware
            <span>&#x2304;</span>
            </li>
            {dropdownMenu === 'Hardware' && (
              <ul className="flex flex-col gap-2 bg-lightgrey font-light p-4">
                <li className="hover:text-secondary cursor-pointer">Shop all hardware</li>
                <li className="hover:text-secondary cursor-pointer">Nintendo Switch systems</li>
                <li className="hover:text-secondary cursor-pointer">Joy-Con & controllers</li>
                <li className="hover:text-secondary cursor-pointer">Cases & more</li>
                <li className="hover:text-secondary cursor-pointer">amiibo</li>

              </ul>
            )}
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " onClick={() => handleDropdownClick('Merchandise')}>Merchandise
            <span>&#x2304;</span>
            </li>
            {dropdownMenu === 'Merchandise' && (
             <ul className="flex flex-col gap-2 bg-lightgrey font-light p-4">
                <li className="hover:text-secondary cursor-pointer">Shop all merchandise</li>
                <li className="hover:text-secondary cursor-pointer">Apparel & accessories</li>
                <li className="hover:text-secondary cursor-pointer">Home & office</li>
                <li className="hover:text-secondary cursor-pointer">Plush</li>
                <li className="hover:text-secondary cursor-pointer">Toys</li>
              </ul>
            )}
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " onClick={() => handleDropdownClick('Store exclusives')}>Store exclusives
            <span>&#x2304;</span>
            </li>
            {dropdownMenu === 'Store exclusives' && (
             <ul className="flex flex-col gap-2 bg-lightgrey font-light p-4">
                <li className="hover:text-secondary cursor-pointer">Shop all store exclusives</li>
                <li className="hover:text-secondary cursor-pointer">Exclusive products</li>
                <li className="hover:text-secondary cursor-pointer">My Nintendo rewards</li>
                <li className="hover:text-secondary cursor-pointer">Nintendo Switch Online offers</li>
              </ul>
            )}
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " onClick={() => handleDropdownClick('Characters')}>Characters
            <span>&#x2304;</span>
            </li>
            {dropdownMenu === 'Characters' && (
              <ul className="flex flex-col gap-2 bg-lightgrey font-light p-4">
                <li className="hover:text-secondary cursor-pointer">Shop all characters</li>
                <li className="hover:text-secondary cursor-pointer">Pikmin</li>
                <li className="hover:text-secondary cursor-pointer">Splatoon</li>
                <li className="hover:text-secondary cursor-pointer">Super Mario</li>
                <li className="hover:text-secondary cursor-pointer">The Legend of Zelda</li>
              </ul>
            )}
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " >Sales & deals</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " >Holiday Gift Guide</li>
            
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " >Create a NintendoSwitch gift set</li>
          </ul>
        );
      case 'Games':
        return (
          <ul className="p-4">
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " >Nintendo Switch games</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " >New releases</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " >Coming soon</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " >Shop games</li>
          </ul>
        );
      case 'Nintendo Switch':
        return (
          <ul className="p-4">
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">Nintendo Switch lineup</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">Compare systems</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">Online service</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">Accessories</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">Shop systems</li>
          </ul>
        );
      case 'Play Nintendo':
        return (
          <ul className="p-4">
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">For kids</li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">For parents</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute -top-80 left-0 w-full bg-white shadow-lg pt-4 rounded-t-xl rounded-b-3xl h-96">
      <h2 className="flex w-full items-center justify-center text-logo font-bold text-xl">
        {currentMenu ? (
          <>
            <button onClick={handleBackClick} className="absolute left-4">
              &lt;
            </button>
            {currentMenu}
          </>
        ) : (
          "Menu"
        )}
      </h2>
      <button
        className="absolute cursor-pointer right-4 top-4"
        onClick={handleClose}
        onMouseEnter={() => setHoveredIcon("close")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          role="presentation"
          data-testid="CloseCircleIcon"
          color="currentColor"
        >
          <path
            d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z"
            fill={hoveredIcon === 'close' ? '#424242' : '#C8C8C8'}
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      <ul className="flex flex-col overflow-y-auto overflow-x-hidden max-h-72">
        {currentMenu === null ? (
          <>
            <li className="flex px-4 justify-between items-center py-4 border-b cursor-pointer font-medium" onClick={() => handleMenuItemClick('My Nintendo Store')}>
                <div className="flex justify-center items-center gap-2">
                <img width={24} src={mario} alt="" />
              <span>My Nintendo Store</span>
              </div>
              <span>&gt;</span>
            </li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " onClick={() => handleMenuItemClick('Games')}>
                <div className="flex justify-center items-center gap-2">
                    <img width={24} src={Dpad} alt="" />
              <span>Games</span>
                </div>
              <span>&gt;</span>
            </li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " onClick={() => handleMenuItemClick('Nintendo Switch')}>
                <div className="flex justify-center items-center gap-2">
                <img width={24} src={joycon} alt="" />
              <span>Nintendo Switch</span>
                </div>
              <span>&gt;</span>
            </li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">
            <div className="flex justify-center items-center gap-2">
                <img width={24} src={news} alt="" />
              <span>News & Events</span>
              </div>
            </li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium " onClick={() => handleMenuItemClick('Play Nintendo')}>
            <div className="flex justify-center items-center gap-2">
            <img width={24} src={starshop} alt="" />
              <span>Play Nintendo</span>
              </div>
              <span>&gt;</span>
            </li>
            <li className="w-screen py-2 bg-lightgrey"></li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">
            <div className="flex justify-center items-center gap-2">
            <img width={24} src={support} alt="" />
              <span>Support</span>
                </div>
            </li>
            <li className="flex justify-between items-center py-4 px-4 border-b cursor-pointer font-medium ">
              <span>Change region</span>
            </li>
            <li className="w-screen h-screen py-2 bg-lightgrey"></li>
          </>
        ) : (
          <>
            {renderSubcategories(currentMenu)}
          </>
        )}
      </ul>
    </div>
  );
}