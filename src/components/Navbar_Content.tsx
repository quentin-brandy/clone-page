import DPad from "/nav/DPadIcon.svg";
import Mario from "/nav/mariojump.svg";
import flocon from "/nav/flocon.svg";
import starshop from "/nav/star.svg";
import joycon from "/nav/joycon.svg";
import manette from "/nav/manette.svg";
import etiquette from "/nav/etiquette.svg";
import tshirt from "/nav/tshirt.svg";
import whiteclose from "/nav/whiteclose.svg";
import mariocasquette from "/other/mario.svg"
import oled from '/nav/oled.png';
import allconsole from '/nav/allconsole.png';
import controller from '/nav/procon.png';
import { useState } from 'react';
export default function NavbarContent({ handleNavItemClick , activeNavItem }: any) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  
  const nintendostore = [
    {
      title: "Games",
      img: DPad,
      sublinks: [
        {
          title: "Nintendo Switch games",
        },
        {
          title: "New releases",
        },
        {
          title: "Sales & deals",
        },
      ],
    },
    {
      title: "Hardware",
      img: manette,
      sublinks: [
        {
          title: "Nintendo Switch systems",
        },
        {
          title: "Joy-Con & controllers",
        },
        {
          title: "Cases & more",
        },
      ],
    },
    {
      title: "Merchandise",
      img: tshirt,
      sublinks: [
        {
          title: "Apparel & accessories",
        },
        {
          title: "Home & office",
        },
        {
          title: "Plush",
        },
        {
          title: "Toys",
        }
      ],
    },
    {
      title: "Store exclusives",
      img: starshop,
      sublinks: [
        {
          title: "Exclusive products",
        },
        {
          title: "My Nintendo rewards",
        },
        {
          title: "Nintendo Switch Online offers",
        },
      ],
    },
    {
      title: "Characters",
      img: Mario,
      sublinks: [
        {
          title: "Pikmin",
        },
        {
          title: "Splatoon",
        },
        {
          title: "Super Mario",
        },
        {
          title: "The Legend of Zelda",
        },
      ],
    },
  ];


  const games  = [{

      img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="42" role="presentation"  data-testid="SwitchIcon"  color="currentColor"><path d="M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z" fill={hoveredIcon === 'Nintendo Switch games' ? 'white' : '#424242'} fill-rule="evenodd"/></svg>,
      title: "Nintendo Switch games",
  },
  {
    img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 34.22" width="42" height="42" role="presentation"  data-testid="MegaphoneDarkIcon"  color="currentColor"><path d="M29.55 0a1.91 1.91 0 0 1 1.93 1.87V10h.21a4.87 4.87 0 0 1 4.82 4.89v.2A4.87 4.87 0 0 1 31.69 20h-.21v8.1a1.91 1.91 0 0 1-1.93 1.87L19 22.45h-4.61l1.13 8.62a3.24 3.24 0 0 1-3.31 3.15h-1.66a3.24 3.24 0 0 1-3.31-3.15l-1.13-8.62H3.4A3.59 3.59 0 0 1 0 18.71v-7.49a3.6 3.6 0 0 1 3.4-3.74H18.95zm8.2 20.81a.6.6 0 0 1 .85.05l4.12 4.61a.62.62 0 0 1 0 .86.59.59 0 0 1-.41.16.6.6 0 0 1-.44-.2l-4.17-4.61a.63.63 0 0 1 .05-.87zm-6.06-8.39h-.21v5.09h.21a2.42 2.42 0 0 0 2.41-2.44v-.2a2.43 2.43 0 0 0-2.41-2.45zM43.4 14a.62.62 0 0 1 0 1.23h-4.67a.62.62 0 0 1 0-1.23h4.67zM41.83 3a.59.59 0 0 1 .85 0 .62.62 0 0 1 0 .86l-4.08 4.6a.62.62 0 0 1-.45.2.61.61 0 0 1-.4-.16.63.63 0 0 1 0-.87z" fill-rule="evenodd" fill={hoveredIcon === 'New releases' ? 'white' : '#424242'}/></svg>,
    title: "New releases",
  },
  {
      img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="42" height={42} role="presentation"  data-testid="CalendarIcon" color="currentColor"><path fill={hoveredIcon === 'Coming soon' ? 'white' : '#424242'} d="M21.8 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm1.6-20.3h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9h-1.5c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm-16.3 0h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9H7.1c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm6.1 20.3h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"/><path fill={hoveredIcon === 'Coming soon' ? 'white' : '#424242'} d="M29.5 4.3H27v2.2c0 1.2-.9 2.1-2.1 2.1h-1.5c-1.2 0-2.1-1-2.1-2.1V4.3H10.7v2.2c0 1.2-.9 2.1-2.1 2.1H7.1C5.9 8.6 5 7.6 5 6.5V4.3H2.5C1.1 4.3 0 5.4 0 6.7V29c0 1.4 1.1 2.5 2.5 2.5h27c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.3-1.1-2.4-2.5-2.4zm0 24.7h-27V10.4h27V29z"/><path fill={hoveredIcon === 'Coming soon' ? 'white' : '#424242'} d="M13.2 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm-8.6 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0-8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"/></svg>,
      title: "Coming soon",
  },
  {
      img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="42" role="presentation"  data-testid="DPadIcon"  color="currentColor"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill={hoveredIcon === 'Shop games' ? 'white' : '#424242'}/></svg>,
      title: "Shop games",
  },
  ]

  const switchitems = [
    {
      img:<img className=" px-0" width={258} src={allconsole} alt="" />,
      title: "Nintendo Switch lineup",
    },
  {
    img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.62 43.47"  width="62" role="presentation" data-testid="CompareArrowsIcon" color="currentColor"><path fill-rule="evenodd" fill={hoveredIcon === 'Compare systems' ? 'white' : '#424242'} d="M33.64 14.63L19.01 29.25l-3.65-3.66 8.41-8.41L0 17.31v-5.37l23.77.13-8.41-8.41L19.01 0l14.63 14.63zM31.98 28.84L46.6 43.47l3.66-3.66-8.41-8.41 23.77.12v-5.36l-23.77.13 8.41-8.41-3.66-3.66-14.62 14.62z"/></svg>,
    title: "Compare systems",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="42" role="presentation"  data-testid="NsoIcon"  color="currentColor"><path fill="#E60013" d="M0 0v32h32V0zm8.785 9.232a3.7 3.7 0 0 1 3.7-3.7h3.154a.106.106 0 0 1 .106.106v14.218a.106.106 0 0 1-.106.106h-3.154a3.7 3.7 0 0 1-3.7-3.7zM6.767 26.596a2.034 2.034 0 1 1 2.064-2.034 2.05 2.05 0 0 1-2.064 2.034zm6.473-.124h-.677l-2.032-2.547v2.547h-.773v-3.82h.77l1.9 2.464v-2.464h.812zm4.025 0H14.35v-3.82h.82v3.075h2.094zm1.616 0h-.82v-3.82h.82zm-1.586-6.51a.105.105 0 0 1-.106-.106V5.626a.093.093 0 0 1 .094-.094h2.232a3.7 3.7 0 0 1 3.7 3.7v7.03a3.7 3.7 0 0 1-3.7 3.7zm6.178 6.51h-.676l-2.033-2.547v2.547h-.772v-3.82h.769l1.901 2.464v-2.464h.811zm4.27-3.075H25.41v.76h2.22v.707h-2.22v.863h2.333v.745H24.59v-3.82h3.154z"/><path fill="#E60013" d="M6.767 23.306a1.257 1.257 0 1 0 1.214 1.256 1.236 1.236 0 0 0-1.214-1.256zm5.718-4.508h2.097V6.696h-2.097A2.536 2.536 0 0 0 9.95 9.232v7.03a2.536 2.536 0 0 0 2.536 2.536zm-.097-10.294a1.357 1.357 0 1 1-1.356 1.356 1.357 1.357 0 0 1 1.356-1.356zm7.655 3.506a1.459 1.459 0 1 0 1.46 1.458 1.459 1.459 0 0 0-1.46-1.458z"/></svg>,
    title: "Online service",
  },
  {
    img: <img width={118} src={controller} alt="" />,
    title: "Accessories",
  },
  {
    img: <img width={118} src={oled} alt="" />,
    title: "Shop systems",
  },
  ];

  const star = [{

    img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 27.76" width="42" role="presentation"  data-testid="ForKidsIcon"  color="currentColor"><path d="M45.55,0c-8,0-14.46,6.21-14.46,13.88s6.47,13.88,14.46,13.88S60,21.55,60,13.88,53.53,0,45.55,0m0,3.75c5.9,0,10.7,4.55,10.7,10.13S51.45,24,45.55,24,34.84,19.46,34.84,13.88,39.64,3.75,45.55,3.75" fill={hoveredIcon === 'For kids' ? 'white' : '#424242'} fill-rule="evenodd"/><path d="M43.66,11.28A1.75,1.75,0,0,1,41.93,13a1.67,1.67,0,0,1-1.74-1.6v-.13A1.74,1.74,0,1,1,43.66,11a1.13,1.13,0,0,1,0,.26m7.09,0A1.77,1.77,0,0,1,49,13a1.66,1.66,0,0,1-1.73-1.59v-.14A1.74,1.74,0,1,1,50.74,11a1.13,1.13,0,0,1,0,.26M45.4,20.39a7,7,0,0,1-5.21-2.32,1,1,0,0,1-.06-1.41.91.91,0,0,1,.21-.18,1.18,1.18,0,0,1,1.67.08l.06.07a4.76,4.76,0,0,0,3.33,1.44,5.06,5.06,0,0,0,3.47-1.44,1.32,1.32,0,0,1,1.73-.15,1.15,1.15,0,0,1,.15,1.59,7.08,7.08,0,0,1-5.35,2.32" fill={hoveredIcon === 'For kids' ? 'white' : '#424242'} fill-rule="evenodd"/><path d="M14.45,0C6.47,0,0,6.21,0,13.88S6.47,27.76,14.45,27.76s14.46-6.21,14.46-13.88S22.44,0,14.45,0m0,3.75c5.91,0,10.71,4.55,10.71,10.13S20.36,24,14.45,24,3.75,19.46,3.75,13.88,8.55,3.75,14.45,3.75"fill={hoveredIcon === 'For kids' ? 'white' : '#424242'} fill-rule="evenodd"/><path d="M12.57,11.28A1.75,1.75,0,0,1,10.84,13,1.67,1.67,0,0,1,9.1,11.4v-.12a1.67,1.67,0,0,1,1.6-1.74h.14a1.67,1.67,0,0,1,1.73,1.61v.13m7.09,0A1.76,1.76,0,0,1,17.92,13a1.67,1.67,0,0,1-1.74-1.6v-.13a1.74,1.74,0,1,1,3.48,0h0m-5.35,9.12A7,7,0,0,1,9.1,18.07,1,1,0,0,1,9,16.66a.91.91,0,0,1,.21-.18,1.18,1.18,0,0,1,1.67.08l.06.07a4.74,4.74,0,0,0,3.33,1.44,5.06,5.06,0,0,0,3.47-1.44,1.32,1.32,0,0,1,1.73-.15,1.15,1.15,0,0,1,.15,1.59,7.11,7.11,0,0,1-5.35,2.32" fill={hoveredIcon === 'For kids' ? 'white' : '#424242'} fill-rule="evenodd"/></svg>,
    title: "For kids",
  },
  {
    img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.22 42.34" width="42" role="presentation"  data-testid="ForParentsIcon"  color="currentColor"><path d="M46.32 32.31A7.13 7.13 0 0 1 41 29.94a1.05 1.05 0 0 1 .15-1.62 1.21 1.21 0 0 1 1.77.15 4.76 4.76 0 0 0 3.39 1.47 5.13 5.13 0 0 0 3.54-1.47 1.35 1.35 0 0 1 1.77-.15 1.17 1.17 0 0 1 .15 1.62 7.23 7.23 0 0 1-5.46 2.37M51.78 23A1.79 1.79 0 0 1 50 24.78 1.77 1.77 0 1 1 51.78 23m-7.23 0a1.79 1.79 0 0 1-1.77 1.77A1.77 1.77 0 1 1 44.55 23m12.68 2.8a10.77 10.77 0 0 0-21.53 0 10.68 10.68 0 0 0 10.77 10.49c6-.15 10.76-4.72 10.76-10.48M31 16.67a2.84 2.84 0 0 0-3-2.8 2.92 2.92 0 0 0-3 2.8 2.83 2.83 0 0 0 3 2.8 2.93 2.93 0 0 0 3-2.8m-12 0a2.84 2.84 0 0 0-3-2.8 2.93 2.93 0 0 0-2.95 2.8 2.84 2.84 0 0 0 2.95 2.8 2.93 2.93 0 0 0 3-2.8m3 15.19A12.62 12.62 0 0 0 31 28a2.06 2.06 0 0 0-.15-2.8h-.15a2.1 2.1 0 0 0-2.95.29A8 8 0 0 1 22 28a7.19 7.19 0 0 1-5.61-2.51 2.24 2.24 0 0 0-3-.29 1.93 1.93 0 0 0-.29 2.8v.15a12.12 12.12 0 0 0 8.9 3.71m24.47-20.35c8.11 0 14.75 6.34 14.75 14.16s-6.64 14.16-14.75 14.16a14.53 14.53 0 0 1-9.3-3.25 22.8 22.8 0 0 1-15 5.76C9.88 42.34 0 32.75 0 21.1S9.88 0 22.13 0A22.05 22.05 0 0 1 42 12.24a15.56 15.56 0 0 1 4.43-.73"  fill={hoveredIcon === 'For parents' ? 'white' : '#424242'} fill-rule="evenodd"/></svg>,
    title: "For parents",
  },
];


  return (
    <div>
      {activeNavItem === 'games' && (
        <div className="flex flex-col gap-4">
            <div className="bg-secondary  flex items-center justify-center relative gap-2 p-4 overflow-x-hidden w-full after:content-[''] after:bg-[url('/nav/pattern.svg')] after:bg-repeat after:bg-bottom after:w-full after:h-[10px] after:absolute after:bottom-0 after:rotate-180">
            <div className="flex gap-2 items-center">
              <img className="text-white" width={48} src={mariocasquette} alt="" />
              <h2 className="font-medium text-lg text-primary">My Nintendo Store</h2>
            </div>
            <button className="absolute cursor-pointer right-4" onClick={() => handleNavItemClick(null)}>
              <img width={24} src={whiteclose} alt="" />
            </button>
            </div>
  <div className="flex  justify-center gap-6 px-4">
    {nintendostore.map((game, index) => (
      <div className="" key={index}>
        <div className="flex gap-2 pb-2 items-center">
          <a className="flex gap-2" href="">
        <img width={16} src={game.img} alt="" />
        <h3 className="font-medium text-logo hover:text-secondary">{game.title}</h3>
        </a>
        </div>
        <ul className="flex flex-col gap-2">
          {game.sublinks.map((sublink, subIndex) => (
            <li className=" text-logo text-sm hover:text-secondary" key={subIndex}>
              <a href="#">{sublink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
    <ul className="flex flex-col gap-2">
    <li className="flex gap-2 items-center">
            <a className="flex gap-2 text-logo font-medium" href="#">
              <img width={16} src={etiquette} alt="" />
              <p className="text-logo hover:text-secondary">Sales & deals</p>
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <a className="flex gap-2 text-logo font-medium" href="#">
              <img width={16} src={flocon} alt="" />
              <p className="text-logo  hover:text-secondary">Holiday Gift Guide</p>
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <a className="flex gap-2 text-logo font-medium" href="#">
              <img width={16} src={joycon} alt="" />
              <p className="text-logo  hover:text-secondary">Create a Nintendo Switch gift set</p>
            </a>
          </li>
    </ul>
  </div>
    <button className="flex justify-center w-full mt-10 mb-4">
      <p className="text-secondary font-medium text-lg rounded-xl px-6 py-2  border border-secondary hover:bg-opacity-30 hover:bg-secondary">Shop all</p>
    </button>
        </div>
      )}
      {activeNavItem === 'dpad' && <div className="relative flex flex-wrap justify-center items-start pt-10 pb-4 gap-4">
        {games.map((game, index) => (
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer" key={index}
          onMouseEnter={() => setHoveredIcon(game.title)}
         onMouseLeave={() => setHoveredIcon(null)}>
            <div className={`flex items-center justify-center border rounded-2xl border-lightgrey px-8 py-4 bg-${hoveredIcon === game.title ? 'secondary' : 'white'} `}>
              {game.img}
            </div>
            <p className={`text-sm text-logo max-w-32 text-center text-wrap text-${hoveredIcon === game.title ? 'secondary' : 'logo'}`}>{game.title}</p>
          </div>
        ))}
         <button className="absolute cursor-pointer right-4 top-4" onClick={() => handleNavItemClick(null)}  onMouseEnter={() => setHoveredIcon("close")}
         onMouseLeave={() => setHoveredIcon(null)}>
         <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24" role="presentation"  data-testid="CloseCircleIcon" color="currentColor"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z" fill={hoveredIcon === 'close' ? '#424242' : '#C8C8C8'} fill-rule="evenodd"></path></svg>
            </button>
      </div>}
      {activeNavItem === 'switch' && <div className="relative flex justify-center items-start pt-10 pb-4 gap-4">
        {switchitems.map((game, index) => (
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer" key={index}
          onMouseEnter={() => setHoveredIcon(game.title)}
         onMouseLeave={() => setHoveredIcon(null)}>
            <div className={`flex items-center justify-center border rounded-2xl border-lightgrey px-8 py-4 bg-${hoveredIcon === game.title ? 'secondary' : 'white'} h-16`}>
              {game.img}
            </div>
            <p className={`text-sm text-logo max-w-32 text-center text-wrap text-${hoveredIcon === game.title ? 'secondary' : 'logo'}`}>{game.title}</p>
          </div>
        ))}
         <button className="absolute cursor-pointer right-4 top-4" onClick={() => handleNavItemClick(null)}  onMouseEnter={() => setHoveredIcon("close")}
         onMouseLeave={() => setHoveredIcon(null)}>
         <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24" role="presentation"  data-testid="CloseCircleIcon" color="currentColor"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z" fill={hoveredIcon === 'close' ? '#424242' : '#C8C8C8'} fill-rule="evenodd"></path></svg>
            </button>
            </div>}
      {activeNavItem === 'star' && <div className="relative flex justify-center items-start pt-10 pb-4 gap-4">
        {star.map((game, index) => (
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer" key={index}
          onMouseEnter={() => setHoveredIcon(game.title)}
         onMouseLeave={() => setHoveredIcon(null)}>
            <div className={`flex items-center justify-center border rounded-2xl border-lightgrey px-8 py-4 bg-${hoveredIcon === game.title ? 'secondary' : 'white'} h-16`}>
              {game.img}
            </div>
            <p className={`text-sm text-logo max-w-32 text-center text-wrap text-${hoveredIcon === game.title ? 'secondary' : 'logo'}`}>{game.title}</p>
          </div>
        ))}
         <button className="absolute cursor-pointer right-4 top-4" onClick={() => handleNavItemClick(null)}  onMouseEnter={() => setHoveredIcon("close")}
         onMouseLeave={() => setHoveredIcon(null)}>
         <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24" role="presentation"  data-testid="CloseCircleIcon" color="currentColor"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z" fill={hoveredIcon === 'close' ? '#424242' : '#C8C8C8'} fill-rule="evenodd"></path></svg>
            </button>
            </div>}
    </div>
  );
}
