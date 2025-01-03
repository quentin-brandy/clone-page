import { useState } from 'react';
import search from '/other/searchDesktop.svg';
import arrowdown from '/other/arrow_down.svg';
import logo from '/other/logo.svg';
import nintendopoints from '/other/my_nintendo_points.svg';
import shipping from '/other/shipping.svg';
import SearchPage from './SearchPage';
import close from '/other/close.svg';
import Headers_Logo from './Headers_Logo';
import NavBarDesktop from './Navbar_Desktop';

export default function HeaderDesktop({ setIsSearchOpen, isSearchOpen, setActiveNavItem, activeNavItem }: any) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  }

  const handleNavItemClick = (id: string) => {
    setActiveNavItem(id);
  }

  return (
    <>
      <header className='overflow-x-hidden'>
        <div className='flex justify-between w-full items-center'>
          <div className={`flex justify-center gap-2 h-full items-${isSearchOpen ? 'start' : 'center'} ${isSearchOpen ? 'z-10' : ''}`}>
            <img src={logo} className='cursor-pointer bg-secondary py-5 px-4' alt="" />
            <div className='flex items-start justify-between pr-14 mt-2 w-screen h-fit'>
              <div className='flex items-center border-b border-logo pb-2 text-logo hover:border-secondary cursor-pointer hover:text-secondary' onClick={handleSearchClick}>
                <div className='flex gap-2' onClick={handleSearchClick}>
                  <img src={search} width={16} height={16} alt="" />
                  <input
                    type="search"
                    placeholder={isSearchOpen ? "Search games, hardware, news, etc" : "Search"}
                    className={`text-xs font-normal ${isSearchOpen ? 'w-60' : 'w-40'} opacity-40 bg-transparent border-none focus:outline-none`}
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
              <div className={`${isSearchOpen ? 'hidden' : ''}`}>
                <Headers_Logo />
              </div>
              {isSearchOpen ? (
                <img className='cursor-pointer' onClick={handleCloseSearch} src={close} alt="" />
              ) : null}
            </div>
          </div>
        </div>
        {isSearchOpen ? (
          <SearchPage />
        ) : null}
        <div className={`${isSearchOpen ? 'hidden' : ''}`}>
          <NavBarDesktop handleNavItemClick={handleNavItemClick} activeNavItem={activeNavItem} />
        </div>
        <div className={`flex bg-lightgrey items-center ${isSearchOpen ? 'hidden' : ''} ${activeNavItem ? 'hidden' : ''}`}>
          <div className='flex justify-end w-full items-center gap-4 font-light border-r h-6 border-logo pr-4'>
            <img src={nintendopoints} alt="" />
            <p>Earn <span className='font-medium underline cursor-pointer text-logo'>My Nintendo Points</span> on digital games</p>
          </div>
          <div className='flex justify-start items-center gap-2 py-2 font-light w-full pl-4'>
            <div className='flex justify-center items-center gap-4'>
              <img className='text-secondary' src={shipping} alt="" />
              <p><span className='font-medium text-logo'>Free shipping</span> on orders $50 or more.</p>
            </div>
            <a className='text-xs underline text-logo' href="#"> Restriction apply</a>
          </div>
        </div>
      </header>
    </>
  );
}