'use client';

import { icons } from '@/utility/image';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { variants } from './constants';
import styles from './contactform.module.css';

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    companySize: '',
    updates: false,
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = () => {
    console.log('Submitted data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <section className='contactSection bg-[#FFFFFF] relative'>
      <div className='max-w-[1404px] mx-auto px-8'>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-full gap-10 lg:gap-5">
          {/* Image Section */}
          <div className="w-full md:w-1/2 ">
            <Image
              src={icons.contactUsImage}
              alt="Contact Us"
              width={721}
              height={700}
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Form Section */}
          <div
            className="w-full md:w-1/2 flex justify-center items-center"

          >
            <div className="w-full max-w-[450.63px] md:max-w-[320.63px] lg:max-w-[450.63px]">
              {/* Step 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={variants.transition}
                >
                  <div className='flex flex-col gap-[30px] md:gap-[20px] lg:gap-[30px]'>
                    <div className='border-b border-[rgba(0,0,0,0.4)]'>
                      <label
                        className={`block font-semibold text-[13px] md:text-[14px] lg:text-[16px] mb-1 ${styles.label}`}
                      >
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Business email address"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full outline-0 border-0 mt-2 mb-[5px] ${styles.field}`}
                      />
                    </div>
                    <div className='border-b border-[rgba(0,0,0,0.4)]'>
                      <label
                        className={`block font-semibold text-[13px] md:text-[14px] lg:text-[16px] mb-1 ${styles.label}`}
                      >
                        Your company size <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full  mt-2 mb-[5px] outline-0 border-0 cursor-pointer"
                      >
                        <option value="">Select number of employees</option>
                        <option value="1-10">1 - 10</option>
                        <option value="11-50">11 - 50</option>
                        <option value="51-200">51 - 200</option>
                        <option value="201+">201+</option>
                      </select>
                    </div>
                    <button
                      onClick={handleNext}
                      className="w-full cursor-pointer bg-black text-white text-[13px] md:text-[14px] lg:text-[16px] p-3 rounded font-semibold hover:bg-gray-800 transition active:bg-gray-600"
                    >
                      Next
                    </button>

                    <label className="flex items-start gap-2  text-sm">
                      <input
                        type="checkbox"
                        name="updates"
                        checked={formData.updates}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <span className={`${styles.checkboxLabel} text-[13px] md:text-[14px] lg:text-[16px] leading-4 md:leading-5 lg:leading-[22px]`}>
                        Get updates about upcoming events, webinars, product
                        announcements, and helpful resources.
                      </span>
                    </label>

                    <div
                      className={`border-b border-[rgba(0,0,0,0.4)] text-right  ${styles.stepIndicator}`}
                    >
                      Step 1/4
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={variants.transition}
                >
                  <div>
                    <label
                      className={`block font-semibold text-[13px] md:text-[14px] lg:text-[16px] mb-1 ${styles.label}`}
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-6  ${styles.field}`}
                    />

                    <label
                      className={`block font-semibold text-[13px] md:text-[14px] lg:text-[16px] mb-1 ${styles.label}`}
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-6  ${styles.field}`}
                    />

                    <button
                      onClick={handleNext}
                      className="w-full cursor-pointer text-[13px] md:text-[14px] lg:text-[16px] bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition active:bg-gray-600"
                    >
                      Next
                    </button>

                    <div
                      className={`mt-8 border-t pt-2 text-right text-sm text-gray-500 font-semibold ${styles.stepIndicator}`}
                    >
                      Step 2/4
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={variants.transition}
                >
                  <div>
                    <label
                      className={`block font-semibold text-[13px] md:text-[14px] lg:text-[16px] mb-1 ${styles.label}`}
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-6  ${styles.field}`}
                    />

                    <label
                      className={`block font-semibold text-[13px] md:text-[14px] lg:text-[16px] mb-1 ${styles.label}`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-6  ${styles.field}`}
                    />

                    <button
                      onClick={handleNext}
                      className="w-full cursor-pointer text-[13px] md:text-[14px] lg:text-[16px] bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition active:bg-gray-600"
                    >
                      Next
                    </button>

                    <div
                      className={`mt-8 border-t pt-2 text-right text-sm text-gray-500 font-semibold ${styles.stepIndicator}`}
                    >
                      Step 3/4
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={variants.transition}
                >
                  <div className="flex flex-col items-center justify-center min-h-64 text-center px-4 gap-2">
                    <h1 className={styles.formMessage}>Thanks!</h1>
                    <p className={styles.formDescription}>
                      A member of the team will be in
                      <br />
                      touch with you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
