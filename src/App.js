import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import PublicRoutes from "./Routing/PublicRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  const location = useLocation();

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
    </div>
  );
}

export default App;
