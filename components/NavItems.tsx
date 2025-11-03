'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Companions', link: '/companions' },
        { name: 'My Journey', link: '/my-journey' },
    ];

    const pathname = usePathname();

    return (
        <div className="flex items-center gap-0">
            {navItems.map(({name, link}) => (
                <Link 
                    key={name} 
                    href={link} 
                    className={cn(
                        "px-4", 
                        pathname === link ? " font-semibold" : "text-gray-500"

                    )}
                >
                    {name}
                </Link>
            ))}
        </div>
    );
}
 
export default NavItems;

