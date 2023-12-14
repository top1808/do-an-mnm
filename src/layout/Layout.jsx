/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="p-4" style={{ minHeight: "calc(100vh - 120px)"}}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
