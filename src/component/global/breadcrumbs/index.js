'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { icons } from '@/utility/image';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Skip rendering until mounted (client-only)
  if (!isClient) return null;

  // ✅ Hide breadcrumbs for specific paths
  if (pathname === '/' || pathname === '/contact') {
    return null;
  }

  const pathSegments = pathname.split('/').filter((seg) => seg);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = decodeURIComponent(segment)
      .replace(/-/g, ' ') // replace hyphens with spaces
      .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize first letter
    return { href, label };
  });


  const isBlogPage = pathname.startsWith('/blogs');

  return (
    <div className='max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8'>
      <nav className={`flex items-center gap-2.5 ${isBlogPage ? '' : 'mt-4 md:mt-5 lg:mt-10'}`}>
        <Link href="/" className="inline-flex items-center space-x-1 hover:text-black">
          <Image src={icons.homeicon} alt="home_Icon" width={20} height={20} />
          <span className="hidden sm:inline self-end">Home</span>
        </Link>

        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <span>
              <Image
                src={icons.breadcrumbrightarrow}
                alt="breadcrumbrightarrow"
                width={20} height={20}
              />
            </span>
            <Link
              href={crumb.href}
              className="hover:text-black capitalize"
              style={{
                fontWeight: pathname === crumb?.href ? 'bold' : 'normal',
              }}
            >
              {crumb.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
