import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface SpecialityItemProps {
    href: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
}

export const SpecialityItem: React.FC<SpecialityItemProps> = ({ href, Icon, label }) => {
    return (
        <Link href={href} className="text-center">
            <div className="flex flex-col items-center">
                <Icon className={twMerge("size-20 mb-2 hover:translate-y-[-10px] transition-all duration-500")} />
                <p className="text-gray-600 text-sm font-extralight">{label}</p>
            </div>
        </Link>
    );
};
