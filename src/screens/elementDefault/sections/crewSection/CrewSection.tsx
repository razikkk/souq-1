import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const productCards = [
  {
    image: "/lap-souq.jpg",
    label: "Laptop",
  },
  {
    image: "/mob-souq.jpg",
    label: "Mobile",
  },
  {
    image: "/watch-souq.jpg",
    label: "Laptop",
  },
];

export const CrewSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-[linear-gradient(180deg,rgba(250,250,250,1)_0%,rgba(244,244,245,1)_100%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-black text-[28px] tracking-[-0.56px] leading-9">
            What We Buy
          </h2>

          <div className="flex flex-col items-center gap-[9px]">
            <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-700 text-[15px] text-center tracking-[-0.15px] leading-[27px]">
              We buy Smartphones, Laptops, Tablets, Smartwatches,
            </p>
            <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-700 text-[15px] text-center tracking-[-0.15px] leading-[27px]">
              Gaming Consoles, and Accessories
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {productCards.map((card, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-[0px_6px_8.4px_-3.5px_#00000008,0px_1.37px_1.92px_-2.33px_#00000010,0px_0.36px_0.51px_-1.17px_#00000011] rounded-xl"
            >
             <CardContent className="p-0">
  <div className="relative h-[295px] overflow-hidden rounded-xl">
    {/* Full image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${card.image})` }}
    />

    {/* Bottom gradient + text (UNCHANGED position) */}
    <div className="absolute bottom-0 left-0 right-0 h-[130px] bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[-0.32px] leading-[25.6px]">
        {card.label}
      </span>
    </div>
  </div>
</CardContent>

            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#d61834] hover:bg-[#b01429] text-white rounded-[40px] px-7 py-2 [font-family:'Inter',Helvetica] font-medium text-[15px] tracking-[-0.30px] leading-[18px]">
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};
