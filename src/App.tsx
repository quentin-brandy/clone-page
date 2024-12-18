import './App.css'
import CardProduct from './components/Card_Product'
import Description from './components/Description'
import Headers from './components/header'
import RatingSupport from './components/Rating_Support'
import Specificity from './components/Specificity'
import Online from './components/Online'
import Recommended from './components/Recommend'
import Footer from './components/Footer'
import HeaderDesktop from './components/HeaderDesktop'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const headerDesktopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSearchOpen || activeNavItem) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isSearchOpen, activeNavItem]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerDesktopRef.current && !headerDesktopRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setActiveNavItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  }

  return (
    <>
      <div className={`lg:hidden`}>
        <Headers />
      </div>
      <div className={`hidden lg:block`} ref={headerDesktopRef}>
        <HeaderDesktop setIsSearchOpen={setIsSearchOpen} isSearchOpen={isSearchOpen} setActiveNavItem={setActiveNavItem} activeNavItem={activeNavItem} />
      </div>
      <div className={`overflow-x-hidden bg-white ${isSearchOpen || activeNavItem ? 'brightness-50' : ''}`}>
        <div className="xl:flex xl:flex-col xl:items-center mb-28">
          <CardProduct />
          <div className="xl:max-w-screen-xl  xl:w-full ">
            <Description />
            <RatingSupport />
            <Specificity />
            <Online />
            <Recommended />
            <div className='flex flex-col gap-5 my-24 text-xs font-light px-4'>
              <p>WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.</p>
              <p>Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online</p>
              <p>Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App