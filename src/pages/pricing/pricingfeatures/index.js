import CheckSvg from '@/component/icons/checkSvg';
import {
  FEATURE_LIST,
  HERO_DESCRIPTION,
  HERO_PRICE,
  HERO_SUBTITLE,
  HERO_SUBTITLE_2,
  HERO_TITLE,
  HERO_PRICE_2,
} from '@/lib/pricing_constant';
import Link from 'next/link';

const PricingFeatures = () => {
  return (
    <section className="bg-[white] text-gray-800 py-8 md:py-12 lg:py-16">
      {/* <div className="relative max-w-[1440px] mx-auto h-full px-4 md:px-8 lg:px-12"> */}
      <div className={`max-w-[1440px] mx-auto h-full flex flex-col-reverse bg-[#eef0f2] items-center justify-between md:flex-row relative`}>
        {/* Overlay Content */}
        <div className="max-w-full md:block lg:block md:max-w-1/2 lg:max-w-[700px] flex items-center justify-start ">
          {/* <div className="absolute inset-0 z-10 flex items-center justify-start px-4 md:px-8 lg:px-12"> */}
          <div className="flex flex-col items-start gap-[50px] pt-[90px] md:pt-[104px] lg:pt-[174px] pb-[35px] md:pb-[125px] lg:pb-[125px] pl-4 md:pl-[50px] pr-4 md:pr-0 text-rightmax-w-xl">
            <h2 classname="text-[#203250]">
              {HERO_TITLE}
            </h2>
            <p className="text-[#203250] leading-5 md:leading-6 lg:leading-[30px] text-[13px] md:text-[14px] lg:text-[16px] font-[400]">
              {/* {HERO_SUBTITLE}
              {HERO_SUBTITLE_2} */}
            </p>
            <div className="flex flex-row gap-4 md:gap-[21px] lg:gap-[30px] ">
              <Link href="#"
                className="inline-block bg-[#203250] text-white font-[400] px-3 py-3 rounded-[10px] text-[13px] md:text-sm lg:text-base"
              >
                {HERO_PRICE}

              </Link>
              <Link href="#"
                className="inline-block border border-[#203250] text-[#203250] font-[400] px-3   py-3 rounded-[10px] text-[13px] md:text-sm lg:text-base"
              >
                {HERO_PRICE_2}

              </Link>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="max-w-full md:max-w-1/2  lg:max-w-[773px]">
          <video width={773} height={667} autoPlay
            muted
            loop
            playsInline src='/video/Pricing_mobile.mp4'></video>
        </div>
      </div>
      {/* </div> */}

    </section>
  );
};

export default PricingFeatures;
