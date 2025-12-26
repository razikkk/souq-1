import { Card, CardContent } from "../../../../components/ui/card";
import { BsArrowRightShort } from "react-icons/bs";

const footerLinks = [
  { label: "Home" },
  { label: "Trust" },
  { label: "Process" },
  { label: "Products" },
  { label: "Contact" },
];

const socialLinks = [
  { label: "X / Twitter" },
  { label: "LinkedIn" },
  { label: "Instagram" },
];

export const ProductVariantSection = () => {
  return (
    <footer className="w-full bg-black relative">
      <div className="w-full flex flex-col items-center">

        {/* CTA CARD */}
        <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[272px] py-12">
          <Card className="rounded-lg border border-[#ffffff14] bg-[radial-gradient(50%_50%_at_73%_0%,rgba(25,43,107,1)_0%,rgba(9,9,11,1)_100%)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] bg-[url(/image-1.png)] bg-cover" />

            <CardContent className="p-6 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-[164px] text-center md:text-left">
                
                {/* TEXT */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-base text-white">
                    Looking for more answers?
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-zinc-300 leading-[24px] md:leading-[27px]">
                    Book a quick 15-minute call to see how <br className="hidden md:block" />
                    SouqBack’s buyback solution fits your needs.
                  </p>
                </div>

                {/* CTA BUTTON */}
                <div className="relative bg-zinc-800 rounded-[71px] overflow-hidden flex items-center gap-4 pr-5 pl-[5px] py-[5px] w-full md:min-w-[308px] md:w-auto">
                  
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-3xl bg-[url(/profile-picture---dwg1xjhwq6ucrq3yqbgews2s6k-jpg-1.png)] bg-cover bg-center flex-shrink-0" />

                  <div className="flex flex-col gap-[2px] flex-1 text-center">
                    <div className="font-medium text-white text-[14px] md:text-[15px]">
                      Schedule Free Meeting
                    </div>
                    <div className="text-zinc-400 text-[12px] md:text-[13px]">
                      with SouqBack
                    </div>
                  </div>

                  {/* LOGO */}
                  <img
                    className="absolute left-3 top-1 w-11 h-11 md:w-12 md:h-12 rounded-full"
                    alt="Souq icon"
                    src="/souq-logo.jpg"
                  />

                  {/* ARROW */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-[43px] md:h-[42px] rounded-full bg-[#D61834] flex items-center justify-center">
                    <BsArrowRightShort className="text-white text-[26px] md:text-[30px]" />
                  </div>

                  {/* ANIMATION (desktop only) */}
                  <img
                    className="hidden md:block absolute -right-12 top-1 w-12 h-12"
                    alt="Animated icon"
                    src="/animated-icon.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FOOTER LINKS */}
        <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-80 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 text-center md:text-left">

            {/* COPYRIGHT */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 text-sm">
                © 2025 - Souq Back
              </span>
              <span className="text-white text-sm">
                Gadgets Rewind
              </span>
            </div>

            {/* LINKS */}
            <div className="flex gap-12 md:gap-[200px]">
              <nav className="flex flex-col gap-4">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white text-sm hover:text-zinc-300 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <nav className="flex flex-col gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white text-sm hover:text-zinc-300 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
