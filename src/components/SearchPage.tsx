import CardSearch from './Card_Search';
import MytimeatPortia from '/a52346fa3eeb45c7ccd23985e659a21df452a802bd0b105f666ab6231fd468ab.jpg';
export default function SearchPage() {
        let topstoreproduct = [
            {
                img: MytimeatPortia,
                title: "Super Mario Party™ Jamboree",
                platform: "Nintendo Switch",
            },
            {
                img: MytimeatPortia,
                title: "MySims™: Cozy Bundle",
                platform: "Nintendo Switch",
            },
            {
                img: MytimeatPortia,
                title: "Mario & Luigi™: Brothership",
                platform: "Nintendo Switch",
            },
            {
                img: MytimeatPortia,
                title: "Nintendo Sound Clock: Alarmo™",
                platform: "Hardware",
            },
        ]
    return (
        <div className='flex flex-col xl:flex-row items-start px-28 py-10 xl:pt-2 justify-start h-fit  z-10'>
            <div>
            <h2 className='text-logo mb-2 font-medium'>Trending topic</h2>
            <ul className='flex flex-col gap-2'>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch bundles</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Games on sale</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Games</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch Game Vouchers</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch OLED</li>
            </ul>
            </div>
            <div className='flex flex-col gap-3 xl:w-full xl:justify-center'>
            <h2 className='text-logo mb-2 font-medium mt-10 xl:mt-0 xl:flex xl:w-full xl:justify-center'>Top store product</h2>
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

