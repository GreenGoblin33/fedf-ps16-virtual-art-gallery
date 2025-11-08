import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardArtist from "./pages/DashboardArtist";
import DashboardVisitor from "./pages/DashboardVisitor";
import DashboardCurator from "./pages/DashboardCurator";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/artist" element={<DashboardArtist />} />
        <Route path="/visitor" element={<DashboardVisitor />} />
        <Route path="/curator" element={<DashboardCurator />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
