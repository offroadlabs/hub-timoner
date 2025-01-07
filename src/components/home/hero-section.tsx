import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { CalendlyButton } from "@/components/ui/calendly-button";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-8 py-20">
      <div className="space-y-8">
        <div className="relative w-48 h-48 mx-auto">
          <Image
            src="/avatar-Seb.webp"
            alt="Sébastien Timoner"
            className="rounded-full shadow-lg border-4 border-brand-blue/20"
            width={192}
            height={192}
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
            Sébastien Timoner
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] leading-relaxed">
            Lead Developer & CTO
            <br />
            <span className="text-brand-green dark:text-brand-green-light font-medium">
              Expert en architecture logicielle et développement web moderne
            </span>
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>Aix-en-Provence</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a
                  href="mailto:sebastien@offroadlabs.com"
                  className="hover:text-brand-green transition-colors"
                >
                  sebastien@offroadlabs.com
                </a>
              </div>
            </div>
            <CalendlyButton calendlyUrl="https://calendly.com/timoner/prise-contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
