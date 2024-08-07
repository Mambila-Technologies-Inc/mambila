import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
