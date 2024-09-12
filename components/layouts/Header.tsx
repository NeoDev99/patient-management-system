"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Doctors', path: '/doctors' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const [token, setToken] = useState(true);

    return (
        <header className="px-2 md:px-20 py-4 border-b border-zinc-400/30">
            <div className="flex items-center justify-between container mx-auto">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">
                        Medi<span className="text-sky-400">Core</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-start font-medium space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="hover:text-primary hover:scale-105 transition"
                        >
                            <span className="flex items-center space-x-1">
                                <span>{link.name}</span>
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Create Account Button or Profile Picture */}
                <div className="hidden md:block">
                    {token ? (
                        <div className="relative group flex items-center space-x-4">
                            {/* Profile Picture */}
                            <Image
                                src="/assets/profile_pic.png"
                                alt="Profile Pic"
                                width={40}
                                height={40}
                                className="rounded-full cursor-pointer"
                            />
                            {/* Dropdown Icon */}
                            <Image
                                src="/assets/dropdown_icon.svg"
                                alt="DropdownMenu"
                                width={10}
                                height={10}
                                className="cursor-pointer"
                            />
                            {/* Dropdown Menu */}
                            <div className="absolute top-12 right-0 min-w-[150px] text-sm bg-white shadow-md rounded-md py-2 hidden group-hover:flex flex-col gap-2 z-20">
                                <Link href="/profile" className="px-4 py-2 hover:bg-gray-100">My Profile</Link>
                                <Link href="/appointments" className="px-4 py-2 hover:bg-gray-100">My Appointment</Link>
                                <button
                                    className="px-4 py-2 text-left hover:bg-gray-100"
                                    onClick={() => setToken(false)}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-sky-400 text-white font-light px-8 py-3 rounded-full hover:bg-primary transition duration-300"
                        >
                            Create Account
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
