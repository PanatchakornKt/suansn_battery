import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen w-full bg-white font-prompt">
          <NavBar />
          <div className='my-6'>
              {children}
          </div>
          <Footer />
      </div>
    </>
  );
};

export default MainLayout;
