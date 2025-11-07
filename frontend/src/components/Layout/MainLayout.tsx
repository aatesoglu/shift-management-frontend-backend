import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="mt-16 p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
