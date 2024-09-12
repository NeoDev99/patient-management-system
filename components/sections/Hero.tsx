import Image from "next/image";
import Link from "next/link";

import ArrowIcon from "@/public/assets/arrow_icon.svg";
import HeroImage from "@/public/assets/header_img.png";
import GroupProfiles from "@/public/assets/group_profiles.png";

const HeroSection = () => {
    return (
        <section className="px-2 md:px-20 py-10">
            <div className="container flex flex-col md:flex-row items-center gap-6 bg-sky-400 rounded-lg overflow-hidden shadow-lg w-full">
                
                {/* Left Text Section */}
                <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10">
                    <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
                        Book Appointment <br /> With Trusted Doctors
                    </p>

                    <div className="flex items-center gap-3 text-white text-sm font-light">
                        <Image
                            src={GroupProfiles}
                            alt="Group Profiles"
                            width={80}
                            height={0}
                            className="rounded-full"
                        />
                        <p className="text-sm text-white">
                            Simply browse through our extensive list of trusted doctors, <br />
                            schedule your appointment hassle-free.
                        </p>
                    </div>

                    <Link
                        href="/doctors"
                        className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
                    >
                        Book appointment
                        <ArrowIcon className="size-4" />
                    </Link>
                </div>

                {/* Right Image Section */}
                <div className="md:w-1/2">
                    <Image
                        src={HeroImage}
                        alt="Hero Image"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
