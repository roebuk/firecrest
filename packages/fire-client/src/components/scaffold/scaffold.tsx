import { FC, PropsWithChildren } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Scaffold: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
