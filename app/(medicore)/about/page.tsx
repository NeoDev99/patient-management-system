import Image from "next/image";
import { assets } from "@/utils/data";

const page = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center text-2xl pt-10 text-gray-400">
                    <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
                </div>

                <div className="my-10 flex flex-col md:flex-row gap-12">
                    <Image
                        src={assets.about_image} 
                        alt="about-img" 
                        width={400} 
                        height={0}
                        className="w-full md:max-w-[360px]"
                    />
                    <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
                        <p>
                            Welcome to MediCore, your trusted partner in managing your healthcare needs conveniently 
                            and efficiently. At MediCore, we understand the challenges individuals face when it 
                            comes to scheduling doctor appointments and managing their health records.
                        </p>
                        <p>
                            MediCore is committed to excellence in healthcare technology. We continuously strive to 
                            enhance our platform, integrating the latest advancements to improve user experience and 
                            deliver superior service. Whether you&apos;re booking your first appointment or managing 
                            ongoing care, MediCore is here to support you every step of the way.
                        </p>
                        <b className="text-gray-800">Our Vision</b>
                        <p>Our vision at MediCore is to create a seamless healthcare experience for every user. We 
                            aim to bridge the gap between patients and healthcare providers, making it easier for 
                            you to access the care you need, when you need it.
                        </p>
                    </div>
                </div>

                <div className="text-xl my-4">
                    <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
                </div>

                <div className="flex flex-col md:flex-row mb-20">
                    <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-sky-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                        <b>EFFICIENCY:</b>
                        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                    </div>
                    <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-sky-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                        <b>CONVENIENCE:</b>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>
                    <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-sky-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                        <b>PERSONALIZATION:</b>
                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;