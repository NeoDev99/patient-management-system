import Image from "next/image";
import React from "react";
import Link from "next/Link";

import appointmentImg from "@/public/assets/appointment_img.png";

const BannerSection = () => {
    return (
        <section className="pb-20 md:px-20">
            <div className="flex container bg-sky-400 rounded-lg">
                <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                        <p>Book Appointment</p>
                        <p className="mt-4">With 100+ Trusted Doctors</p>
                    </div>
                    <Link href="/login">
                        <button className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">
                            Create Account
                        </button>
                    </Link>
                </div>

                <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                    <Image
                        src={appointmentImg}
                        alt="Appointment Image"
                        width={0}
                        height={0}
                        className="w-full absolute bottom-0 right-0 max-w-md"
                    />
                </div>
            </div>
        </section>
    )
}

export default BannerSection;