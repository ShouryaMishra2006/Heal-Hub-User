import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { backendUrl } = useContext(AppContext);

//   useEffect(() => {
//   let isMounted = true;

//   const checkAuth = async () => {
//     const token = localStorage.getItem("token");

//     if (!token && isMounted) {
//       alert("Please login.");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await fetch(`${backendUrl}/api/user/verify`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();

//       if (isMounted) {
//         if (response.status === 401 || data.message?.toLowerCase().includes("expired")) {
//           alert("Session expired. Please login again.");
//           localStorage.removeItem("token");
//           navigate("/login");
//         } else if (!data.success) {
//           alert(data.message || "Unauthorized access.");
//           localStorage.removeItem("token");
//           navigate("/login");
//         } else {
//           console.log("✅ User authenticated");
//         }
//       }
//     } catch (error) {
//       if (isMounted) {
//         console.error("Auth check failed:", error);
//         localStorage.removeItem("token");
//         navigate("/login");
//       }
//     }
//   };

//   checkAuth();

//   return () => {
//     isMounted = false; 
//   };
// }, [navigate, backendUrl]);


  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
