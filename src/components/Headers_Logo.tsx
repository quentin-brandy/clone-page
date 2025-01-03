import flag from '/other/FlagUsaIconRegionSelect.png'
import { useState } from 'react';
export default function Headers_Logo() {
const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);


 return(
    <ul className='flex gap-5 items-center pr-4'>
        <li className='flex gap-2 items-center cursor-pointer hover:text-secondary' 
         onMouseEnter={() => setHoveredIcon('support')}
         onMouseLeave={() => setHoveredIcon(null)}>
        <a className='flex gap-2 justify-center items-center' href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" data-testid="SupportIcon" color="currentColor" ><path d="M28.126.862H3.876A3.904 3.904 0 0 0 0 4.757v17.838a3.905 3.905 0 0 0 3.875 3.896h8.375c.125 0 .125 0 .125.125l3.626 4.397a.122.122 0 0 0 .125.125c.125 0 .125 0 .25-.125L20 26.616a.122.122 0 0 1 .124-.125h8.001A3.904 3.904 0 0 0 32 22.595V4.757A3.903 3.903 0 0 0 28.126.862zM17.954 20.91a2.018 2.018 0 0 1-.438.64 2.062 2.062 0 0 1-1.446.58 2.092 2.092 0 0 1-.802-.154 1.944 1.944 0 0 1-.652-.43 1.98 1.98 0 0 1-.427-.642 2.119 2.119 0 0 1-.001-1.59 1.97 1.97 0 0 1 .43-.65 2.055 2.055 0 0 1 .643-.432 2.078 2.078 0 0 1 1.613 0 2.152 2.152 0 0 1 .64.428l.002.001a2.045 2.045 0 0 1 .438 2.25zm2.964-10.055a4.505 4.505 0 0 1-.662 1.159 5.04 5.04 0 0 1-.861.844l-.822.622a6.01 6.01 0 0 0-.626.538.766.766 0 0 0-.231.426l-.303 1.923h-2.517l-.222-2.13a1.824 1.824 0 0 1 .193-1.127 3.152 3.152 0 0 1 .648-.812 7.965 7.965 0 0 1 .838-.658 6.94 6.94 0 0 0 .782-.626 3.116 3.116 0 0 0 .574-.716 1.726 1.726 0 0 0 .208-.873 1.287 1.287 0 0 0-.112-.55 1.213 1.213 0 0 0-.318-.414 1.482 1.482 0 0 0-.506-.275 2.946 2.946 0 0 0-1.628.018 3.595 3.595 0 0 0-.666.277 8.824 8.824 0 0 0-.49.294.966.966 0 0 1-1.483-.33l-.872-1.378.24-.212a8 8 0 0 1 .86-.657 6.234 6.234 0 0 1 1.023-.55 6.4 6.4 0 0 1 1.192-.37 6.63 6.63 0 0 1 3.248.15 4.301 4.301 0 0 1 1.475.826 3.736 3.736 0 0 1 .966 1.314 4.161 4.161 0 0 1 .34 1.703 4.304 4.304 0 0 1-.268 1.584z" fill={hoveredIcon === 'support' ? '#E60013' : '#424242'} fill-rule="evenodd"></path></svg>
        <p className='hover:text-secondary text-sm font-medium'>Support</p>
        </a>
        </li>
        <li className='flex gap-2 items-center hover:text-secondary'
         onMouseEnter={() => setHoveredIcon('heart')}
         onMouseLeave={() => setHoveredIcon(null)}>
        <a className='flex gap-2 justify-center items-center' href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation"  data-testid="HeartIcon" color="currentColor" ><path d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z" fill-rule="evenodd" clip-rule="evenodd" fill={hoveredIcon === 'heart' ? '#E60013' : '#424242'}></path></svg>
        <p className='hover:text-secondary text-sm font-medium'>Whishlist</p>
        </a>
        </li>
    <li className='flex gap-2 items-center hover:text-secondary'
     onMouseEnter={() => setHoveredIcon('cart')}
     onMouseLeave={() => setHoveredIcon(null)}>
    <a className='flex gap-2 justify-center items-center' href="#">
    <svg data-name="Shopping cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation"  data-testid="ShoppingCartIcon" color="currentColor" ><path fill={hoveredIcon === 'cart' ? '#E60013' : '#424242'} d="M23.12 28.073a2.248 2.248 0 1 0 2.25-2.326h-.005a2.288 2.288 0 0 0-2.245 2.326zm2.397-7.29a1.728 1.728 0 0 0 1.498-.982l4.844-11.686a1.544 1.544 0 0 0-.15-1.551 1.593 1.593 0 0 0-1.349-.673H8.44l-.55-2.895A1.494 1.494 0 0 0 6.393 1.6H1.598A1.606 1.606 0 0 0 0 3.255a1.548 1.548 0 0 0 1.598 1.654h3.496L7.49 18.973l-1.098 4.706a1.67 1.67 0 0 0 .25 1.395 1.529 1.529 0 0 0 1.198.673h18.675a1.656 1.656 0 0 0 0-3.31H9.937l.4-1.654zm-18.726 7.29a2.248 2.248 0 1 0 2.25-2.326h-.005a2.288 2.288 0 0 0-2.245 2.326z"></path></svg>
    <p className='hover:text-secondary text-sm font-medium'>Cart</p>
    </a>
    </li>
    <li className='flex gap-2 items-center hover:text-secondary'
       onMouseEnter={() => setHoveredIcon('account')}
       onMouseLeave={() => setHoveredIcon(null)}>
    <a className='flex gap-2 justify-center items-center' href="#">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation"  data-testid="UserIcon"  color="currentColor" ><path d="M16.22 19.41A9.71 9.71 0 1 1 26 9.7a9.74 9.74 0 0 1-9.8 9.71M1.84 32a10.88 10.88 0 0 1 10.94-10.74h6.57A10.88 10.88 0 0 1 30.29 32H1.84" fill={hoveredIcon === 'account' ? '#E60013' : '#424242'}></path></svg>
    <p className='hover:text-secondary text-sm font-medium'>Login /Sign up</p>
    </a>
    </li>
        <li className='flex gap-2 items-center hover:text-secondary'> 
        <a className='flex gap-2 justify-center items-center' href="#">
        <img src={flag} className='cursor-pointer border-1 border-primary h-4' alt="" />
        </a>
       </li>
    </ul>
    );

}