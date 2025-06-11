import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"


const MobileNav = () => {
    return (
        <nav className="md:hidden flex items-center justify-between">

            <Sheet>
                <SheetTrigger>
                    <Image src="/assets/images/mobile-menu.svg" alt="Menu principal" width={24} height={24} className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="w-full max-w-xs p-4">
                    <Image src="/assets/images/logo-backbone.svg" alt="Logo Backbone" width={130} height={30} />
                    <Separator className="my-4" />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav