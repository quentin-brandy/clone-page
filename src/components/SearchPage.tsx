import CardSearch from './Card_Search';
import MytimeatPortia from '/a52346fa3eeb45c7ccd23985e659a21df452a802bd0b105f666ab6231fd468ab.jpg';
export default function SearchPage() {
        let topstoreproduct = [
            {
                img: MytimeatPortia,
                title: "My Time at Portia",
                platform: "Nintendo Switch",
            },
            {
                img: MytimeatPortia,
                title: "My Time at Portia",
                platform: "Nintendo Switch",
            },
            {
                img: MytimeatPortia,
                title: "My Time at Portia",
                platform: "Nintendo Switch",
            },
            {
                img: MytimeatPortia,
                title: "My Time at Portia",
                platform: "Hardware",
            },
        ]
    return (
        <div className='flex flex-col items-start px-28 py-10 justify-start h-screen z-10'>
            <h2 className='text-logo mb-2 font-medium'>Trending topic</h2>
            <ul className='flex flex-col gap-2'>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch bundles</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Games on sale</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Games</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch Game Vouchers</li>
            <li className="text-secondary font-bold cursor-pointer hover:text-secondary-dark">Nintendo Switch OLED</li>
            </ul>
            <h2 className='text-logo mb-2 font-medium mt-10'>Top store product</h2>
            <ul className='flex flex-wrap gap-6'>
            {topstoreproduct.map((product, index) => (
            <CardSearch key={index} cards={product} />
        ))}            </ul>
        </div>
    );
};

