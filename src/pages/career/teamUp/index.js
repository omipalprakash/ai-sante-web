
import Image from 'next/image';
import React from 'react';
import { cardsData } from '@/lib/teamUp_constant';

export default function TeamUp() {
  return (
    <section className='pb-[30px] pt-[56px] md:pt-[86px] md:pb-[80px] lg:pt-[140px] lg:pb-[50px]'
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 4.45%, #FFF4E6 98.34%)',
      }}
    >
      <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className=" text-[#C37A20] font-[Erstoria] text-center mb-[20px] md:mb-[40px] lg:mb-[51px]">
          Team Up With <br /> Your Future Crew
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full mx-auto">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-6 rounded-lg flex flex-col gap-4 h-72`}
            >
              <Image
                src={card.icon}
                alt={card.alt}
                className="flex items-center justify-start text-4xl"
                width={50} height={50}
              />
              <div className="border-t border-gray-400 my-2"></div>
              <h2 className={`${card.textColor} text-xl font-bold`}>
                {card.title}
              </h2>
              <p className={`${card.textColor} text-sm`}>
                {/* {card.description} */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
