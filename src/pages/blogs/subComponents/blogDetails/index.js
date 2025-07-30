import Breadcrumbs from '@/component/global/breadcrumbs';
import Aos from 'aos';
import Image from 'next/image';
import { useEffect } from 'react';
import { icons } from '@/utility/image';

export default function BlogDetail({
  title = '',
  name = '',
  date = '',
  image = '',
  tagArray = [],
  blogArray = [],
}) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="bg-[#F5F5F5] w-full pt-[16px] pb-[50px] md:pt-[20px] md:pb-[30px]  lg:pt-[40px] lg:pb-[50px] rounded-b-[8px] rounded-bl-[8px] overflow-hidden">
      <Breadcrumbs />
      <div className="max-w-[1404px] mx-auto px-8">
        {/* Main Title */}
        <h1
          className="page-title font-['Erstoria',_sans-serif] text-[#25355b] uppercase mt-[30px] mb-[10px] md:mt-[20px] md:mb-[14px] lg:mt-[35px] lg:mb-[20px]"
          data-aos={'zoom-out'}
        >
          {title}
        </h1>

        {/* Author + Date */}
        <p className="text-black mb-[10px] md:mb-[21px] lg:mb-[30px]">
          {name} <span className="mx-2">•</span> {date}
        </p>

        {/* Image Block */}
        <div
          className="w-full h-full  relative rounded-xl overflow-hidden"
          data-aos={'zoom-in'}
        >
          <Image
            src={icons.blogBanner} // Replace with actual image path
            alt="Award Background"
            width={1340}
            height={816}
            className="object-cover blg-img"
            priority
          />
        </div>

        {/* Tag Buttons */}
        {tagArray.length !== 0 && (
          <div className="flex gap-[11px]  lg:gap-4 flex-wrap my-[21px] lg:my-[30px]">
            {tagArray.map((tag, index) => (
              <span
                key={index}
                className="outlineButton bg-[#d9e3f0] border-[0.5px] border-[#2A5286]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Repeating Description Blocks */}
        {blogArray?.map((blog, index) => {
          const isLast = index === blogArray.length - 1;

          const marginBottomClass = isLast
            ? ''
            : 'mb-[20px] md:mb-[21px] lg:mb-[30px]';
          return (
            <div
              key={index}
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              className={marginBottomClass}
            >
              <h2 className="inner-page-title text-[#2A5286] uppercase mb-[10px] md:mb-[7px] lg:mb-[10px]">
                {blog.title}
              </h2>
              <p className="leading-[1.5] md:leading-[1.4] lg:leading-[1.5]">
                {blog.description}
              </p>
            </div>

          )
        })}
      </div>
    </section>
  );
}
