import { icons } from '@/utility/image';
import Image from 'next/image';
import Link from 'next/link';

export default function JoinUsHelthcare() {
  return (
    <section className="join mt-[20px] md:mt-[40px] ">
      <div className="relative hidden md:block mx-auto max-w-[1339.9996337890625px] aspect-[1340/676]">
        {/* Background Image */}
        <Image
          src={icons.JoinUsHelthcare}
          alt="Healthcare banner background"
          fill
          priority
          sizes="(max-width: 768px) 100vw,
                    f(max-width: 1200px) 100vw,
                    1340px"
          className="object-cover object-center z-0"
        />
        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className=" text-[#C37A20] text-[18px] md:text-[28px] lg:text-[38px] leading-snug font-[erstoria] tracking-[1px]">
            Small Team with a <br />Big Impact! Join us to  Shape <br /> the Future of Pharma Selling and Tracking
          </h1>
        </div>

        {/* Button - Centered at bottom on all screen sizes */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <Link href="/career-details">
            <button className="bg-[#C37A20] text-white font-[500] py-3 px-5  text-[13px] sm:text-[14px] md:text-[16px] transition duration-200 cursor-pointer  hover:text-blue-600 hover:bg-[#453030] border-2 border-transparent rounded-[40px]">
              See open roles ➜
            </button>
          </Link>
        </div>
      </div>
      <div className="relative block md:hidden mx-auto max-w-[1339.9996337890625px] aspect-[1340/676]">
        {/* Background Image */}
        <Image
          src={icons.joinUsHelthcaremobile}
          alt="Healthcare banner background"
          fill
          priority
          sizes="(max-width: 768px) 100vw,
                    f(max-width: 1200px) 100vw,
                    1340px"
          className="object-cover object-center z-0"
        />
        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className=" text-[#C37A20] text-[16px] md:text-[24px] lg:text-[30px] mt-[10px] leading-snug font-[erstoria] tracking-[1px]">
            Small Team with a <br />Big Impact! Join us to  Shape <br /> the Future of Pharma Selling and Tracking
          </h1>
        </div>

        {/* Button - Centered at bottom on all screen sizes */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <Link href="/career-details">
            <button className="bg-[#C37A20] text-white font-[500] py-1.5 px-2 mt-[10px]  text-[13px] sm:text-[14px] md:text-[16px] transition duration-200 cursor-pointer  hover:text-blue-600 hover:bg-[#453030] border-2 border-transparent rounded-[40px]">
              See open roles ➜
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
