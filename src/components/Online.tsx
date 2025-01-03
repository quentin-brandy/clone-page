import Onlinelogo from '/specificity/NsoHorizontalLogoIcon.svg';
import Controller from '/other/Pro-Controller-Hands.png'
export default function Online() {
    return(
<section className="flex items-center  mt-20 bg-[#f8f8f8] rounded-lg ">
    <div className="flex flex-col gap-6 bg-[#f8f8f8] font-medium p-8 md:w-1/2">
        <img src={Onlinelogo} width={200} alt="" />
        <p className='font-medium text-logo text-xl'> Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.</p>
     
        <div className='flex flex-wrap gap-2 font-medium text-base'>
            <p className='text-logo'>This game supports:</p>
            <div className='flex gap-4 text-secondary'>
                <a href="#">
                <p className='border-b-2 border-secondary'>Online Play</p>
                </a>
                <a href="#">
                <p className='border-b-2 border-secondary'> Save Data Cloud</p>
                </a>
            </div>
            </div>
            <a className='bg-secondary py-3 px-6 rounded-lg w-fit' href="#">
                <button className='text-primary font-bold text-lg'>Learn more</button>
            </a>  
    </div>
    <div className='hidden md:block'>
                <img src={Controller} alt="" />
            </div>
</section>
    );
}