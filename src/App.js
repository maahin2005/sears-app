import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import PublicRoutes from "./Routing/PublicRoutes";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  const [isArrow, setIsArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsArrow(true);
      } else {
        setIsArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App bg-white">
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <Navbar />
      )}
      <PublicRoutes />
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <Footer />
      )}
      {isArrow && (
        <div
          onClick={handleClickScroll}
          className="transition-all cursor-pointer fixed right-10 bottom-10 md:right-20 md:bottom-20 w-14 h-14 flex justify-center items-center rounded-full text-xl bg-midiumBlue text-white"
        >
          <i class="fa-solid fa-angles-up"></i>
        </div>
      )}
    </div>
  );
}

export default App;
