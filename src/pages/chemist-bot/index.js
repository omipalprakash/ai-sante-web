import InfoCard from '@/component/infoCard';
import styles from './chemist-bot.module.css';
import SubtleImageTab from '@/component/subtleImagetab';
import VideoOverview from '@/component/videoOverview';
import { icons } from '@/utility/image';
import { CUSTOMER_STORES_SECTION_DATA_Chemist_Bot } from '@/component/global/customerStores/constant';
import CustomerStroresSection from '@/component/global/customerStores';
import FeedbackGrid from '@/component/feedbackGrid';
import {
  content,
  features,
  HeaderText,
  secondaryContent,
  video,
} from '@/lib/chemist_bot';

export default function ChemistBot() {
  return (
    <>
      <InfoCard
        HeaderText={HeaderText}
        content1={content}
        content2={secondaryContent}
      />
      <SubtleImageTab features={features} />
      <VideoOverview
        title={`See how Chemist Bot Transforms tour Secondary Sales Tracking without Manual Uploads and Delays`}
        video1={video}
      />
      <FeedbackGrid />
      <CustomerStroresSection data={CUSTOMER_STORES_SECTION_DATA_Chemist_Bot} />
    </>
  );
}
