import React, { useState } from 'react';
import img1 from '/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7.png'
import img2 from '/9c33645aee20fb323e579cd75036df000f2322de1be04662c989d42047ffbfdb (1).jpg'
import img3 from '/767ac7ae1903bc92ab31b2e131d422c0f8dc9912fd52ce51afc984b6b6974e83 (1).jpg'
import img4 from '/a14b2ba7d7d59e9ab25a74871d4d41f83527cba7485cd024bbc518c1433932c0 (1).jpg'
import img5 from '/d76a54c456854df9c9a5059eac394d744aa73fe1d7f391cf79b8a4b73bd7298b (1).jpg'
import img6 from '/dcd6f1feda032d04e7220e97e24d93d1f9c963285c88bd8e81e06a20d193054c (1).jpg'
import arrowleft from '/arrow_left.svg'
import arrowright from '/arrow_right_white.svg'
const images = [
    img1 ,
    img2  ,
    img3  ,
    img4  ,
    img5  ,
    img6  ,
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
      <div className="relative flex w-full items-center group">
            <button onClick={goToPrevious} disabled={currentIndex === 0} className={`absolute left-0 text-white font-bold h-full pl-5 ${currentIndex === 0 ? 'hidden' : 'opacity-0 group-hover:opacity-100'}`}>
              <img src={arrowleft} alt="Previous" className="h-5 md:h-10" />
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-fit rounded-lg object-cover mx-2" />
            <button onClick={goToNext} disabled={currentIndex === images.length - 1} className={`absolute right-0 text-white font-bold h-full pl-5 ${currentIndex === images.length - 1 ? 'hidden' : 'opacity-0 group-hover:opacity-100'}`}>
              <img src={arrowright} alt="Next" className="h-5 md:h-10" />
            </button>
        </div>
        <div className="flex relative mt-4 space-x-2 gap-2">
            <button onClick={goToPrevious} disabled={currentIndex === 0} className="absolute text-white font-bold h-full p-2 px-2 bg-logo rounded bg-opacity-50 opacity-50 disabled:hidden">
              <img src={arrowleft} alt="Previous" className="w-6 h-6" />
            </button>
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => goToImage(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className={`w-fit max-h-20 rounded-2xl object-cover ${index === currentIndex ? 'border-b-4 border-secondary -inset-1' : ''}`} />
              </div>
            ))}
            <button onClick={goToNext} disabled={currentIndex === images.length - 1} className="absolute text-white font-bold h-full p-2 right-0 px-2 bg-logo rounded bg-opacity-50 disabled:hidden">
            <img src={arrowright} alt="Next" className="w-6 h-6 opacity-50" />
            </button>
        </div>
      </div>
    );
};

export default CarrousselProduct;
