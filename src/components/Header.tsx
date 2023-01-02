import { nanoid } from "nanoid";
import { MutableRefObject, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Transition } from "react-transition-group";
import { LinksNavigation } from "../types/links";
import LinkNavigation from "./LinkNavigation";
import Logo from "./Logo";

const LINKS_NAVIGATION: LinksNavigation[] = [
  { id: nanoid(), to: "/", label: "Home" },
  { id: nanoid(), to: "/destination", label: "Destination" },
  { id: nanoid(), to: "/crew", label: "Crew" },
  { id: nanoid(), to: "/technology", label: "Technology" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="relative flex justify-end px-6 md:px-0">
        <header className="inline-flex h-20 w-full items-center justify-between md:h-24  md:w-[calc(100%-39px)] lg:mt-10 lg:w-[calc(100%-55px)]">
          <Logo />
          <div className="absolute left-[167px] z-10 hidden h-px w-[400px] bg-primary opacity-25 lg:block"></div>
          <nav
            className="hidden h-full bg-white/[0.04] text-center backdrop-blur-[40.7742px]
         md:flex md:w-[450px] lg:w-2/3"
          >
            <ul className="inline-flex h-full w-full items-center text-white md:gap-[37px] md:pl-12  lg:gap-12 lg:pl-[123px]">
              {LINKS_NAVIGATION.map(({ id, to, label }, idx) => (
                <LinkNavigation to={to} key={id} label={label} id={id}>
                  <span className="hidden lg:inline-block">0{idx}</span>
                </LinkNavigation>
              ))}
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <AiOutlineMenu className="h-6 w-6 text-white" />
          </button>
        </header>
      </div>
      <MenuMobile setIsOpen={setIsOpen} open={isOpen} />
    </>
  );
}

const DURATION_TIME = 300;

const defaultStyle = {
  transition: `opacity ${DURATION_TIME}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function MenuMobile({ setIsOpen, open }: any) {
  const nodeRef: MutableRefObject<null> = useRef(null);
  return (
    <Transition
      nodeRef={nodeRef}
      in={open}
      timeout={DURATION_TIME}
      unmountOnExit
    >
      {(status) => (
        <nav
          className="absolute top-0 right-0 z-50 flex h-screen w-[60%] flex-col gap-16 bg-white/[0.04] backdrop-blur-[40.7742px] md:hidden"
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[status],
          }}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="mt-8 px-8"
              onClick={() => setIsOpen(false)}
              title="open menu"
            >
              <IoClose className="h-5 w-5 text-white" />
            </button>
          </div>

          <ul className="flex  flex-col gap-8 p-8 ">
            {LINKS_NAVIGATION.map(({ id, to, label }, index) => (
              <LinkNavigation to={to} key={id} label={label} id={id}>
                <>0{index}</>
              </LinkNavigation>
            ))}
          </ul>
        </nav>
      )}
    </Transition>
  );
}
