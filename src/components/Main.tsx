'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';

const Main = () => {
  const handleScroll = () => {};

  return (
    <div className="main">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="main__title">
          Find the right tutor service, right away
        </h1>

        <CustomButton
          title="Explore"
          containerStyles="bg-blue-600 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="main__image-container">
        <div className="main__image">
          <Image src="/tutormain.jpeg" alt="hero" 
          fill className="object-contain " />

          <div className="main__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Main;
