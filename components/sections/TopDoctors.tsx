import Image from "next/image";
import Link from "next/link";

import { doctors } from "@/utils/data";

const TopDoctors = () => {
    return (
        <section className="py-10">
            <div className="flex flex-col container items-center gap-4 my-16 text-gray-900">
                <h1 className="text-3xl font-medium">
                    Top Doctors to Book
                </h1>
                <p className="sm:w-1/3 text-center text-sm">
                    Simply browse through our extensive list of trusted doctors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 px-3">
                    {doctors.slice(0, 8).map((item) => (
                        <div 
                            key={item.name} 
                            className="group flex flex-col items-center border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={0}
                                height={0}
                                className="bg-blue-50"
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
                                        <p className="text-gray-900 md:text-lg font-medium sm:text-sm">{item.name}</p>
                                        <p className="text-gray-600 md:text-sm sm:text-xs">{item.speciality}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href="/doctors"
                    className="bg-sky-400 text-white px-12 p-3 rounded-full mt-10 hover:scale-105 transition-all"
                >
                    More
                </Link>
            </div>
        </section>
    );
};

export default TopDoctors;
