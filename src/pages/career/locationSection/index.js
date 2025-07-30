import { icons } from '@/utility/image';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LocationSection() {
  return (
    <div className="bg-[#ffffff] pb-20">
      <div className="max-w-[1440px] mx-auto px-4 py-8 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
        {/* Left Section: Images */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the element is in view
        >
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src={icons.aboutUsImg1}
              alt="Library Wall"
              width={600}
              height={600}
              className="rounded-xl object-cover w-full h-auto"
            />
          </motion.div>

          {/* Overlapping Small Image */}
          <motion.div
            className="absolute p-3 sm:p-4 md:p-5 bg-[#ffffff]"
            style={{
              borderRadius: '40px 0',
              bottom: '-15px',
              right: '-20px',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-[120px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px]">
              <Image
                src={icons.aboutUsImg2}
                alt="Office Overlap"
                width={350}
                height={350}
                className="object-cover w-full h-auto"
                style={{ borderRadius: '18px' }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section: Address */}
        <motion.div
          className="w-full lg:w-1/2 space-y-4 flex flex-col items-center lg:items-start px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="font-[Erstoria] font-normal text-[24px] sm:text-[32px] md:text-[38px] text-[#C37A20] text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Where we're located
          </motion.p>
          <motion.div
            className="text-[#081D34] text-[14px] sm:text-[16px] leading-relaxed font-[Salmond] font-bold text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg mb-1">Ahmedabad</p>
            <p className="text-[15px] sm:text-[16px] font-[400] text-[#081D34]">
              Sankalp Square 3B, 1101 to 1106, Sindhu Bhavan Rd,<br />
              beside Taj Skyline, PRL Colony, Thaltej, Ahmedabad,<br />
              Gujarat 380058
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
