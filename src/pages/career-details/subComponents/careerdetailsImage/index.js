import Image from 'next/image';
import styles from './careerdetailsimage.module.css';
import { icons } from '@/utility/image';

const CareerdetailsImage = () => {
  return (
    <div className={styles.container}>
      <Image
        src={icons.careerdetailsimage}
        className={styles.careerdetailsimage}
        alt="CareerdetailsImage"
      />
    </div>
  );
};
export default CareerdetailsImage;
