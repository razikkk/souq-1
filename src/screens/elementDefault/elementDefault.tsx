import { MailIcon, MapPinIcon } from "lucide-react";
import { CrewSection } from "./sections/crewSection/CrewSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ProductVariantSection } from "./sections/ProductVariantSection/ProductVariantSection";
import { ServicesSection } from "./sections/ServicesSection/ServiceSection";
import { SubscriptionSection } from "./sections/SubscriptionSection/SubscriptionSection";
import { TestimonialsSection } from "./sections/TestimonialSection/TestimonialSection";

export const ElementDefault = () => {
  return (
    <div className="bg-white w-full min-w-[1440px] flex flex-col">
      <header className="w-full h-[42px] bg-neutral-50 flex items-center justify-center sticky top-0 z-50">
        <div className="max-w-[1440px] w-full px-80 flex items-center justify-between gap-[357.3px]">
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-zinc-500" />
            <span className="[font-family:'Inter',Helvetica] font-medium text-zinc-500 text-sm tracking-[0] leading-[18px] whitespace-nowrap">
              1234 Dubai, UAE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="w-4 h-4 text-zinc-500" />
            <span className="[font-family:'Inter',Helvetica] font-medium text-zinc-500 text-sm tracking-[0] leading-[18px] whitespace-nowrap">
              hello@souqBack.com
            </span>
          </div>
        </div>
      </header>

      <main className="w-full flex flex-col">
        <section className="w-full relative">
          <HeroSection />
        </section>

        <section className="w-full relative">
          <ServicesSection />
        </section>

        <section className="w-full relative">
          <SubscriptionSection />
        </section>

        <section className="w-full relative">
          <CrewSection />
        </section>

        <section className="w-full relative">
          <TestimonialsSection />
        </section>

        <section className="w-full relative">
          <ProductVariantSection />
        </section>

        {/* <section className="w-full relative">
          <FaqSection />
        </section> */}
      </main>
    </div>
  );
};
