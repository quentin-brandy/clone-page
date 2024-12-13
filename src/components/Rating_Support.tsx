import GameRate from "/game_rate.svg";
import tvicon from "/tv_icon.svg";
import tabletopicon from "/tablet_icon.svg";
import handheldicon from "/handle_icon.svg";

export default function RatingSupport() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-center justify-center px-4 mt-16 h-full">
            <div className="flex flex-col items-center justify-center bg-lightgrey rounded-xl py-6 px-8 gap-6 w-full h-full">
            <h2 className="font-bold text-logo">ESRB Rating</h2>
            <a
                className="flex bg-white shadow-xl justify-start gap-2 w-full px-8 py-6 mb-8 font-light text-xs p-4 rounded-lg"
                href="https://www.esrb.org/ratings-guide/"
            >
                <img src={GameRate} alt="" />
                <div className="flex flex-col gap-1">
                <p className="border-b border-black pb-1">
                    Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood
                </p>
                <p>Users Interact</p>
                </div>
            </a>
            </div>
            <div className="flex flex-col items-center justify-center bg-lightgrey rounded-xl py-6 px-8 gap-6 w-full h-full">
            <h2 className="font-bold text-logo pb-5">Supported play modes</h2>
            <ul className="flex items-center gap-6 w-full">
                <li className="flex flex-col grow items-center w-full">
                <div className="flex justify-center w-full bg-logo rounded-lg">
                    <img className="bg-logo p-4 rounded-lg max-w-full h-auto min-w-16" src={tvicon} alt="" />
                </div>
                <p>TV</p>
                </li>
                <li className="flex flex-col grow items-center justify-center gap-2 w-full">
                <div className="flex justify-center w-full bg-logo rounded-lg">
                    <img className="bg-logo p-4 rounded-lg max-w-full h-auto min-w-16" src={tabletopicon} alt="" />
                </div>
                <p>Tabletop</p>
                </li>
                <li className="flex flex-col grow items-center justify-center gap-2 w-full">
                <div className="flex justify-center w-full bg-logo rounded-lg">
                    <img className="bg-logo p-4 rounded-lg max-w-full h-auto min-w-16" src={handheldicon} alt="" />
                </div>
                <p>Handheld</p>
                </li>
            </ul>
            </div>
        </section>
    );
}
