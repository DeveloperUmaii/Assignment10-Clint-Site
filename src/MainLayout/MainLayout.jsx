import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav"; // নিশ্চিত হও যে Path ঠিক আছে

const MainLayout = () => {
  return (
    <div>
      <Nav /> {/* সব পেজে Navbar থাকবে */}
      <Outlet /> {/* এখানে প্রতিটি পেজ ডাইনামিকভাবে লোড হবে */}
    </div>
  );
};

export default MainLayout;
