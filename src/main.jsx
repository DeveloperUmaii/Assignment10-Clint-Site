import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Main from "./Main.jsx";
import Home from "./Component/Home.jsx";
import AlltouristSpot from "./Pages/AlltouristSpot.jsx";
import AddtouristSpot from "./Pages/AddtouristSpot.jsx";
import MyList from "./Pages/MyList.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Register from "./Pages/Register.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, // Main.jsx এখন Parent Layout
    children: [
      { index: true,
        element: <Home />,
        loader : () => fetch('http://localhost:5000/spot')
      },
                    //একই কাজ করবে তবে এইটা দেওয়া অধিকতার উত্তম, সমস্যা হওয়ার সম্ভাবনা নেই
      //{ path: "/", element: <Home /> },
                    //সমস্যার হওয়ার সম্ভাবনা রয়েছে,, সমস্যা হতেও পারে নাও হতে পারে
      {
         path: "AlltouristSpot",
         element: <AlltouristSpot />,
         loader : () => fetch('http://localhost:5000/spot'),
      },
      { path: "AddtouristSpot", element: <AddtouristSpot /> },
      { path: "MyList",
        element: <MyList />,
        loader : () => fetch('http://localhost:5000/spot'),
      },
      { path: "LogIn", element: <LogIn /> },
      { path: "Register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
