import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav"; // নিশ্চিত হও যে Path ঠিক আছে
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav /> {/* সব পেজে Navbar থাকবে */}
      <Outlet /> {/* এখানে প্রতিটি পেজ ডাইনামিকভাবে লোড হবে */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
