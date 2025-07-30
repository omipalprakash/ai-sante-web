'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import { icons } from '@/utility/image';
import { STORIES_DATA } from './constants';
import styles from './stories.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

const Stories = () => {
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 md:gap-[30px] lg:gap-[50px]">
      <h2 className="text-left sm:text-center font-['Erstoria',_sans-serif] text-[#453030]" data-aos="fade-down">
        Inside Design: Stories and Interviews
      </h2>

      {/* 🖥️ Desktop Layout */}
      <div className="hidden lg:flex flex-col md:flex-row gap-12 md:gap-[38px] lg:gap-5 justify-between">
        <div className="w-full lg:max-w-[547px]" data-aos="fade-right">
          <div className="w-full relative lg:mb-5">
            <div className='relative w-full aspect-[547/410]'>
              <Image
                src={STORIES_DATA[0]?.image}
                alt="Story Image"
                fill
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col lg:gap-[7px]">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <span className="text-black">{STORIES_DATA[0]?.name}</span>
                <Image src={icons.blackSmallDot} alt="dot" width={6} height={6} />
                <span className="text-black">{STORIES_DATA[0]?.date}</span>
              </div>
            </div>
            <h4 className="uppercase text-black">{STORIES_DATA[0]?.title}</h4>
            <p className="leading-5 md:leading-6 lg:leading-[30px]">{STORIES_DATA[0]?.content}</p>
            <div className="flex flex-wrap gap-2">
              {STORIES_DATA[0]?.tags.map((tag, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-black ${styles.tag}`}
                >
                  {tag}
                  {index !== STORIES_DATA[0]?.tags.length - 1 && (
                    <Image
                      src={icons.blackSmallDot}
                      alt="dot"
                      width={6}
                      height={6}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-1/2 xl:max-w-[775px] flex flex-col items-center lg:gap-5">
          {STORIES_DATA.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col lg:flex-row lg:gap-5 last:border-0 last:pb-0"
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-up'}
            >
              <div className="w-full lg:max-w-[320px]">
                <div className='relative w-full aspect-[320/195]'>
                  <Image
                    src={item.image}
                    alt="Story"
                    fill
                    className="h-fit rounded-md object-none aspect-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:max-w-1/2 xl:max-w-[435px] gap-[7px]">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-black">{item.name}</span>
                    <Image
                      src={icons.blackSmallDot}
                      alt="dot"
                      width={5}
                      height={5}
                    />
                    <span className="text-black">{item.date}</span>
                  </div>
                </div>
                <h4 className="uppercase text-black">{item.title}</h4>
                <p>{item.content}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 text-black ${styles.tag}`}
                    >
                      {tag}
                      {idx !== item.tags.length - 1 && (
                        <Image
                          src={icons.blackSmallDot}
                          alt="dot"
                          width={5}
                          height={5}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📱 Mobile & Tablet Slider */}
      <div className="relative block lg:hidden">
        <Slider {...sliderSettings} ref={sliderRef}>
          {STORIES_DATA.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full aspect-[547/410]">
                <Image
                  src={item.image}
                  alt="Story Image"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 547px"
                  priority
                />
              </div>
              <div className="flex flex-col gap-[7px] mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-black">{item.name}</span>
                  <Image src={icons.blackSmallDot} alt="dot" width={6} height={6} />
                  <span className="text-black">{item.date}</span>
                </div>
                <h4 className="uppercase text-black">{item.title}</h4>
                <p>{item.content}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 text-black ${styles.tag}`}
                    >
                      {tag}
                      {idx !== item.tags.length - 1 && (
                        <Image
                          src={icons.blackSmallDot}
                          alt="dot"
                          width={6}
                          height={6}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <div className="absolute bottom-[-30px] right-4 flex gap-[10px]  md:gap-[28px]">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-[26px] h-[26px] rounded-full border border-black flex leading-[18px] text-[#3a2a2a]  items-center justify-center cursor-pointer  hover:bg-gray-200 transition"
          >
            <Image src={icons.PrevArrow} width={10.9} height={9.57} alt="Prev Arrow" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-[26px] h-[26px] rounded-full border border-black flex leading-[18px] text-[#3a2a2a]  items-center justify-center cursor-pointer  hover:bg-gray-200 transition"
          >
            <Image src={icons.NextArrow} width={10.9} height={9.57} alt="Next Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
