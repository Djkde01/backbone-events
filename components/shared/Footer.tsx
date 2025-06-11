import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-t border-border">
            <div className="flex items-center justify-between wrapper py-4 flex-col md:flex-row gap-4">
                <Link href="/" className="w-36">
                    <Image src="/assets/images/logo-backbone.svg" alt="Logo Backbone" width={130} height={30} />
                </Link>
                <p className="text-[16px] leading-[24px] text-primary-50 text-center md:text-left">
                    🄯 {new Date().getFullYear()} Backbone. <br />Diseñado y desarrollado por{" "}
                    <Link href="https://sergioestrella.com" target="_blank" rel="noopener noreferrer">
                        Djkde
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer