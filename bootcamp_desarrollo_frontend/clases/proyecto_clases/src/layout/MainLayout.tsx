import { ReactNode } from "react";
import { Header } from "./components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <h1>Footer</h1>
    </div>
  );
};
