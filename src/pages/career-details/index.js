import Breadcrumbs from '@/component/global/breadcrumbs';
import JobOpeningCard from '@/pages/career-details/subComponents/job-hiring-card';
import ApplicationForm from "../../component/application-form";
// import JobApplicationForm from './subComponents/jobApplicationForm';
// import CareerdetailsImage from './subComponents/careerdetailsImage';

export default function Careerdetails() {
  return (
    <section className='details'>
      <Breadcrumbs />
      {/* <CareerdetailsImage /> */}
      <JobOpeningCard />
      <ApplicationForm />
    </section>
  );
}
