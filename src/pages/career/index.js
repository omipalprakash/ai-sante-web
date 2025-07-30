import CustomerStroresSection from '@/component/global/customerStores';
import AboutOurCompany from './aboutOurCompany';
import styles from './career.module.css';
import { CUSTOMER_STORES_SECTION_DATA } from '@/component/global/customerStores/constant';
import TeamUp from './teamUp';
import OpenRoles from './OpenRoles';
import LocationSection from './locationSection';
import JoinUsHelthcare from './JoinUsHelthcare';

export default function Career() {
  return (
    <div className={styles.container}>
      <JoinUsHelthcare />
      <AboutOurCompany />
      <CustomerStroresSection data={CUSTOMER_STORES_SECTION_DATA} />
      <TeamUp />
      <OpenRoles />
      <LocationSection/>
    </div>
  );
}
