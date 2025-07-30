import InfoCard from '@/component/infoCard';
import VideoOverview from '@/component/videoOverview';
import SubtleImageTab from '@/component/subtleImagetab';
import { icons } from '@/utility/image';
import { CUSTOMER_STORES_SECTION_DATA_PRESCRIPTION_BOT } from '@/component/global/customerStores/constant';
import CustomerStroresSection from '@/component/global/customerStores';
import FeedbackGrid from '@/component/feedbackGrid';
import { content, features, HeaderText, secondaryContent, video } from '@/lib/prescription_bot_constant';

export default function PrescriptionBot() {
  return (
    <>
      <InfoCard
        HeaderText={HeaderText}
        content1={content}
        content2={secondaryContent}
      />
      <SubtleImageTab features={features} />
      <VideoOverview
        title={'See how Prescription Bot makes every Doctor Meeting Effective and more PROFITABLE'}
        video1={video}
      />
      <FeedbackGrid />
      <CustomerStroresSection data={CUSTOMER_STORES_SECTION_DATA_PRESCRIPTION_BOT} />
    </>
  );
}
