import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-primary-50 py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0">
          <div className="flex flex-col items-start justify-center gap-8">
            <h1 className="h1-bold mb-4">
              Aprende, conecta y crece en comunidad.
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Backbone Events es una plataforma con meetups, talleres y
              eventos de ciencia y tecnología. Conecta con expertos, comparte conocimientos y
              mejora tus habilidades en un entorno amigable y profesional.
            </p>
            <Button size={"lg"} className="rounded-full h-[54px] p-regular-16 w-full sm:w-fit">
              <Link href="#events">
                Explorar Eventos
              </Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="Hero Image"
            className="w-full max-h-[70vh] object-contain object-center"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </main>
  );
}
