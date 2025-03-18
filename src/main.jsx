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
import SpotUpdate from "./MyTouristSpotCard/SpotUpdate.jsx";
import ErrorPage from "./Component/ErrorPage.jsx";
import AuthProvider from "./Pages/FirebaseConfig/AuthProvider.jsx";
import Details from "./Pages/Details.jsx";
import PrivateRout from "./PrivateRout/PrivateRout.jsx";
import CountriesSpeacialSpot from "./Component/CountriesSpeacialSpot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, // Main.jsx এখন Parent Layout
    errorElement:<ErrorPage></ErrorPage>,
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
      {
         path: "Details/:id",
         element: <PrivateRout>
                      <Details></Details>,
                  </PrivateRout>,
         loader : ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
      },
      {
        path: "AlltouristSpot/Details/:id",
        element: <PrivateRout>
                     <Details></Details>,
                 </PrivateRout>,
        loader : ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
      },
      { path: "AddtouristSpot",
        element: <AddtouristSpot /> },

      { path: "MyList",
        element: <PrivateRout>
                    <MyList />,
                 </PrivateRout>,
        loader : () => fetch('http://localhost:5000/spot'),
      },
      { path: "/MyList/SpotUpdate/:id",
        element: <PrivateRout>
                    <SpotUpdate></SpotUpdate>,
                  </PrivateRout>,
        loader : ({params}) => fetch(`http://localhost:5000/spot/${params.id}`),
      },
      { path: "LogIn", 
        element: <LogIn />, 

      },
      { path: "Register", 
        element: <Register />, 
      },
      {
        path: 'CountriesSpeacialSpot/:id',
        element: <CountriesSpeacialSpot />
      }      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </AuthProvider>
  </StrictMode>
);
