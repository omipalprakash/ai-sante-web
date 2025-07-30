'use client';

import { icons } from '@/utility/image';
import Image from 'next/image';
import React from 'react';

const roles = [
  { title: 'Graphics Designer', location: 'Ahmedabad' },
  { title: 'Digital Marketing Executive', location: 'Ahmedabad' },
  { title: 'Business Development Manager', location: 'Ahmedabad' },
  { title: 'Motion Graphics Designer', location: 'Ahmedabad' },
  { title: 'Python Developer', location: 'Ahmedabad' },
  { title: 'React Developer', location: 'Ahmedabad' },
];

export default function OpenRoles() {
  return (
    <section className="bg-white py-[40px] md:py-[60px] lg:py-[90px]">
      <div className="flex flex-col lg:flex-row justify-between items-start  max-w-[1404px] mx-auto px-8">
        {/* Left Section */}
        <div className="mb-10 lg:mb-0 max-w-lg">
          <h2 className="font-[Erstoria] text-[#C37A20] mb-[18px] md:mb-[40px] lg:mb-[25px]  lg:text-left">
            Open Roles
          </h2>
          <p className="text-[13px] md:text-[18px] lg:text-[24px]  font-semibold text-[#000000] mb-2.5">
            Got other Ideas?
          </p>
          <p className="font-normal  mb-1">
            Send us your portfolio and CV to
          </p>
          <a
            href="https://www.aisante.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#000000] transition-colors duration-200"
          >
            aisante.com
          </a>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          {roles.map((role, index) => (
            <div
              key={index}
              className="role-item flex flex-col group cursor-pointer transition-transform"
            >
              <div className="flex items-center gap-2 text-gray-800 font-medium transition">
                {role.title}
                <Image
                  src={icons.shareImgBlack}
                  alt="Black_share_image"
                  width={17} height={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
              <span className="text-sm text-gray-500 mt-1">
                {role.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
