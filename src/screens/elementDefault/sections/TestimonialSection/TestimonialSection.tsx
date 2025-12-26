import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

export const TestimonialsSection = () => {
  return (
    <section className="
      w-full
      py-12 md:py-16
      px-4 md:px-8
      flex
      flex-col md:flex-row
      items-center
      justify-center
      gap-10 md:gap-24
      [background:radial-gradient(50%_50%_at_50%_-9%,rgba(39,39,42,1)_0%,rgba(0,0,0,1)_100%)]
    ">
      {/* LEFT PROFILE */}
      <div className="flex items-center gap-4 md:gap-6">
        <Avatar className="w-10 h-10 md:w-12 md:h-12">
          <AvatarImage
            src="/souq-logo.jpg"
            alt="Souq Back"
            className="object-cover"
          />
        </Avatar>

        <div className="flex flex-col gap-1 md:gap-2">
          <div className="font-medium text-white text-sm md:text-base">
            Souq Back
          </div>
          <div className="font-medium text-zinc-500 text-xs md:text-sm">
            Founder
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 max-w-[800px] flex flex-col gap-6 md:gap-8 text-center md:text-left">
        <h2 className="
          font-semibold
          text-white
          text-[22px] md:text-[33px]
          tracking-[-0.30px]
          leading-tight md:leading-[29px]
        ">
          Sustainability in Action <span className="text-[#16a34a]">♻</span>
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">
          <p className="
            font-medium
            text-white
            text-[16px] md:text-[25px]
            tracking-[-0.3px] md:tracking-[-0.56px]
            leading-[26px] md:leading-9
          ">
            At Gadgets Rewind, we believe every device deserves a second life.
            Instead of ending up as e-waste, pre-owned gadgets are carefully
            collected, tested, and reintegrated into the market—helping reduce
            environmental impact while making technology more accessible.
          </p>

          <p className="
            font-medium
            text-white
            text-[16px] md:text-[25px]
            tracking-[-0.3px] md:tracking-[-0.56px]
            leading-[26px] md:leading-9
          ">
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
