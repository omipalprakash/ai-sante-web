"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./LeadersSlider.module.css";
import { icons } from "@/utility/image";
const testimonials = [
    {
        id: 1,
        name: "Bharat Solanki",
        position: "Director",
        company: "BiosLab",
        logo: "/images/bioslab-logo.png",
        image: "/images/bharat.png",
        message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 2,
        name: "Sarah Chen",
        position: "CEO",
        company: "TechFlow",
        logo: "/images/techflow-logo.png",
        image: "/images/sarah.png",
        message:
            "Working with this team has been transformative for our business. Their innovative approach and dedication to excellence is unmatched.",
    },
];

export default function LeadersSlider() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.leaders}>
            <div className={styles.leaders__mobileOnly}>
                <p className="section-topTitle mb-4">Testimonial</p>

                <div className={styles.leaders__titleRow}>
                    <h2 className="font-['Erstoria',_sans-serif] text-[#453030]">Trusted By Leaders From<br /> various Industries</h2>
                    <div className={styles.leaders__arrows}>

                        <button className={styles.leaders__arrow} onClick={() => sliderRef.current.slickPrev()}>
                            <Image src={icons.PrevArrow} width={10.9} height={9.57} alt="Prev Arrow" />
                        </button>
                        <button className={styles.leaders__arrow} onClick={() => sliderRef.current.slickPrev()}>
                            <Image src={icons.NextArrow} width={10.9} height={9.57} alt="Next Arrow" />
                        </button>
                    </div>
                </div>

                <div className={styles.leaders__sliderWrapper}>
                    <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((item) => (
                            <div key={item.id} className={styles.leaders__card}>
                                <div className={styles.leaders__content}>
                                    <Image
                                        src={icons.ghibliFour || "/placeholder.svg"}
                                        alt={icons.name}
                                        width={64}
                                        height={78}
                                        className={styles.leaders__avatar}
                                        style={{ width: "64px", height: "78px" }}
                                    />
                                    <div className="flex flex-col gap-[16px] ">
                                        <Image
                                            src={icons.BiosLab || "/placeholder.svg"}
                                            alt={`${item.company} Logo`}
                                            width={69}
                                            height={20}
                                            className={styles.leaders__logo}
                                        />
                                        <p className={styles.leaders__designation}>
                                            {item.name} – <span className=" opacity-85">{item.position}</span>
                                        </p>
                                        <p className="leading-[1.3]">{item.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    );
}
