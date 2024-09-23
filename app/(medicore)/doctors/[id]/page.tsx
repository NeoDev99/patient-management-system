"use client";

import { useEffect, useState } from "react";
import { Doctor } from "@/types/types";
import { assets, doctors } from "@/utils/data";

import VerifiedBadge from "@/public/assets/verified_icon.svg";
import Image from "next/image";

const DoctorPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [doctor, setDoctor] = useState<Doctor | null>(null);

    useEffect(() => {
        const foundDoctor = doctors.find((doc) => doc._id === id);
        if (foundDoctor) {
            setDoctor(foundDoctor);
        }
    }, [id]);

    if (!doctor) return <div>Doctor not found</div>;

    return (
        <section className="py-6 md:px-20">
            <div className="flex flex-col sm:flex-row container gap-4">
                <div>
                    <Image
                        src={doctor.image.src}
                        alt={doctor.name}
                        className="bg-sky-400 w-full sm:max-w-72 rounded-lg"
                        width={1000}
                        height={0}
                    />
                </div>

                <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
                    <p className="flex items-center gap-2">
                        <span className="text-3xl font-semibold">{doctor.name}</span>
                        <VerifiedBadge /> 
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <p className="text-sm text-gray-600">{doctor.degree} - {doctor.speciality}</p>
                        <p className="text-sm text-gray-600">{doctor.experience}</p>
                    </div>

                    <div>
                        <p>About</p>
                        <Image src={assets.cross_icon.src} alt="About" className="size-6" width={50} height={0} />
                        <p className="text-gray-700 mb-4">{doctor.about}</p>
                        <p className="">Appointment fee: ${doctor.fees}</p>
                        <p className="">Address: {doctor.address.line1}, {doctor.address.line2}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorPage;
