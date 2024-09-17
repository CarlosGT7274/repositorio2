import React from "react";
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => (
  <div className="">
    <Header />
    <main className=" container mx-auto w-full lg:max-w-screen-md pt-14 px-4 pb-8 ">
      {children}
      <Footer/>
    </main>
  </div>
);

export default Layout;
