import { clsx } from "clsx";
import { useState } from "react";
import data from "../../data.json";
import Title from "../components/Title";
import LayoutDefault from "../layouts/LayoutDefault";
import { IDestination } from "../types/destination";

const BG_IMAGE =
  "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop";

export default function Destination() {
  const [destinations, setDestinations] = useState<IDestination[]>(
    data.destinations
  );
  const [destination, setDestination] = useState<IDestination>(destinations[0]);
  return (
    <LayoutDefault bg={BG_IMAGE}>
      <section>
        <Title
          count="01"
          title="Pick
          your destination"
          className="md:p-[38.5px] lg:mt-20"
        />

        <div className="flex flex-col p-6 pb-1 md:mt-10 md:pb-20 lg:flex-row lg:justify-center lg:gap-[157px]">
          <div className="">
            <img
              src={destination.images.webp}
              alt={destination.name}
              className="mx-auto block h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px]"
            />
          </div>
          <div>
            <div className="mt-[26px] md:mt-[53px] lg:flex lg:flex-col lg:items-start">
              <div className="mx-auto flex h-7 w-[237.5px] items-start justify-between md:w-[285.5px] lg:mx-0">
                {destinations.map(({ name }, idx) => (
                  <button
                    className={clsx(
                      "relative font-barlow-Condensed text-sm font-normal uppercase text-primary md:text-xl lg:text-base",
                      name === destination.name &&
                        "before:content[' '] transition-all duration-300 before:absolute before:-bottom-2 before:h-[3px] before:w-full before:bg-white"
                    )}
                    key={idx}
                    onClick={() => setDestination(destinations[idx])}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <h3 className="mt-5 text-center font-bellefair text-56px font-normal uppercase text-white md:mt-8 md:text-[80px] md:leading-[91.68px] lg:text-start lg:text-100px">
                {destination.name}
              </h3>
              <p className="text-center font-barlow text-[15px] font-normal leading-[25px] text-primary md:mx-auto md:mt-2 md:w-[573px] lg:mx-0 lg:w-[444px] lg:text-start lg:text-[18px] lg:leading-8">
                {destination.description}
              </p>
            </div>
            <div className="mt-4 space-y-8 border-t border-t-[#383B4B] md:mx-auto md:grid md:w-[573px] md:grid-cols-2 lg:mt-[54px] lg:w-[444px]">
              <div className="mx-auto mt-8 w-[223px] space-y-3 lg:mx-0 ">
                <p className="text-center font-barlow-Condensed text-sm uppercase text-primary lg:text-start">
                  avg. Distance
                </p>
                <h4 className="text-center  font-bellefair text-28px font-normal uppercase text-white lg:text-start">
                  {destination.distance}
                </h4>
              </div>
              <div className="mx-auto mt-8 w-[223px] space-y-3 lg:mx-0">
                <p className="text-center font-barlow-Condensed text-sm uppercase text-primary lg:text-start">
                  Est. travel time
                </p>
                <h4 className="text-center font-bellefair text-28px font-normal uppercase text-white lg:text-start">
                  {destination.travel}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutDefault>
  );
}
