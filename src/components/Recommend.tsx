import CarrousselReco from "./CarrousselReco";

export default function Recommended() {
    return (
        <section className="flex flex-col mt-10 mx-3 text-logo gap-10">
            <h2 className="text-2xl font-bold">More like this</h2>
            <CarrousselReco/>
        </section>
    );
}