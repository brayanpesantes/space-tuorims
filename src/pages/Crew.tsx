import clsx from "clsx";
import { useState } from "react";
import data from "../../data.json";
import Title from "../components/Title";
import LayoutDefault from "../layouts/LayoutDefault";
import { ICrew } from "../types/crew";

const BG_IMAGE = "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
export default function Crew() {
  const [crews, setCrews] = useState<ICrew[]>(data.crew);
  const [crew, setCrew] = useState<ICrew>(crews[0]);

  return (
    <LayoutDefault bg={BG_IMAGE}>
      <main className="pb-20 md:px-[38.5px] md:pb-0 lg:px-[166.5px]">
        <Title
          count="03"
          title="Meet your crew"
          className="lg:w-50% md:mt-10"
        />
        <section className="mt-2 space-y-8 p-6 md:flex md:flex-col-reverse md:p-0 lg:flex-row-reverse lg:items-center lg:gap-[37px]">
          <div className="border-b border-b-[#383B4B] md:mt-24 md:border-none lg:mt-0">
            <img
              src={crew.images.webp}
              alt=""
              className="mx-auto h-[223px]  max-w-[226px] object-cover object-center md:h-[532px] md:max-w-[456px] lg:h-[712px] lg:max-w-[615.57px]"
            />
          </div>
          <div className="space-y-8  md:flex md:flex-col-reverse lg:w-full lg:justify-start">
            <div className="mx-auto flex w-[88px] justify-between md:mt-10 lg:mx-0 lg:w-[132px]">
              {crews.map((c, idx) => (
                <button
                  className={clsx(
                    "h-2.5 w-2.5 rounded-full lg:h-[15px] lg:w-[15px]",
                    c.name === crew.name ? "bg-white" : "bg-white/[0.17]"
                  )}
                  key={idx}
                  onClick={() => setCrew(crews[idx])}
                ></button>
              ))}
            </div>
            <div className="text-center lg:text-start">
              <h3 className="font-bellefair text-base uppercase leading-[18.34px] tracking-normal text-white/50 md:text-2xl md:leading-[27.5px] lg:text-[32px] lg:leading-[36.67px] ">
                {crew.role}
              </h3>
              <h4 className="mt-2 font-bellefair text-2xl uppercase leading-6 text-white md:text-[40px] md:leading-[46px] lg:text-56px">
                {crew.name}
              </h4>
              <p className="mt-4 font-barlow text-[15px] font-normal leading-[25px] text-primary md:mx-auto md:w-[458px] md:text-base md:leading-7 md:tracking-normal lg:mx-0 lg:w-[444px] lg:text-[18px] lg:leading-8">
                {crew.bio}
              </p>
            </div>
          </div>
        </section>
      </main>
    </LayoutDefault>
  );
}
