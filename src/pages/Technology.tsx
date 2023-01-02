import clsx from "clsx";
import { useState } from "react";
import data from "../../data.json";
import Title from "../components/Title";
import LayoutDefault from "../layouts/LayoutDefault";
import { ITechnology } from "../types/technology";
const BG_IMAGE =
  "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop";

export default function Technology() {
  const [technologies, setTechnologies] = useState<ITechnology[]>(
    data.technology
  );
  const [technology, setTechnology] = useState<ITechnology>(technologies[0]);

  return (
    <LayoutDefault bg={BG_IMAGE}>
      <Title
        count="03"
        title="SPACE LAUNCH 101"
        className="md:ml-[38px] md:mt-5 lg:ml-[166.5px] lg:mt-20"
      />
      <section className="md:gap-[130px] lg:mt-[26px] lg:flex lg:flex-row-reverse">
        <div className="mt-8 md:mt-[60px] lg:mt-0">
          <img
            src={technology.images.landscape}
            alt={technology.name}
            className="h-[170px] w-full bg-black md:h-[310px] lg:hidden"
          />
          <img
            src={technology.images.portrait}
            alt={technology.name}
            className="hidden h-[527px] w-[515px] bg-black lg:block"
          />
        </div>
        <div className="mt-[34px] space-y-6 md:mt-[56px] md:space-y-11 lg:flex lg:flex-row  lg:items-center lg:space-y-0">
          <div className="mx-auto flex w-[152px] justify-between md:w-[210px] lg:ml-[165px] lg:flex-col lg:justify-center lg:gap-8">
            {technologies.map((t, idx) => (
              <button
                className={clsx(
                  "h-10 w-10 rounded-full border font-bellefair text-base  font-normal leading-[18.34px] tracking-[1px] transition-colors duration-300 ease-in-out md:h-[60px] md:w-[60px] md:text-2xl md:leading-[27.5px] md:tracking-[1.5px] lg:h-20 lg:w-20",
                  t.name === technology.name
                    ? "bg-white text-black"
                    : "border-white/25 text-white"
                )}
                key={idx}
                onClick={() => setTechnology(technologies[idx])}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div className="space-y-4 text-center lg:w-[470px] lg:text-start">
            <div className="">
              <h3 className="text-sm font-normal text-primary md:text-base">
                THE TERMINOLOGY…
              </h3>
              <h4 className="mt-[9px] font-bellefair text-2xl text-[40px] font-normal uppercase leading-7 text-white md:mt-4 md:text-[40px] md:leading-[45.84px]">
                {technology.name}
              </h4>
            </div>
            <p
              className="px-6 font-barlow text-[15px] font-normal leading-[25px] text-primary md:mx-auto md:w-[458px] md:px-0 md:text-base md:leading-7 md:tracking-normal
            "
            >
              {technology.description}
            </p>
          </div>
        </div>
      </section>
    </LayoutDefault>
  );
}
