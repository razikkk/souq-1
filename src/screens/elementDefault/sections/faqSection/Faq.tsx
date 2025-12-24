import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What is ORION Design Subscription Service?",
  },
  {
    id: "item-2",
    question: "How does the ORION Design Subscription work?",
  },
  {
    id: "item-3",
    question: "What types of design projects can ORION handle?",
  },
  {
    id: "item-4",
    question:
      "Is there a limit to how many design requests I can submit each month?",
  },
  {
    id: "item-5",
    question: "What if I need revisions on a design?",
  },
  {
    id: "item-6",
    question: "How quickly can I expect to receive my designs?",
  },
  {
    id: "item-7",
    question: "Can I cancel my subscription at any time?",
  },
  {
    id: "item-8",
    question: "What makes ORION different from hiring a freelance designer?",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="w-full py-32 flex flex-col gap-14 bg-white">
      <header className="mx-auto max-w-[438px] flex flex-col gap-0.5 items-center">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-black text-[28px] text-center tracking-[-0.56px] leading-9 whitespace-nowrap">
          We know you have 🤨 questions,
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-medium text-zinc-500 text-[28px] text-center tracking-[-0.56px] leading-9 whitespace-nowrap">
          and we come with answers.
        </p>
      </header>

      <div className="mx-auto w-full max-w-[800px] px-4">
        <Accordion
          type="single"
          collapsible
          className="bg-zinc-100 rounded-2xl p-1 flex flex-col gap-1"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-white rounded-xl border-none"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline [&[data-state=open]>svg]:rotate-45">
                <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[15px] tracking-[-0.30px] leading-[18px] text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4">
                <div className="[font-family:'Inter',Helvetica] text-zinc-600 text-[14px] leading-relaxed">
                  Answer content for {item.question}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
