import React from 'react';
import ChannelPartnerSection from './subComponents/channelPartnerSection';
import ProgramOverview from './subComponents/programOverview';
import AudienceSelector from './subComponents/audienceSelector';
import HowItWorksSection from './subComponents/affiliateHowItWorks.js/index.js';
import JoinFormSection from './subComponents/join-form-section';
import { PROGRAMOVERVIEW_DATA } from '@/lib/channel-partner';

const index = () => {
  return (
    <div>
      <ChannelPartnerSection />
      <ProgramOverview data={PROGRAMOVERVIEW_DATA} />
      <AudienceSelector />
      <HowItWorksSection />
      <JoinFormSection />
    </div>
  );
};

export default index;
