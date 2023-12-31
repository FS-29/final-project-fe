import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BeritaPage from "./pages/BeritaPage";
import CeritaPage from "./pages/CeritaPage";
import EdukasiPage from "./pages/EdukasiPage";
import EventPage from "./pages/EventPage";
import DashboardPage from "./pages/DashboardPage";
import Header from "./component/header/header";
import LaporanPage from "./pages/LaporanPage";
import Footer from "./component/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isLoginReducer } from "./redux/reducers/auth-reducers";
import FloatingBtn from "./component/floatingbtn/FloatingBtn";

function App() {
  const { isLogin } = useSelector((state) => state.authUser);
  const dispatch =useDispatch()
  useEffect(()=>{
    const token = localStorage.getItem('token')
    // console.log(token);

    if (token!=null) {
      dispatch(isLoginReducer())
    }
  },[])
  return (
    <>
      <Routes>
        <Route path="*" element={<HeaderAndRoutes />}></Route>
        <Route
          path="/login"
          element={isLogin ? <HeaderAndRoutes /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isLogin ? <HeaderAndRoutes /> : <RegisterPage />}
        />
        <Route
          path="/dashboard"
          element={isLogin ? <Dashboard /> : <LoginPage />}
        />
        <Route
          path="/laporan"
          element={isLogin ? <Laporan /> : <LoginPage />}
        />
      </Routes>
    </>
  );
}

function HeaderAndRoutes() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/cerita" element={<CeritaPage />} />
        <Route path="/edukasi" element={<EdukasiPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
      <FloatingBtn></FloatingBtn>
      <Footer></Footer>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <Header></Header>
      <DashboardPage></DashboardPage>
      <Footer></Footer>
    </>
  );
}

function Laporan() {
  return (
    <>
      <Header></Header>
      <LaporanPage></LaporanPage>
      <Footer></Footer>
    </>
  );
}

export default App;
