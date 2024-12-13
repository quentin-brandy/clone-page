import BuildingIcon from '/specificity/BuildingIcon.svg';
import CalendarIcon from '/specificity/CalendarIcon.svg';
import DPadIcon from '/specificity/DPadIcon.svg';
import GearIcon from '/specificity/GearIcon.svg';
import GlobeIcon from '/specificity/GlobeIcon.svg';
import GroupIcon from '/specificity/GroupIcon.svg';
import StorageIcon from '/specificity/StorageIcon.svg';
import SwitchIcon from '/specificity/SwitchLiteIcon.svg';
import WrenchIcon from '/specificity/WrenchIcon.svg';

export default function Specificity() {
    return (
        <section className="flex flex-col mt-10 mx-3 text-logo">
            <div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle">
    <img src={CalendarIcon} alt="Calendar Icon" className="h-7 w-7 flex-shrink-0" />
    <h3 className="text-lg font-semibold ">Release date</h3>
    <p className="mt-1 col-start-2 md:col-start-auto font-light md:mt-0">October 5, 2017</p>
</div>

            
<div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle">
            <img src={GroupIcon} alt="Group Icon" className="h-7 w-7 flex-shrink-0 mr-4" />
            <h3 className="text-lg font-semibold">No. of players</h3>
            <div className='flex gap-4 col-start-2 md:col-start-auto text-secondary font-bold'>
                <a href="#">
                <p className="cursor-pointer border-b-2 border-secondary ">Single System (1)</p>
                </a>
                <a href="#">
                <p className="cursor-pointer border-b-2 border-secondary">Local wireless (1)</p>
                </a>
                <a href="#">
                <p className="cursor-pointer border-b-2 border-secondary">Online (1-4)</p>
                </a>
                </div>
            </div>
            <div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle">
            <img src={DPadIcon} alt="Group Icon" className="h-7 w-7 flex-shrink-0 mr-4" />
            <h3 className="text-lg font-semibold">Genre</h3>
            <div className='flex col-start-2 md:col-start-auto gap-4 text-secondary font-bold'>
                <a href="#">
                <p className="cursor-pointer border-b-2 border-secondary">Role-playing</p>
                </a>
                <a href="#">
                <p className='cursor-pointer border-b-2 border-secondary'>Simulation</p>
                </a>
                </div>
            </div>
            <div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle">
            <img src={BuildingIcon} alt="Building Icon" className="h-7 w-7 flex-shrink-0 mr-4" />
            <h3 className="text-lg font-semibold ">Publisher</h3>
            <a className='col-start-2 md:col-start-auto' href="#">
                <p className="text-secondary font-bold cursor-pointer border-b-2 border-secondary w-fit">ConcernedApe</p>
                </a>
            </div>
            <div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle">
            <img src={WrenchIcon} alt="Wrench Icon" className="h-7 w-7 flex-shrink-0 mr-4" />
            <h3 className="text-lg font-semibold">Developer</h3>
            <a className='col-start-2 md:col-start-auto' href="#">
                <p className="text-secondary font-bold cursor-pointer border-b-2 border-secondary w-fit">ConcernedApe</p>
                </a>
            </div>
            <div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle">
            <img src={GearIcon} alt="Gear Icon" className="h-7 w-7 flex-shrink-0 mr-4" />
           
            <h3 className="text-lg font-semibold">ESRB Rating</h3>
            <a className='col-start-2 md:col-start-auto' href="#">
                <p className="text-secondary font-bold cursor-pointer border-b-2 border-secondary w-fit">Everyone 10+</p>
                </a>
         
            </div>
            <div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle">
            <img src={SwitchIcon} alt="Switch Icon" className="h-7 w-7 flex-shrink-0 mr-4" />
        
            <h3 className="text-lg font-semibold">Supported play modes</h3>
                <p className="mt-1 col-start-2 md:col-start-auto md:mt-0 md:items-center md:self-start font-normal">TV mode, Tabletop mode, Handheld mode</p>
      
            </div>
            <div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle">
            <img src={StorageIcon} alt="Storage Icon" className="h-7 w-7 flex-shrink-0 mr-4" />
            
            <h3 className="text-lg font-semibold">Game file size</h3>
                <p className=" col-start-2 md:col-start-auto mt-1 md:mt-0 md:items-center md:self-start font-normal">1.5 GB</p>
            
            </div>
            <div className="grid grid-cols-[auto,auto] md:grid-cols-[32px,1fr,2fr] gap-x-2.5 border-t w-fit md:w-full py-4 items-start pl-4 md:align-middle border-b">
            <img src={GlobeIcon} alt="Globe Icon" className="h-7 w-7 flex-shrink-0 mr-4" />
            <h3 className="text-lg font-semibold">Supported languages</h3>
                <p className=" col-start-2 md:col-start-auto mt-1 md:mt-0 md:items-center md:self-start font-normal">English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese</p>
            </div>
        </section>
    );
}
