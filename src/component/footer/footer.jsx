import React from 'react';
import footerLogo from "../../assets/img/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-color5 py-4">
      <div className="flex justify-between items-center mx-auto px-4 md:px-8 max-w-7xl">

        {/* Logo perusahaan dan teks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={footerLogo}
              className="w-16 hover:scale-110 transition-all duration-100"
              alt="Safe Space Squad"
            />
            <span className="font-jakarta font-bold ml-2 text-white">Safe Space Squad</span>
          </div>
        </div>

        {/* Logo sosial media */}
        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faInstagram} className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 " />
          <FontAwesomeIcon icon={faTwitter} className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 " />
          <FontAwesomeIcon icon={faFacebook} className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
