import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/seperator";

const services = [
  {
    title: "Instant valuation",
    description:"Get accurate device value instantly using our smart pricing system with no waiting or negotiations."
  },
  {
    title: "Fast payouts",
    description:"Receive your payment quickly through secure methods once your device is verified and approved." 
 },
  {
    title: "Secure & transparent",
    description:
"Every step is fully transparent, ensuring data safety, fair pricing, and complete customer trust." 
 },
  {
    title: "Eco-friendly buyback",
    description:
"Your old gadgets are responsibly reused or recycled, reducing e-waste and supporting sustainability." 
 },
];

const statistics = [
  {
    value: "76",
    label: "Clients",
  },
  {
    value: "420",
    label: "Products Sold",
  },
  {
    value: "24h",
    label: "Customer Support",
  },
];

export const ServicesSection = ()=> {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[800px] mx-auto">
        <header className="flex flex-col gap-6 mb-12">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-black text-[28px] tracking-[-0.56px] leading-9 text-center">
            Trust Highlights
          </h2>

          <div className="flex flex-col gap-[9px] items-center">
            <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-700 text-[15px] text-center tracking-[-0.15px] leading-[27px]">
            Our process ensures instant valuation, fast payouts, complete transparency,            </p>
            <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-700 text-[15px] text-center tracking-[-0.15px] leading-[27px]">
            and eco-friendly gadget buyback you can trust.            </p>
          </div>
        </header>

        <div className="bg-zinc-100 rounded-2xl p-1.5 mb-12">
          <div className="grid grid-cols-2 gap-1.5">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-none">
                <CardContent className="p-6 flex flex-col gap-2">
                  <h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[-0.32px] leading-[25.6px] text-center">
                    {service.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-700 text-[15px] tracking-[-0.15px] leading-[27px] text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div
  className="
    max-w-[900px]
    mx-auto
    mt-10
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:flex 
    items-center 
    justify-center 
    gap-6 lg:gap-8
  "
>
  {statistics.map((stat, index) => (
    <React.Fragment key={index}>
      {/* DESKTOP SEPARATOR */}
      {index > 0 && (
        <Separator
          orientation="vertical"
          className="hidden lg:block h-[60px]"
        />
      )}

      {/* STAT */}
      <div className="flex flex-col gap-px items-center text-center">
        <div className="font-normal text-black text-base tracking-[-0.32px] leading-8">
          {stat.value}
        </div>
        <div className="font-normal text-zinc-500 text-[15px] tracking-[-0.15px] leading-[27px]">
          {stat.label}
        </div>
      </div>
    </React.Fragment>
  ))}
</div>

      </div>
    </section>
  );
};
