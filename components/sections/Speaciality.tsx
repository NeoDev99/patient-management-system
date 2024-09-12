"use client";

import { SpecialityItem } from '../ui/SpecialityItem';

import Dermatologist from '@/public/assets/Dermatologist.svg';
import Gastroenterologist from '@/public/assets/Gastroenterologist.svg';
import General_physician from '@/public/assets/General_physician.svg';
import Gynecologist from '@/public/assets/Gynecologist.svg';
import Neurologist from '@/public/assets/Neurologist.svg';
import Pediatricians from '@/public/assets/Pediatricians.svg';

const Speciality = () => {
    return (
        <section className="py-20">
            <div className="container">
                <div className="mt-10 px-2 md:px-10 lg:px-20">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium md:max-w-md mx-auto mb-4 text-center">
                        Find by Speciality
                    </h1>
                    <p className="text-center text-sm md:text-md mb-6">
                        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <SpecialityItem href="/doctors" Icon={Gynecologist} label="Gynecologist" />
                        <SpecialityItem href="/doctors" Icon={Dermatologist} label="Dermatologist" />
                        <SpecialityItem href="/doctors" Icon={Neurologist} label="Neurologist" />
                        <SpecialityItem href="/doctors" Icon={General_physician} label="General Physician" />
                        <SpecialityItem href="/doctors" Icon={Pediatricians} label="Pediatricians" />
                        <SpecialityItem href="/doctors" Icon={Gastroenterologist} label="Gastroenterologist" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speciality;
