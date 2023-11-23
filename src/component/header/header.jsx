import headerLogo from "../../assets/img/Logo.png";
import dummys from "../../assets/img/dummys.jpg";
import Subcomp from "./Subcomp";
import LoginLogo from "../../assets/svg/LoginLogo";
import { useState } from "react";
import { useEffect } from "react";
import FloatingProfil from "./FloatingProfil";
import { NavLink } from "react-router-dom";

function Header() {
  const [isTop, setIsTop] = useState(true);
  const [prevSPos, setPrevSPos] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);
  const [floating, setFloating] = useState(false);
  const isLogin = SVGComponentTransferFunctionElement;
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollUp(prevSPos > scrollPos);
      setIsTop(scrollPos === 0);
      if (scrollUp || !isLogin) {
        setFloating(false);
      }
      setPrevSPos(scrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevSPos, isTop]);

  return (
    <header
      id="header"
      className={`w-full  ${
        isTop ? "top-0 relative " : scrollUp ? "top-0 fixed" : "-top-full fixed"
      }  transition-all duration-500 ease-in-out z-50`}
    >
      <nav className="flex z-50 relative items-center bg-white shadow-lg justify-between px-24 py-3">
        <div className="flex items-center gap-10">
          <NavLink to="/edukasi" className={({ isActive }) => isActive && ""}>
            <Subcomp key={1} text={"Edukasi"}></Subcomp>
          </NavLink>
          <NavLink to="/cerita" className={({ isActive }) => isActive && ""}>
            <Subcomp key={2} text={"Cerita Kami"}></Subcomp>
          </NavLink>
        </div>
        <NavLink to="/" className={({ isActive }) => isActive && ""}>
          <img
            src={headerLogo}
            className="w-16 hover:scale-110 transition-all duration-100"
            alt="Safe Space Squad"
          />
        </NavLink>
        <div className="flex items-center gap-10">
          <NavLink to="/event" className={({ isActive }) => isActive && ""}>
            <Subcomp key={3} text={"Event"}></Subcomp>
          </NavLink>
          <NavLink to="/berita" className={({ isActive }) => isActive && ""}>
            <Subcomp key={4} text={"Berita"}></Subcomp>
          </NavLink>

          {isLogin ? (
            <img
              src={dummys}
              alt=""
              className="w-10 rounded-full cursor-pointer hover:scale-110 transition-all duration-100"
              onClick={() => setFloating(!floating)}
            />
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive && ""}>
              <div className="flex items-center gap-4 hover:scale-110 transition-all duration-100">
                <Subcomp key={5} text={"Masuk"}></Subcomp>
                <LoginLogo styleSVG={"fill-black"}></LoginLogo>
              </div>
            </NavLink>
          )}
        </div>
      </nav>
      <div
        className={`absolute ${floating ? "w-screen h-screen" : ""}`}
        onClick={() => setFloating(false)}
      ></div>
      <div
        className={`absolute z-10 right-0 ${
          floating ? "top-20" : "-top-96"
        } transition-all duration-300 pr-8 pt-3`}
      >
        <FloatingProfil img={dummys}></FloatingProfil>
      </div>
    </header>
  );
}

export default Header;
