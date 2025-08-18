'use client';

import React from 'react';
// import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { icons } from '@/utility/image';
import jobData from '@/lib/career_details_jobHiring';

const JobOpeningCard = () => {
  return (
    <div className="py-8 md:py-[50px]">
      <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1
            className="text-3xl font-normal text-[#89A884] text-[24px] md:text-[38px] lg:text-[52px]"
            style={{ fontFamily: 'Erstoria' }}
          >
            {jobData.title}
          </h1>
          <button
            className="mt-4 md:mt-0 px-4 py-2 bg-[#89A884] text-white font-normal rounded px-6 py-2"
            style={{ fontFamily: 'Erstoria' }}
          >
            Apply
          </button>
        </div>

        <div className="flex flex-wrap gap-4 text-normal  mt-2 mb-4">
          <div
            className="flex items-center gap-2"
            style={{ fontFamily: 'Salmond' }}
          >
            <Image
              src={icons.location}
              alt="Location Icon"
              width={15}
              height={15}
            />
            {jobData.location}
          </div>
          <div
            className="flex items-center gap-2"
            style={{ fontFamily: 'Salmond' }}
          >
            <Image
              src={icons.userLogo}
              alt="User Icon"
              width={15}
              height={15}
            />
            Position Available: {jobData.positions}
          </div>
          <div
            className="flex items-center gap-2"
            style={{ fontFamily: 'Salmond' }}
          >
            <Image src={icons.FullTimeWorkLogo} alt="Full Time Work Icon" width={50} height={50} />
            {jobData.type}
          </div>
          <div
            className="flex items-center gap-2"
            style={{ fontFamily: 'Salmond' }}
          >
            <Image src={icons.ExperienceLogo} alt="Experience Icon" width={50} height={50} />
            Experience: {jobData.experience}
          </div>
        </div>

        <p
          className="font-normal text-[18px] mb-4"
          style={{ fontFamily: 'Salmond' }}
        >
          {jobData.intro}
        </p>

        <div className='mb-4'>
          <h2
            className="text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3 sm:mb-4"
            style={{ fontFamily: 'Salmond' }}
          >
            Key Responsibilities:
          </h2>
          <ul
            className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700"
            style={{ fontFamily: 'Salmond' }}
          >
            {jobData.responsibilities.map((item, index) => (
              <li key={index} className='flex items-start gap-2'><span class="w-2 h-2 bg-[#89A884] rounded-full mt-2 flex-shrink-0"></span>{item}</li>
            ))}
          </ul>
        </div>

        <div className='mb-4'>
          <h2
            className="text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] font-bold text-gray-900 mb-3 sm:mb-4"
            style={{ fontFamily: 'Salmond' }}
          >
            Qualifications:
          </h2>
          <ul
            className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700"
            style={{ fontFamily: 'Salmond' }}
          >
            {jobData.qualifications.map((item, index) => (
              <li key={index} className='flex items-start gap-2'><span class="w-2 h-2 bg-[#89A884] rounded-full mt-2 flex-shrink-0"></span>{item}</li>
            ))}
          </ul>
        </div>

        <p
          className="font-[700] mt-6 text-[16px] md:text-[18px] lg:text-[24px] leading-[32px]"
          style={{ fontFamily: 'Salmond' }}
        >
          Join us at{' '}
          <span className="font-[700] text-[16px] md:text-[18px] lg:text-[24px] leading-[32px] text-[#89A884] underline">
            {jobData.company}
          </span>
          , where creativity meets innovation, and your designs can make a
          lasting impact!
        </p>
      </div>
    </div>
  );
};

export default JobOpeningCard;
