import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/seperator";
import { PiHandTapFill } from "react-icons/pi";
import { IoPlayForwardSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoCloudOffline } from "react-icons/io5";
import { IoMdPricetag } from "react-icons/io";
import { AE } from 'country-flag-icons/react/3x2'




const steps = [
  {
    icon: PiHandTapFill,
    title: "Get a Quote",
    description: "Answer a few questions and see your value",
    duration: "30 Seconds",
    durationIcon: IoPlayForwardSharp,
  },
  {
    icon: FaHandshake,
    title: "Trade In",
    description: "Drop off or schedule a handover",
    duration: "24 Hours",
    durationIcon: IoPlayForwardSharp,
  },
  {
    icon: FaRegMoneyBillAlt,
    title: "Get Paid",
    description: "Quick verification and instant reward",
    duration: null,
    durationIcon: null,
  },
];

const features = [
  {
    icon: IoCloudOffline,
    title: "The Edge",
    description: "Quick, hassle-free process",
  },
  {
    icon: IoMdPricetag,
    title: "Value First",
    description: "Fair market pricing",
  },
  {
    icon: AE,
    title: "UAE Trusted",
    description: "Trusted UAE buyback ecosystem",
  },
];

export const SubscriptionSection = () => {
  return (
    <section className="w-full py-20 px-8">
      <div className="max-w-[1120px] mx-auto">
        <Card className="rounded-2xl overflow-hidden shadow-[0px_80px_64px_-2.5px_#00000014,0px_43.96px_35.17px_-2.19px_#00000014,0px_25.53px_20.42px_-1.88px_#00000014,0px_15.6px_12.48px_-1.56px_#00000014,0px_9.66px_7.73px_-1.25px_#00000014,0px_5.81px_4.65px_-0.94px_#00000014,0px_3.18px_2.55px_-0.62px_#00000014,0px_1.34px_1.07px_-0.31px_#00000014] [background:radial-gradient(50%_50%_at_49%_0%,rgba(39,39,42,1)_0%,rgba(0,0,0,1)_100%)] border-0">
          <CardContent className="relative p-0">
            <div className="absolute w-full h-full top-0 left-0 opacity-[0.04] bg-[url(/image-1.png)] bg-[100%_100%]" />

            <div className="relative py-16 px-10">
              <div className="flex flex-col items-center gap-3 mb-16">
                <div className="font-medium text-zinc-300 text-sm text-center">
                  How the souqback model works?
                </div>
                <h2 className="font-medium text-white text-[28px]">
                  How It Works
                </h2>
              </div>

              <div className="flex flex-col gap-6 max-w-[calc(100%-84px)] mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="rounded-[11px] overflow-hidden">
                      <div className="flex items-center gap-[10px]">
                        {typeof step.icon === "string" ? (
                          <img
                            src={step.icon}
                            alt={step.title}
                            className="w-[18px] h-[18px]"
                          />
                        ) : (
                          <step.icon className="w-[18px] h-[18px] text-white" />
                        )}

                        <div className="font-medium text-white text-base">
                          {step.title}
                        </div>
                      </div>

                      <div className="mt-[21px] text-zinc-400 text-[15px] leading-[27px]">
                        {step.description}
                      </div>
                    </div>

                    {step.duration && index < steps.length - 1 && (
  <div className="flex items-center h-[50px] px-4 rounded-xl bg-[linear-gradient(90deg,rgba(24,24,27,1)_0%,rgba(24,24,27,0)_100%)]">
    <div className="flex items-center gap-[10px]">
      {typeof step.durationIcon === "string" ? (
        <img
          src={step.durationIcon}
          alt="Duration"
          className="w-[16px] h-[16px]"
        />
      ) : step.durationIcon ? (
        <step.durationIcon className="w-[16px] h-[16px] text-zinc-500" />
      ) : null}

      <div className="font-medium text-zinc-500 text-sm">
        {step.duration}
      </div>
    </div>
  </div>
)}

                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-start justify-between mt-16 max-w-[1120px] mx-auto">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-6 flex-1">
                <div className="flex items-center gap-[10px]">
                {typeof feature.icon === "string" ? (
  <img
    src={feature.icon}
    alt={feature.title}
    className="w-[18px] h-[18px]"
  />
) : (
  <feature.icon className="w-[18px] h-[18px] text-zinc-700" />
)}

                  <div className="text-zinc-700 text-base">
                    {feature.title}
                  </div>
                </div>

                <div className="text-zinc-500 text-[15px] text-center">
                  {feature.description}
                </div>
              </div>

              {index < features.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-[77px] bg-zinc-200"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
