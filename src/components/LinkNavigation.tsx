import { clsx } from "clsx";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { LinksNavigation } from "../types/links";
type Props = {
  className?: string;
  children?: React.ReactElement;
} & LinksNavigation;

const ACTIVE_CLASS =
  "before:content[' '] before:absolute  before:-bottom-8 before:h-[3px] before:w-full before:bg-white";
const ACTIVE_CLASS_HOVER =
  "hover:before:content[' '] hover:before:absolute  hover:before:-bottom-8 hover:before:h-[3px] hover:before:w-full hover:before:bg-white";
export default function LinkNavigation({
  children,
  className,
  to,
  label,
  id,
}: Props) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={clsx([
        " duration-50 relative font-barlow-Condensed text-xs text-base font-normal uppercase leading-[19.2px]  text-white transition delay-75 before:transition-all before:ease-in-out md:text-sm lg:text-lg lg:tracking-[2.7px]",
        className,
        ACTIVE_CLASS_HOVER,
        match ? ACTIVE_CLASS : "",
      ])}
    >
      {children} {label}
    </Link>
  );
}
