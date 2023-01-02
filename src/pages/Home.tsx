import { useNavigate } from "react-router-dom";
import LayoutDefault from "../layouts/LayoutDefault";

const BG_IMAGE = "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
export default function Home() {
  const navigation = useNavigate();
  return (
    <LayoutDefault bg={BG_IMAGE}>
      <section className="lg:mt-[10 0px] flex h-full flex-col gap-20 p-6 md:gap-[126px] md:p-[159px] lg:flex-row">
        <div className="space-y-4 md:w-[450px] md:space-y-6">
          <h2 className="text-center font-barlow text-base font-normal text-primary lg:text-start lg:text-28px">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h3 className=" text-center font-bellefair text-[80px] font-normal leading-[100px] text-white lg:text-start lg:text-150px">
            SPACE
          </h3>
          <p className="text-center font-barlow text-[15px] font-normal leading-6 tracking-normal text-primary md:w-[444px] md:text-base md:leading-7 lg:text-start lg:text-lg lg:leading-8 ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="grid place-content-center lg:w-full lg:place-content-end">
          <button
            className="first-line: roundend-h relative h-[150px] w-[150px] rounded-full bg-white font-bellefair text-[20px] md:h-[242px] md:w-[242px] md:text-32px lg:h-[274px] lg:w-[274px]"
            onClick={() => navigation("/destination")}
          >
            EXPLORE
          </button>
        </div>
      </section>
    </LayoutDefault>
  );
}
