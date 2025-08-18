import Image from 'next/image';

import { icons } from '@/utility/image';

const CareerdetailsImage = () => {
  return (
      <div className='max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8 pt-[30px]'>
      <div className='relative w-full aspect-[1340/648.58]'>
      <Image
        src={icons.careerdetailsimage}
        alt="CareerdetailsImage"
        fill

      />
      </div>
      </div>
  
  );
};
export default CareerdetailsImage;
