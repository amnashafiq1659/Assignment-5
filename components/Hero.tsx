import React from 'react';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex h-[80%]'>
        <div className='w-1/2 flex flex-col justify-center items-start'
          style={{fontFamily:"Libre Bodoni"}}>
            <h1 className='w-[635px] font-[700] mx-auto text-[40px] leading-[65.8px] tracking-[0.02rem]'>
                IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className='pl-[160px] text-[30px] text-[#787054] mt-5 mb-5 font-medium leading-[49.35px] tracking-[0.025em]'>
                An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className='w-[288px] h-[58px] rounded-lg bg-[#A29875] ml-[160px] mt-7 text-white text-[30px] leading-[37.5px] font-medium'>
                Explore Now
            </button>
        </div>

        <div className='w-1/2 flex justify-center items-center'>
          <Image 
          src={"/images/figma_image.png"} 
          alt="figma-image" 
          width={462} 
          height={647}>
          </Image>
        </div>
    </div>
  );
}

export default Hero;
