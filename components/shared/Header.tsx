import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <Image src="/assets/images/logo-backbone.svg" alt="Logo Backbone" width={130} height={30} />
                </Link>
                <div className="flex w-32 justify-end gap-2">
                    <SignedOut>
                        <Button asChild className="rounded-full text-[16px] font-normal leading-[24px]" size={"lg"}>
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                        <Button asChild className="rounded-full text-[16px] font-normal leading-[24px]" size={"lg"}>
                            <Link href="/sign-up">Sign Up</Link>
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                </div>
            </div>
        </header>
    )
}

export default Header