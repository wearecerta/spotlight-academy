import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <SmoothScroll>
        <LoadingScreen />
        <NavBar />

        {children}
        <Footer/>
      </SmoothScroll>
    </main>
  );
};

export default Layout;
