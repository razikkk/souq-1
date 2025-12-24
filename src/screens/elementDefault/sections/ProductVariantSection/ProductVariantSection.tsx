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
        {/* <div className="w-full flex justify-center">
          <img
            className="w-[800px] h-[500px]"
            alt="Logo mask group"
            src="/souq-white.png"
          />
        </div>

        <div className="w-full max-w-[1440px] px-[272px] -mt-[195px] relative z-10">
          <img
            className="w-[484px] h-[323px] object-cover mx-auto mb-8"
            alt="Souq back logos"
            src="/souq-back-logos-03-1.png"
          />
        </div> */}

        <div className="w-full max-w-[1440px] px-[272px] py-12">
          <Card className="rounded-lg border border-[#ffffff14] bg-[radial-gradient(50%_50%_at_73%_0%,rgba(25,43,107,1)_0%,rgba(9,9,11,1)_100%)] relative overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 opacity-[0.04] bg-[url(/image-1.png)] bg-[100%_100%]" />
            <CardContent className="p-12 relative z-10">
              <div className="flex items-center justify-between gap-[164px]">
                <div className="flex flex-col gap-[20px]">
                  <h3 className="[font-family:'Inter',Helvetica] font-medium text-base text-white tracking-[-0.32px] leading-[25.6px]">
                    Looking for more answers?
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[15px] text-zinc-300 tracking-[-0.15px] leading-[27px]">
                  Book a quick 15-minute call to see how <br />
                  SouqBack’s  buyback solution fits your needs.
                  </p>
                </div>

                <div className="relative bg-zinc-800 rounded-[71px] overflow-hidden flex items-center gap-4 pr-5 pl-[5px] py-[5px] min-w-[308px]">
                  <div className="w-12 h-12 rounded-3xl bg-[url(/profile-picture---dwg1xjhwq6ucrq3yqbgews2s6k-jpg-1.png)] bg-cover bg-center flex-shrink-0" />

                  <div className="flex flex-col gap-[2px] flex-1 -translate-x-5">
  <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[15px] tracking-[-0.30px] leading-[18px] text-center">
    Schedule Free Meeting
  </div>
  <div className="[font-family:'Inter',Helvetica] font-normal text-zinc-400 text-[13px] tracking-[-0.26px] leading-4 text-center">
    with SouqBack
  </div>
</div>


                  <img
  className="absolute left-3 top-1 w-12 h-12 rounded-full"
  alt="Permanent icon"
              src="/souq-logo.jpg"
            />
<div className="absolute right-3 top-1/2 -translate-y-1/2 w-[43px] h-[42px] rounded-full bg-[#D61834] flex items-center justify-center">
  <BsArrowRightShort className="text-white text-[30px]" />
</div>

                  <img
                    className="absolute -right-12 top-1 w-12 h-12"
                    alt="Animated icon"
                    src="/animated-icon.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full max-w-[1440px] px-80 py-12">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="[font-family:'Inter',Helvetica] font-normal text-zinc-500 text-sm tracking-[-0.14px] leading-[25.2px]">
                  © 2025 - Souq Back
                </span>
                <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[-0.14px] leading-[25.2px]">
                  Gadgets Rewind
                </span>
              </div>
            </div>

            <div className="flex gap-[200px]">
              <nav className="flex flex-col gap-[21px]">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[-0.14px] leading-[25.2px] hover:text-zinc-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <nav className="flex flex-col gap-[21px]">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[-0.14px] leading-[25.2px] hover:text-zinc-300 transition-colors"
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
