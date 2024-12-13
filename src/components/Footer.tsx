import logo from '/logo.svg'
import Youtube from '/YoutubeIcon.svg'
import Facebook from '/FacebookIcon.svg'
import X from '/XIcon.svg'
import Instagram from '/InstagramIcon.svg'
import ESRBCertif from '/ESRB_certif.png'
import USA from '/FlagUsaIconRegionSelect.png'
export default function Footer(){
    return(
   <>
   <footer className='w-full'>
<div className='flex justify-between bg-secondary py-9 px-4 mb-4 flex-wrap'>
    
        <img className='w-44' src={logo} alt="" />
        <div className='flex gap-16 flex-wrap'>

<img src={Facebook} alt="" />

 <img src={Instagram} alt="" />

  <img src={X} alt="" />

   <img src={Youtube} alt="" />

</div>
    </div>
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 p-8'>
        <div className="flex flex-col border-l-2 border-lightgrey pl-4">
            <h3 className="font-medium mb-2 text-logo hover:border-b-2 cursor-pointer border-b-2 border-transparent hover:border-secondary w-fit">About Nintendo</h3>
            <ul className="space-y-1 ">
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Careers</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Corporate Social Responsibility</a></li>
            </ul>
        </div>

        <div className="flex flex-col border-l-2 border-lightgrey pl-4">
            <h3 className="font-medium mb-2 text-logo hover:border-b-2 cursor-pointer border-b-2 border-transparent hover:border-secondary w-fit">Shop</h3>
            <ul className="space-y-1 ">
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Games</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Hardware</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Merchandise</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Sales & deals</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Exclusives</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Online service</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Nintendo NY store</a></li>
            </ul>
        </div>

        <div className="flex flex-col border-l-2 border-lightgrey pl-4">
            <h3 className="font-medium mb-2 text-logo hover:border-b-2 cursor-pointer border-b-2 border-transparent hover:border-secondary w-fit">Orders</h3>
            <ul className="space-y-1 ">
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Order details</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Shipping info</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Returns & exchanges</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">FAQ</a></li>
            </ul>
        </div>

        <div className="flex flex-col border-l-2 border-lightgrey pl-4">
            <h3 className="font-medium mb-2 text-logo hover:border-b-2 cursor-pointer border-b-2 border-transparent hover:border-secondary w-fit">Support</h3>
            <ul className="space-y-1 ">
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Nintendo Switch</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Nintendo Account</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Other systems</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Repairs</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Nintendo product recycling</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Warranty</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Licensed product information</a></li>
            </ul>
        </div>

        <div className="flex flex-col border-l-2 border-lightgrey pl-4">
            <h3 className="font-medium mb-2 text-logo hover:border-b-2 cursor-pointer border-b-2 border-transparent hover:border-secondary w-fit">Parents</h3>
            <ul className="space-y-1 ">
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Info for parents</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Parental controls</a></li>
            </ul>
        </div>

        <div className="flex flex-col border-l-2 border-lightgrey pl-4">
            <h3 className="font-medium mb-2 text-logo hover:border-b-2 cursor-pointer border-b-2 border-transparent hover:border-secondary w-fit">Privacy</h3>
            <ul className="space-y-1 ">
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Privacy policy</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Cookies and interest-based ads</a></li>
            </ul>
        </div>

        <div className="flex flex-col border-l-2 border-lightgrey pl-4">
            <h3 className="font-medium mb-2 text-logo hover:border-b-2 cursor-pointer border-b-2 border-transparent hover:border-secondary w-fit">Community</h3>
            <ul className="space-y-1 ">
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Community guidelines</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Online safety principles</a></li>
            </ul>
        </div>

        <div className="flex flex-col border-l-2 border-lightgrey pl-4 ">
            <h3 className="font-medium mb-2 text-logo hover:border-b-2 cursor-pointer border-b-2 border-transparent hover:border-secondary w-fit">Documents & policies</h3>
            <ul className="space-y-1 ">
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Health & safety precautions</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Wireless regulatory info</a></li>
                <li><a href="#" className="text-secondary font-medium text-sm border-b-2 border-transparent hover:border-secondary pb-2">Supply chain transparency</a></li>
            </ul>
        </div>
        </section>
        <div className='flex w-full justify-center lg:justify-end lg:pr-8 pb-8 '>
            <img className='w-16' src={ESRBCertif} alt="ESRB Certif" />
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-between gap-10 py-8 px-4 bg-[#242424] text-primary text-xs w-full'>
            <p className='flex-1 text-start'>© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
            <div className='flex gap-4'>
            <a href="#">Contact us</a>
            <a href="#">Website feedback</a>
            <a href="#">Terms of Use</a>
            </div>
            <div className='flex gap-4'>
            <img className='border-2 border-primary rounded-md' src={USA} alt="" />
            <a className='break-words font-bold' href='#'>English (United States)</a>
            </div>
        </div>
    </footer>
        </>
    )
}