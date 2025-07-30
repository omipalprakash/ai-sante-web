import useAos from '@/hooks/useAos';
import React, { useEffect, useState } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Breadcrumbs from '../global/breadcrumbs';
import ClickSpark from '../clickEffect';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  useAos();
  const pathname = usePathname();
  const [showBreadcrumb, setShowBreadcrumb] = useState(true)
  // if (pathname === '/blogs') {
  //   // ✅ Hide breadcrumbs on Home page
  //   setShowBreadcrumb(false)
  //   return null;
  // }

  useEffect(() => {
    if (pathname === '/blogs') {
      setShowBreadcrumb(false)
    }
  }, [pathname])
  return (
    <div className="relative w-full min-h-screen">
      <ClickSpark
        sparkColor="rgb(211, 105, 171)"

        sparkSize={10}
        sparkRadius={25}
        sparkCount={10}
        duration={500}
        easing="ease-out"
        extraScale={1.1}
      >

        {/* h-14 md:h-[89px] xl:h-[88px] */}
        <header className='py-4 md:py-6 bg-[#F5F5F5] xl:py-5 relative z-[1000]'>
          <Navbar />
        </header>

        <main className='w-full'>
          {
            showBreadcrumb && (
              <Breadcrumbs />
            )
          }
          {children}</main>
        <footer>
          <Footer />
        </footer>


      </ClickSpark>
    </div>
  );
};

export default Layout;
