import Image from "next/image";
import { assets } from "@/utils/data";

const page = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center text-2xl pt-10 text-gray-500">
                    <p>CONTACT <span className="text-gray-700 font-medium">US</span></p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-10 mb-28 my-10 text-sm text-gray-600">
                    <Image
                        src={assets.contact_image} 
                        alt="contact-img" 
                        width={400} 
                        height={0}
                        className="w-full md:max-w-[360px]"
                    />
                    <div className="flex flex-col justify-center items-start gap-6">
                        <p className="font-semibold text-lg text-gray-600">Our Office</p>
                        <p className="text-gray-500">00000 Willms Station <br />Suite 000, Washington, USA</p>
                        <p className="text-gray-500">Tel: (000) 000-0000 <br /> Email: medicore.hos@gmail.com</p>
                        <p className="font-semibold text-lg text-gray-600">Careers at MediCore</p>
                        <p className="text-gray-500">Learn more about our teams and job openings.</p>
                        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
