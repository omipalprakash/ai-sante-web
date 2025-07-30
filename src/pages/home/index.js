// import React from 'react';

import HomeSection from '@/component/homeSection';
import Logo_Scroller from '@/component/logo_scroller';
import Tablist from '@/component/tablist';
import Roi from '@/component/roi';
import Leaders from '@/component/leaders';
import Aboutus from '@/component/aboutus';
import WordsFromCEO from '../wordFromCeoSection';
// import { AwardSection } from '@/component/awardSection';
import Stories from '@/component/stories';
import ContactForm from '@/component/contactForm';
import BackgroundBoxAnimation from '@/component/global/backgroundBoxAnimation/backgroundBoxAnimation';




const HomePage = () => {
  return (
    <>
      <HomeSection />
      <Logo_Scroller />
      <Tablist />
      <Roi />
      <Leaders />
      <Aboutus />
      <WordsFromCEO />
      {/* <AwardSection /> */}
      <BackgroundBoxAnimation>
        <Stories />
      </BackgroundBoxAnimation>
      <ContactForm />
    </>
  );
};

export default HomePage;
