import { Route,Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BeritaPage from "./pages/BeritaPage";
import CeritaPage from "./pages/CeritaPage";
import EdukasiPage from "./pages/EdukasiPage";
import EventPage from "./pages/EventPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/berita" element={<BeritaPage/>}/>
        <Route path="/cerita" element={<CeritaPage/>}/>
        <Route path="/edukasi" element={<EdukasiPage/>}/>
        <Route path="/event" element={<EventPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes>
    </>
  );
}

export default App;
