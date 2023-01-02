import { clsx } from "clsx";
import { ReactElement } from "react";
import Header from "../components/Header";
type Props = {
  children: ReactElement[] | ReactElement;
  bg?: string;
};

export default function LayoutDefault({ children, bg }: Props) {
  return (
    <div className={clsx("min-h-screen bg-cover bg-center bg-no-repeat", bg)}>
      <Header />
      {children}
    </div>
  );
}
