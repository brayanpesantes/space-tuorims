import clsx from "clsx";

type Props = {
  title: string;
  count: string;
  className?: string;
};

export default function Title({ count, title, className }: Props) {
  return (
    <h2
      className={clsx(
        className,
        "text-center font-barlow-Condensed text-base uppercase text-white md:text-start md:text-xl md:leading-6 md:tracking-[3.38px] lg:text-[28px] lg:leading-[33.6px] lg:tracking-[4.725px]"
      )}
    >
      <span className="mr-4 font-bold opacity-25">{count}</span> {title}
    </h2>
  );
}
