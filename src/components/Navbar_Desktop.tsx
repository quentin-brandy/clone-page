import NavbarContent from './Navbar_Content';
import mario from '/other/mario.svg';
import { useState } from 'react';
export default function NavBarDesktop({ handleNavItemClick, activeNavItem }: any) {
const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);


    return (
        <>
        <nav className='flex justify-center items-center pt-2 border-y'>
            <ul className='flex gap-10 items-center'>
                <li onClick={() => handleNavItemClick('games')} className='flex gap-2 items-center cursor-pointer border-b-4 border-secondary pb-1'>
                    <img width={20} height={20} src={mario} alt="mario" />
                    <p className='font-medium text-sm text-secondary'>My Nintendo Store</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" role="presentation"  data-testid="ChevronDownIcon" color="currentColor" className={`${activeNavItem === 'games' ? 'rotate-180' : 'rotate-0'}`}><path fill-rule="evenodd" clip-rule="evenodd" fill="#E60013" d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"></path></svg>
                </li>
                <li onClick={() => handleNavItemClick('dpad')} className={`flex gap-2 items-center cursor-pointer pb-1`}
                 onMouseEnter={() => setHoveredIcon('dpad')}
                 onMouseLeave={() => setHoveredIcon(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" data-testid="DPadIcon" color="currentColor">
                    <path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill={hoveredIcon === 'dpad' || activeNavItem === 'dpad' ? '#E60013' : '#424242'} />
                </svg>
                    <p className={`text-logo font-medium text-sm ${hoveredIcon === 'dpad' ? 'text-secondary' : 'text-logo'} ${activeNavItem === 'dpad' ? 'text-secondary' : 'text-logo'}`}>Games</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" role="presentation"  data-testid="ChevronDownIcon" color="currentColor" className={`${activeNavItem === 'dpad' ? 'rotate-180' : 'rotate-0'}`}><path fill-rule="evenodd" clip-rule="evenodd" fill={hoveredIcon === 'dpad' || activeNavItem === 'dpad' ? '#E60013' : '#424242'} d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"></path></svg>
                </li>
                <li onClick={() => handleNavItemClick('switch')} className={`flex gap-2 items-center cursor-pointer pb-1`}
                 onMouseEnter={() => setHoveredIcon('switch')}
                 onMouseLeave={() => setHoveredIcon(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation"  data-testid="SwitchIcon"  color="currentColor"><path d="M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z" fill={hoveredIcon === 'switch' || activeNavItem === 'switch' ? '#E60013' : '#424242'} fill-rule="evenodd"></path></svg>
                <p className={`font-medium text-sm  ${hoveredIcon === 'switch' ? 'text-secondary' : 'text-logo'} ${activeNavItem === 'switch' ? 'text-secondary' : 'text-logo'}`}>Nintendo Switch</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" role="presentation"  data-testid="ChevronDownIcon" color="currentColor" className={`${activeNavItem === 'switch' ? 'rotate-180' : 'rotate-0'}`}><path fill-rule="evenodd" clip-rule="evenodd"  fill={hoveredIcon === 'switch' || activeNavItem === 'switch' ? '#E60013' : '#424242'} d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"></path></svg>
                </li>
                <li onClick={() => handleNavItemClick('news')} className={`flex gap-2 items-center cursor-pointer pb-1`}
                 onMouseEnter={() => setHoveredIcon('news')}
                 onMouseLeave={() => setHoveredIcon(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" data-testid="NewsIcon"  color="currentColor"><path fill={hoveredIcon === 'news' || activeNavItem === 'news' ? '#E60013' : '#424242'} d="M31.92 3.62a1.945 1.945 0 0 0-1.953-1.932H1.874A1.945 1.945 0 0 0-.08 3.62v10.068h32zm-32 11.692v7.201a2.027 2.027 0 0 0 1.954 1.998h8.711a2.777 2.777 0 0 1 2.178 1.073q2.97 4.736 3.315 4.728.344-.009 3.315-4.837a2.677 2.677 0 0 1 2.177-.964h8.398a2.027 2.027 0 0 0 1.953-1.998v-7.201zm14 5.15c0 .056-.07.1-.155.1H3.077c-.086 0-.156-.044-.156-.1v-1.051c0-.055.07-.1.156-.1h10.688c.086 0 .156.045.156.1z"></path></svg>
                <p className={`text-logo font-medium text-sm ${hoveredIcon === 'news' ? 'text-secondary' : 'text-logo'}`}>News & Events</p>
                </li>
                <li onClick={() => handleNavItemClick('star')} className={`flex gap-2 items-center cursor-pointer pb-1`}
                 onMouseEnter={() => setHoveredIcon('star')}
                 onMouseLeave={() => setHoveredIcon(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation"  data-testid="StarPlayNintendoIcon" color="currentColor"><path d="M18.9 19.1c-.9 0-1-1.5-1-3.4s0-3.5 1-3.4c.9.1 1.1 1.4 1.1 3.3-.1 2-.2 3.5-1.1 3.5m-5.8 0c-.9 0-1-1.6-1-3.4 0-1.9.2-3.2 1.1-3.3 1-.1 1 1.5 1 3.4-.1 1.8-.2 3.3-1.1 3.3M32 12.4c-.1-.3-1.4-.6-5.6-1.1-2.6-.3-5.1-.5-5.2-.5-.2 0-.4-.2-.5-.4-.6-1.6-1.3-3.3-2-4.8C17.1 1.8 16.4.7 15.9.7c-.4 0-1 1.1-2.8 5-1.1 2.4-2 4.8-2 4.8-.1.2-.3.4-.5.4 0 0-2.5.1-5.1.4-4.1.4-5.4.7-5.5 1-.1.4.8 1.3 3.9 4.2 1.9 1.8 3.9 3.4 3.9 3.4.2.1.2.3.2.4v.1s-.6 2.5-1.2 5.1c-.6 3-1.1 5.4-.7 5.7.4.4 1.8-.5 5.2-2.4 2.3-1.3 4.4-2.7 4.5-2.7.2-.1.4-.1.6 0 0 0 2.2 1.4 4.4 2.7 3.4 2 4.7 2.7 5.2 2.4.4-.3 0-2.1-.7-5.7-.5-2.6-1.2-5.1-1.2-5.1v-.1c0-.2.1-.3.2-.4 0 0 1.9-1.6 3.9-3.3 3-2.9 3.9-3.9 3.8-4.2" fill-rule="evenodd" clip-rule="evenodd" fill={hoveredIcon === 'star' || activeNavItem === 'star' ? '#E60013' : '#424242'}></path></svg>
                <p className={`text-logo font-medium text-sm ${hoveredIcon === 'star' ? 'text-secondary' : 'text-logo'} ${activeNavItem === 'star' ? 'text-secondary' : 'text-logo'}`}>Play Nintendo</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" role="presentation"  data-testid="ChevronDownIcon" color="currentColor" className={`${activeNavItem === 'star' ? 'rotate-180' : 'rotate-0'}`}><path fill-rule="evenodd" clip-rule="evenodd"  fill={hoveredIcon === 'star' || activeNavItem === 'star' ? '#E60013' : '#424242'} d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"></path></svg>
                </li>
            </ul>
        </nav>
        <div>
              {activeNavItem && <NavbarContent handleNavItemClick={handleNavItemClick} activeNavItem={activeNavItem} />}
        </div>
        </>
    );
}