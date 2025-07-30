import styles from './career-details.module.css';
import JobOpeningCard from '@/pages/career-details/subComponents/job-hiring-card';
import JobApplicationForm from './subComponents/jobApplicationForm';
import CareerdetailsImage from './subComponents/careerdetailsImage';

export default function Careerdetails() {
  return (
    <div className={styles.container}>
      <CareerdetailsImage />
      <JobOpeningCard />
      <JobApplicationForm />
    </div>
  );
}
