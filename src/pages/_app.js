import '@/styles/globals.css';
import '@/styles/fonts.css';
import Layout from '@/component/layout';
import { useEffect, useState } from 'react';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';
import Meta from '@/component/layout/meta';
import { usePathname } from 'next/navigation';
import Loader from '@/component/loader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script';
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      // nProgress.start();
      setLoading(true);
    };

    const handleStop = () => {
      // nProgress.done();
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleStop);
    Router.events.on('routeChangeError', handleStop);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleStop);
      Router.events.off('routeChangeError', handleStop);
    };
  }, []);
  const pathname = usePathname();
  const routeName = pathname.replace(/[/\-]/g, ' ').charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <>
      {/* ✅ Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PWSZS05NVH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PWSZS05NVH');
  `}
      </Script>

      <Meta
        title={`${routeName}${routeName.length < 1 ? "" : " | "}  Ai Sante`}
        description="Welcome to the home page of Ai Sante."
        keywords="pharma, aisante, nextjs"
      />
      {loading && <Loader />}
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
