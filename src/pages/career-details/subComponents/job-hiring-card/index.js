'use client';

import React from 'react';
// import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { icons } from '@/utility/image';
import jobData from '@/lib/career_details_jobHiring';

const JobOpeningCard = () => {
  return (
    <div className=" p-6 bg-white shadow-md  space-y-6 text-gray-800">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1
            className="text-3xl font-normal text-[#89A884] text-[40px] "
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
            <Image src={icons.FullTimeWorkLogo} alt="Full Time Work Icon" />
            {jobData.type}
          </div>
          <div
            className="flex items-center gap-2"
            style={{ fontFamily: 'Salmond' }}
          >
            <Image src={icons.ExperienceLogo} alt="Experience Icon" />
            Experience: {jobData.experience}
          </div>
        </div>

        <p
          className="font-normal text-[18px] mb-4"
          style={{ fontFamily: 'Salmond' }}
        >
          {jobData.intro}
        </p>

        <div>
          <h2
            className="text-xl font-[700] mt-2 mb-2"
            style={{ fontFamily: 'Salmond' }}
          >
            Key Responsibilities:
          </h2>
          <ul
            className="list-disc list-inside space-y-1 mt-2 mb-4 font-normal text-[18px]"
            style={{ fontFamily: 'Salmond' }}
          >
            {jobData.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className="text-xl font-[700] mt-2 mb-2"
            style={{ fontFamily: 'Salmond' }}
          >
            Qualifications:
          </h2>
          <ul
            className="list-disc list-inside space-y-1 mt-2 mb-4 font-normal text-[18px]"
            style={{ fontFamily: 'Salmond' }}
          >
            {jobData.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <p
          className="font-[700] mt-6 text-[24px] leading-[32px]"
          style={{ fontFamily: 'Salmond' }}
        >
          Join us at{' '}
          <span className="font-[700] text-[24px] leading-[32px] text-[#89A884] underline">
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
