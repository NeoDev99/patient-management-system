import { StaticImageData } from 'next/image';

export interface Assets {
    appointment_img: StaticImageData;
    header_img: StaticImageData;
    group_profiles: StaticImageData;
    profile_pic: StaticImageData;
    contact_image: StaticImageData;
    about_image: StaticImageData;
    logo: StaticImageData;
    dropdown_icon: StaticImageData;
    menu_icon: StaticImageData;
    cross_icon: StaticImageData;
    chats_icon: StaticImageData;
    verified_icon: StaticImageData;
    arrow_icon: StaticImageData;
    info_icon: StaticImageData;
    upload_icon: StaticImageData;
    stripe_logo: StaticImageData;
    razorpay_logo: StaticImageData;
}

export interface Speciality {
    speciality: string;
    image: StaticImageData;
}

export interface Doctor {
    _id: string;
    name: string;
    image: StaticImageData;
    speciality: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    address: {
        line1: string;
        line2: string;
    };
}
