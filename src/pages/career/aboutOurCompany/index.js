import styles from './aboutourcompany.module.css';

export default function AboutOurCompany() {
  return (
    <section className=" bg-white mt-[39px] md:mt-[73px] lg:mt-[117px]">
      <div className="max-w-[1170px] mx-auto p-8">
        <h2 className="about-carrer font-[Erstoria]  text-[#C37A20] text-center text-[20px] md:text-[38px] lg:text-[52px] mb-[20px] md:mb-[24px] lg:mb-8 uppercase">
          A Little More to Know About Us Before you Apply
        </h2>
        <div className="flex flex-col gap-[27px]  text-justify">
          <p className='leading-[1.6] lg:leading-[1.5]'>
            At AI Sante, we've developed RxIntel AI to transform pharmaceutical operations. This powerful tool provides real-time, intelligent insights and uses AI to optimize performance. RxIntel AI helps Medical Representatives (MRs) boost sales and reach their full potential by giving them tailored, science-backed product knowledge. This allows them to connect more effectively with doctors and increase prescription growth.
          </p>
          <p className='leading-[1.6] lg:leading-[1.5]'>
            RxIntel AI also features dynamic chatbots that automate key tasks like MR recruiting, sales, marketing, revenue tracking, and performance management, making operations smoother and more efficient. With our AI-enhanced strategies, RxIntel AI boosts productivity, making every decision smarter, faster, and data-driven.
          </p>

        </div>
        <div className='mt-[27px]'>
          <p className='text-[20px] font-bold leading-[1.5] mb-[20px]'>"We believe in pushing boundaries in everything we do. If you're looking to innovate and make a significant impact on the future of pharma, you've found your home."</p>
          <h3 className="font-['Erstoria',_sans-serif  font-bold text-[#000000] mb-[20px]">Vidisha Joshi</h3>
          <h4>Founder, AI Sante</h4>
        </div>
      </div>
    </section>
  );
}
