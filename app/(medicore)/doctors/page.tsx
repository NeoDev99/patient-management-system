"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { doctors } from "@/utils/data";
import { Doctor } from "@/types/types";

const Doctors = () => {
    const router = useRouter();
    const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(null);
    const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);

    const handleSpecialityClick = (speciality: string) => {
        setSelectedSpeciality(speciality);
        setFilteredDoctors(
            speciality === "All"
                ? doctors
                : doctors.filter((doctor) => doctor.speciality.toLowerCase() === speciality.toLowerCase())
        );
    };

    const handleDoctorClick = (doctorId: string) => {
        router.push(`/doctors/${doctorId}`);
    };

    return (
        <section className="py-6 md:px-20">
            <div className="container">
                <p className="text-gray-600">Browse through the doctors by specialty.</p>
                <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
                    <div className="flex flex-col gap-4 text-sm text-gray-600">
                        <p
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-200 rounded transition cursor-pointer ${selectedSpeciality === null ? 'bg-sky-200' : ''}`}
                            onClick={() => handleSpecialityClick("All")}
                        >
                            All
                        </p>
                        <p
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-200 rounded transition cursor-pointer ${selectedSpeciality === 'General Physician' ? 'bg-sky-200' : ''}`}
                            onClick={() => handleSpecialityClick("General Physician")}
                        >
                            General Physician
                        </p>
                        <p
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-200 rounded transition cursor-pointer ${selectedSpeciality === 'Gynecologist' ? 'bg-sky-200' : ''}`}
                            onClick={() => handleSpecialityClick("Gynecologist")}
                        >
                            Gynecologists
                        </p>
                        <p
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-200 rounded transition cursor-pointer ${selectedSpeciality === 'Dermatologist' ? 'bg-sky-200' : ''}`}
                            onClick={() => handleSpecialityClick("Dermatologist")}
                        >
                            Dermatologists
                        </p>
                        <p
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-200 rounded transition cursor-pointer ${selectedSpeciality === 'Neurologist' ? 'bg-sky-200' : ''}`}
                            onClick={() => handleSpecialityClick("Neurologist")}
                        >
                            Neurologists
                        </p>
                        <p
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-200 rounded transition cursor-pointer ${selectedSpeciality === 'Pediatrician' ? 'bg-sky-200' : ''}`}
                            onClick={() => handleSpecialityClick("Pediatrician")}
                        >
                            Pediatricians
                        </p>
                        <p
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-200 rounded transition cursor-pointer ${selectedSpeciality === 'Gastroenterologist' ? 'bg-sky-200' : ''}`}
                            onClick={() => handleSpecialityClick("Gastroenterologist")}
                        >
                            Gastroenterologists
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-auto gap-4 gap-y-6 mb-6">
                        {filteredDoctors.map((doctor) => (
                            <div
                                key={doctor._id}
                                className="group flex flex-col items-center border border-blue-200 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                                onClick={() => handleDoctorClick(doctor._id)}
                            >
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={0}
                                    height={0}
                                    className="bg-blue-50 group-hover:bg-sky-200"
                                />
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                                            <div className="bg-green-500 size-2.5 rounded-full relative">
                                                <div className="bg-green-500 absolute inset-0 rounded-full group-hover:animate-ping-large"></div>
                                            </div>
                                            <div className="text-sm font-medium text-center text-green-500">
                                                Available
                                            </div>
                                        </div>

                                        <div className="pb-3 text-center">
                                            <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
                                            <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;
