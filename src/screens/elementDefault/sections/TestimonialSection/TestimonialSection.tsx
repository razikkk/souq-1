import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { FaRecycle } from "react-icons/fa";


export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-8 flex items-center justify-center gap-24 [background:radial-gradient(50%_50%_at_50%_-9%,rgba(39,39,42,1)_0%,rgba(0,0,0,1)_100%)]">
      <div className="flex items-center gap-6">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src="/souq-logo.jpg"
            alt="Souq Back"
            className="object-cover"
          />
        </Avatar>

        <div className="flex flex-col gap-2">
          <div className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[-0.32px] leading-[25.6px] whitespace-nowrap">
            Souq Back
          </div>
          <div className="[font-family:'Inter',Helvetica] font-medium text-zinc-500 text-sm tracking-[0] leading-[18px] whitespace-nowrap">
            Founder
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[800px] flex flex-col gap-8">
      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[33px] text-center tracking-[-0.30px] leading-[29px] whitespace-nowrap">
  Sustainability in Action <span className="text-[#16a34a]">♻</span>
</h2>


        <div className="flex flex-col gap-6">
          <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[25px] tracking-[-0.56px] leading-9">
            At Gadgets Rewind, we believe every device deserves a second life.
            Instead of ending up as e-waste, pre-owned gadgets are carefully
            collected, tested, and reintegrated into the market—helping reduce
            environmental impact while making technology more accessible.
          </p>

          <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[25px] tracking-[-0.56px] leading-9">
            By choosing to sell or recycle your gadgets with us, you&apos;re
            contributing to a cleaner, more sustainable future. We minimize
            electronic waste, conserve valuable resources, and reward customers
            instantly—proving that responsible choices can benefit both the
            planet and you.
          </p>
        </div>
      </div>
    </section>
  );
};
