import { ProductApplications } from '@/lib/pricing_constant';
import Link from 'next/link';

const ProductsApplications = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
            <div className="mx-auto max-w-[1440px] gap-[10px]">
                <h2
                    className="font-[400] text-[#203250] text-start mb-10"
                >
                    Get Pricing for All Products Applications
                </h2>
                <div className=" flex gap-[20px] overflow-auto justify-between flex-col md:flex-row">
                    {ProductApplications.map((step, index) => (
                        <div
                            key={index}
                            className=" border border-[#0000001A] p-6 rounded-2xl shadow-sm text-start flex flex-col items-start h-full gap-[10px] w-full  md:w-[33%]"
                        >
                            <div className="mb-4 text-black">{step.icon}</div>
                            <h3
                                className="font-[600] text-[#000000]  mb-2"
                            >
                                {step.title}
                            </h3>
                            <p
                                className=" text-[#6B6A6B] font-[400] "
                            >
                                {/* {step.description} */}
                            </p>
                            <Link href="#"
                                className="inline-block bg-[#203250] text-white font-[450] text px-3 py-2 rounded-[10px] cursor-pointer!important"
                            >
                                {step.button}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsApplications;