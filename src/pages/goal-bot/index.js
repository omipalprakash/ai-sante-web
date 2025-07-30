import InfoCard from '@/component/infoCard';
import styles from './goalBot.module.css';
import SubtleImageTab from '@/component/subtleImagetab';
import VideoOverview from '@/component/videoOverview';
import { icons } from '@/utility/image';
import CustomerStroresSection from '@/component/global/customerStores';
import { CUSTOMER_STORES_SECTION_DATA_GOAL_BOT } from '@/component/global/customerStores/constant';
import FeedbackGrid from '@/component/feedbackGrid';
import { content, features, HeaderText, secondaryContent, video } from '@/lib/goal_bot_constant';

export default function GoalBot() {
  return (
    <>
      <InfoCard
        HeaderText={HeaderText}
        content1={content}
        content2={secondaryContent}
      />
      <SubtleImageTab features={features} />
      <VideoOverview
        title={'A Sneak Peek inside how Goal Bot equips your to Achieve your Sales Target'}
        video1={video}
      />
      <FeedbackGrid />
      <CustomerStroresSection data={CUSTOMER_STORES_SECTION_DATA_GOAL_BOT} />
    </>
  );
}
