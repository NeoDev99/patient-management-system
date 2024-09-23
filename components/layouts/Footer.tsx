import React from "react";
import ArrowUpRightIcon from "@/public/assets/arrow_icon.svg";

const footerLinks = [
  {
    title: 'YouTube',
    href: 'https://www.youtube.com',
  },
  {
    title: 'X',
    href: 'https://www.twitter.com',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com',
  },
]

const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-sky-300/70 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-500/15 items-center py-6 text-sm gap-8">
          <div className="">&copy; 2024 MediCore | All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="">{link.title}</span>
                <ArrowUpRightIcon className="size-3" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;