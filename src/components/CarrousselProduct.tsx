import React, { useState } from 'react';
import img1 from '/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 (2).jpg'
import img2 from '/9c33645aee20fb323e579cd75036df000f2322de1be04662c989d42047ffbfdb (1).jpg'
import img3 from '/767ac7ae1903bc92ab31b2e131d422c0f8dc9912fd52ce51afc984b6b6974e83 (1).jpg'
const images = [
      img1 ,
      img2  ,
      img3  ,
      img3  ,
      img3  ,
      img3  ,
];

const CarrousselProduct: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col pr-4 items-center">
            <div className="flex w-full items-center">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-fit rounded-lg object-cover mx-2" />
            </div>
            <div className="flex relative mt-4 space-x-2">
            <button onClick={goToPrevious} disabled={currentIndex === 0} className=" absolute text-white font-bold  h-full p-2 pr-4 bg-logo rounded bg-opacity-50 opacity-50 disabled:hidden">
                    &lt;
                </button>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => goToImage(index)}
                    >
                        <img src={image} alt={`Thumbnail ${index + 1}`} className={`w-fit h-fit md:h- rounded-lg object-cover ${index === currentIndex ? 'border-b-4 border-secondary -inset-1' : ''}`} />
                    </div>
                ))}
                 <button onClick={goToNext} disabled={currentIndex === images.length - 1} className="absolute text-white font-bold  h-full p-2 right-0 pr-4 bg-logo rounded bg-opacity-50 disabled:hidden">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CarrousselProduct;
