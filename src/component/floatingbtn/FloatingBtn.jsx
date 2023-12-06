import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import LaporanIcon from "../../assets/svg/LaporanIcon";
import PesanIcon from "../../assets/svg/PesanIcon";

function FloatingBtn({isBottom}) {
  return (
    <div className={`fixed ${isBottom?'bottom-10':'bottom-5'} right-5 z-40`}>
      <div className="flex gap-4">
        <NavLink to="/laporan">
          <button
            className="group bg-color5 border-solid border-color6 border-4 rounded-full shadow-lg 
                    hover:scale-110 hover:bg-slate-500 hover:border-slate-300 active:bg-color6 active:border-color6 active:shadow-none focus:bg-color5 focus:border-color6"
          >
            <LaporanIcon
              styleSVG={
                "fill-color6 group-hover:fill-slate-300 group-active:fill-color5"
              }
            ></LaporanIcon>
          </button>
        </NavLink>

        <NavLink to="/dashboard">
          <button
            className="group bg-color6 border-solid border-color6 border-4 rounded-full shadow-lg 
                    hover:scale-110 hover:bg-slate-300 hover:border-slate-300 active:bg-color5 active:border-color6 active:shadow-none focus:bg-color6 focus:border-color6"
          >
            <PesanIcon
              styleSVG={
                "fill-color5 group-hover:fill-slate-500 group-active:fill-color6"
              }
            ></PesanIcon>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default FloatingBtn;
