const { useState } = require('react');
const { motion, AnimatePresence } = require('framer-motion');
const { default: Input } = require('@/component/input');
const { default: ResumeUpload } = require('@/component/resumeUpload');
const { default: Dropdown } = require('@/component/dropdown');

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB]">
      <div className="w-full max-w-[1440px] px-4 md:px-8">
        <h2 className="text-[32px] md:text-[42px] font-[Erstoria] font-[400] text-center text-[#89A884] mb-4">
          Apply for this job
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#6F6C90] font-[DM Sans] font-[400] mb-6 text-center">
          Please fill the form below to receive a quote for your project.
        </p>
        <div
          className="p-6 md:p-8 bg-[#FFFFFF] rounded-[34px] max-w-[1216px] mx-auto"
          style={{
            boxShadow: '0px 5px 16px 0px #080F340F',
            border: '1px solid #EFF0F6',
          }}
        >
         {step !== 5 && ( <> <div className="flex items-center mb-8 space-x-4 md:space-x-8 justify-center">
            {[1, 2, 3, 4].map((num, index) => (
              <div
                key={num}
                className="flex items-center space-x-2 md:space-x-4"
              >
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border ${
                    step >= num
                      ? 'border-[#89A884] bg-[#89A884] text-white'
                      : 'border-gray-300 bg-white text-gray-700'
                  } font-semibold text-sm md:text-lg shadow-md`}
                >
                  {num}
                </div>
                {index < 3 && (
                  <div
                    className={`w-16 h-2 rounded-2xl md:w-24 ${
                      step > num ? 'bg-[#89A884]' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="border border-gray-200 max-w-2xl mx-auto my-10"></div>
          </>
          )}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl m-auto">
                  <div>
                    <Input
                      type="text"
                      label="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      label="Email"
                      value={formData.email}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                <div className="flex justify-center">
               <ResumeUpload/>
               </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl m-auto">
                  <div>
                    <Input
                      type="text"
                      label="Total Year Of Experience"
                      value={formData.firstName}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="LinkedIn Profile"
                      value={formData.lastName}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Current Salary"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Expected Salary"
                      value={formData.email}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                </div>
              </motion.div>
            )}
              {step === 4 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl m-auto">
                  <div>
                    <Input
                      type="text"
                      label="Reason To Leave the Job"
                      value={formData.firstName}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <Dropdown
                      label="Current Location"
                      // value={selectedValue}
                      // handleChange={handleDropdownChange}
                      options={['India', 'USA', 'Canada', 'Germany']}
                      isRequired={true}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Current or most recent company?"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="How did you hear about this job?"
                      value={formData.email}
                      onChange={handleChange}
                      isRequired
                    />
                  </div>
                </div>
              </motion.div>
            )}
              {step === 5 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className='max-w-[1216px] m-auto text-center h-96 flex flex-col items-center justify-center'>
                  <p className='font-[Erstoria] font-[400] text-[63.12px] text-[#89A884]'>THANK YOU !</p>
                  <p className='font-[Salmond] font-[500] text-[#494B49] text-[33.12px]'>Someone from our team will reach out to you soon!</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {step !== 5 && (
          <button
            onClick={nextStep}
            className=" bg-[#89A884] hover:bg-[#a6bda2] text-white font-medium p-3 rounded-md shadow-sm text-sm flex mx-auto my-14 cursor-pointer"
          >
           {step !== 4 ?  "Next Step" : "Complete"} 
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

module.exports = StepperForm;
