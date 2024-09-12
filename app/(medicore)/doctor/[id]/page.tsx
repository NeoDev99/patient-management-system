"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Doctor } from "@/types/types";
import { doctors } from "@/utils/data";

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
            <div className="container">
                <h1 className="text-2xl font-bold mb-4">{doctor.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                    <img src={doctor.image.src} alt={doctor.name} className="w-32 h-32 object-cover rounded-full" />
                    <div>
                        <p className="text-lg font-medium">{doctor.speciality}</p>
                        <p className="text-sm text-gray-600">{doctor.degree}</p>
                        <p className="text-sm text-gray-600">{doctor.experience}</p>
                    </div>
                </div>
                <p className="text-gray-700 mb-4">{doctor.about}</p>
                <p className="font-medium mb-2">Fees: ${doctor.fees}</p>
                <p className="font-medium mb-2">Address: {doctor.address.line1}, {doctor.address.line2}</p>
            </div>
        </section>
    );
};

export default DoctorPage;
