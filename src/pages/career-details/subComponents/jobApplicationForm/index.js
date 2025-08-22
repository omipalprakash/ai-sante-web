const { useState } = require("react");
const { motion, AnimatePresence } = require("framer-motion");
const { default: Input } = require("@/component/input");
const { default: ResumeUpload } = require("@/component/resumeUpload");
const { default: Dropdown } = require("@/component/dropdown");

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    experience: "",
    linkedin: "",
    currentSalary: "",
    expectedSalary: "",
    reasonToLeave: "",
    company: "",
    referral: "",
    location: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Stepwise validation
  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
    }
    if (step === 3) {
      if (!formData.experience.trim()) newErrors.experience = "Experience is required";
      if (!formData.linkedin.trim()) newErrors.linkedin = "LinkedIn Profile is required";
      if (!formData.currentSalary.trim()) newErrors.currentSalary = "Current Salary is required";
      if (!formData.expectedSalary.trim()) newErrors.expectedSalary = "Expected Salary is required";
    }
    if (step === 4) {
      if (!formData.reasonToLeave.trim()) newErrors.reasonToLeave = "Reason is required";
      if (!formData.location.trim()) newErrors.location = "Location is required";
      if (!formData.company.trim()) newErrors.company = "Company is required";
      if (!formData.referral.trim()) newErrors.referral = "Referral is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ if no error then valid
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };
  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB] pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16 lg:pt-24 lg:pb-40">
      <div className="w-full max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-[#89A884] mb-4">Apply for this job</h2>
        <p className="text-sm sm:text-base md:text-lg text-[#6F6C90] font-[DM Sans] font-[400] mb-6 text-center leading-relaxed">
          Please fill the form below to receive a quote for your project.
        </p>
        <div
          className="p-2 sm:p-6 md:p-8 bg-[#FFFFFF] rounded-2xl sm:rounded-3xl lg:rounded-[34px] max-w-[1216px] mx-auto"
          style={{
            boxShadow: "0px 5px 16px 0px #080F340F",
            border: "1px solid #EFF0F6",
          }}
        >
          {step !== 5 && (
            <>
              {/* Stepper */}
              <div className="flex flex-wrap items-center mb-6 sm:mb-8 gap-1 sm:gap-4 justify-center">
                {[1, 2, 3, 4].map((num, index) => (
                  <div key={num} className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border ${step >= num
                          ? "border-[#89A884] bg-[#89A884] text-white"
                          : "border-gray-300 bg-white text-gray-700"
                        } font-semibold text-xs sm:text-sm md:text-base shadow-md`}
                    >
                      {num}
                    </div>
                    {index < 3 && (
                      <div
                        className={`h-1 rounded-2xl w-10 sm:w-16 md:w-24 ${step > num ? "bg-[#89A884]" : "bg-gray-300"
                          }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="border border-gray-200 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto my-6 sm:my-10"></div>
            </>
          )}

          <AnimatePresence mode="wait">
            {/* Step 1 */}
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
                  <Input
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    isRequired
                    error={errors.firstName}
                  />
                  <Input
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    isRequired
                    error={errors.lastName}
                  />
                  <Input
                    type="text"
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    isRequired
                    error={errors.phoneNumber}
                  />
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isRequired
                    error={errors.email}
                  />
                </div>
              </motion.div>
            )}

            {/* ... Step 2, Step 3, Step 4 remain same but pass `name` + `error={errors.xxx}` ... */}
          </AnimatePresence>

          {/* Next Button */}
          {step !== 5 && (
            <button
              onClick={nextStep}
              className="bg-[#89A884] hover:bg-[#a6bda2] text-white font-medium py-2.5 px-6 rounded-md shadow-sm text-sm sm:text-base flex mx-auto my-10 sm:my-14 cursor-pointer transition-all"
            >
              {step !== 4 ? "Next Step" : "Complete"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

module.exports = StepperForm;
