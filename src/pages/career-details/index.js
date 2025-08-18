import Breadcrumbs from '@/component/global/breadcrumbs';
import JobOpeningCard from '@/pages/career-details/subComponents/job-hiring-card';
import JobApplicationForm from './subComponents/jobApplicationForm';
import CareerdetailsImage from './subComponents/careerdetailsImage';

export default function Careerdetails() {
  return (
   <section className='details'>
    <Breadcrumbs/>
      <CareerdetailsImage />
      <JobOpeningCard />
      <JobApplicationForm />
    </section>
  );
}
