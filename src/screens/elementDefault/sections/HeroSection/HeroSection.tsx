
import { useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { BsArrowRightShort } from "react-icons/bs";
import { Menu, X } from "lucide-react";


const navigationItems = [
  { label: "Trust", href: "#" },
  { label: "Process", href: "#" },
  { label: "Products", href: "#" },
  { label: "Contact", href: "#" },
];

export const HeroSection = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-[730px] bg-white">
         <header className="absolute w-full top-[52px] left-0 h-[68px] bg-white border-b border-zinc-100 z-50">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 h-full flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-6 md:gap-[98px]">
            {/* LOGO */}
            <img
              src="/Souq-logo-main.png"
              alt="Souq Back"
              className="h-[138px] w-auto"
            />

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-0">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-[30px] px-[11px] rounded-[99px] text-zinc-700 text-[15px]"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* DESKTOP BUTTONS */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="secondary"
                className="h-[35px] px-[14px] bg-zinc-100 rounded-[40px]"
              >
                Whatsapp
              </Button>
              <Button className="h-[35px] px-[14px] bg-[#d61834] text-white rounded-[40px]">
                Book a Call
              </Button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden absolute top-[68px] left-0 w-full bg-white border-t border-zinc-100 shadow-lg">
            <div className="flex flex-col px-6 py-6 gap-4">
              
              {/* NAV ITEMS */}
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start text-[15px]"
                >
                  {item.label}
                </Button>
              ))}

              {/* CTA BUTTONS */}
              <Button
                variant="secondary"
                className="w-full bg-zinc-100 rounded-[40px]"
              >
                Whatsapp
              </Button>

              <Button className="w-full bg-[#d61834] text-white rounded-[40px]">
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </header>

      <div className="absolute top-[calc(50%_-_135px)] left-[calc(50%_-_250px)] w-[501px] h-[332px]">
        <div className="flex flex-col items-center gap-5">
          {/* <div className="flex items-center gap-2.5"> */}
            {/* <div className="flex items-center gap-2 overflow-hidden">
              <span className="[font-family:'Inter',Helvetica] font-medium text-zinc-900 text-sm tracking-[0] leading-[18px]">
                Loved by
              </span>

              <img className="w-[68px] h-5" alt="Avatars" src="/avatars.svg" />

              <span className="[font-family:'Inter',Helvetica] font-medium text-zinc-900 text-sm tracking-[0] leading-[18px]">
                100+ Founders
              </span>
            </div> */}

            {/* <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div> */}

          <div className="flex flex-col items-center gap-[22px]">
            <h1 className="[font-family:'Inter',Helvetica] font-medium text-black text-[38px] text-center tracking-[-0.76px] leading-[52px]">
              Sell Your Old Gadgets
            </h1>
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-black text-[38px] text-center tracking-[-0.76px] leading-[52px]">
              Get Instant Value.
            </h2>
          </div>

          <div className="flex flex-col items-center gap-[17.5px] px-[34.5px]">
            <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-700 text-[15px] text-center tracking-[-0.15px] leading-[27px]">
              Fast quotes, quick payouts, and responsible
            </p>
            <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-700 text-[15px] text-center tracking-[-0.15px] leading-[27px]">
              recycling across the UAE.
            </p>
          </div>

          <Button className="relative w-[309px] h-[58px] bg-[#192b6b] hover:bg-[#152456] rounded-[71px] overflow-hidden p-0 [&_svg]:!w-12 [&_svg]:!h-12">
            <Avatar className="absolute left-[5px] top-[5px] w-12 h-12 rounded-3xl">
              <AvatarImage
                src="/profile-picture---dwg1xjhwq6ucrq3yqbgews2s6k-jpg.png"
                alt="Filip"
                className="object-cover"
              />
            </Avatar>

            <div className="flex flex-col items-center gap-[3.5px]">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[15px] tracking-[-0.30px] leading-[18px]">
                Start a chat
              </span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[13px] tracking-[-0.26px] leading-4">
                with Filip, our founder
              </span>
            </div>

            <img
  className="absolute -left-2 -top-3 w-22 h-20"
  alt="Permanent icon"
              src="/souq-white.png"
            />
<div className="absolute right-3 top-1/2 -translate-y-1/2 w-[43px] h-[42px] rounded-full bg-[#D61834] flex items-center justify-center">
  <BsArrowRightShort className="text-white text-[10px]" />
</div>



            <img
              className="absolute -right-12 top-[calc(50%_-_24px)] w-12 h-12"
              alt="Animate"
              src="/animated-icon.svg"
            />
          </Button>
        </div>
      </div>

      <img
        className="absolute top-[5px] left-[19px] w-[243px] h-[162px] object-cover"
        alt="Souq back logos"
        src="/Souq-logo-main.png"
      />
    </section>
  );
};
 