"use client"
import Link from "next/link"
import { headerLinks } from "@/constants"
import { usePathname } from "next/navigation"

const NavItems = () => {
    const pathname = usePathname()
    return (
        <ul className="md:flex md:flex-row md:items-start w-full flex-col items-center justify-between gap-6">
            {headerLinks.map((link) => (
                <li key={link.route}>
                    <Link
                        href={link.route}
                        className={`text-[16px] leading-[24px] ${pathname === link.route ? "text-primary font-semibold" : "text-primary-50 font-normal"} hover:text-primary transition-colors duration-300`}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}

        </ul>
    )
}

export default NavItems