import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import map from "../assets/map.jpg";
import { FaTwitter } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import Nav from '../common/Nav'
import Footer from '../common/Footer'


const Contact = () => {
  return (
    <div>
      <Nav/>
    <div className="bg-[#7EDC90] p-6 ">
       
      <h2 className="text-center font-bold text-3xl md:text-4xl text-emerald-800 mb-10">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact & Social */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-emerald-100">
            <h2 className="flex items-center text-lg md:text-xl mb-4 text-gray-700">
              <IoIosMailUnread className="mr-2 text-emerald-600" size={23} />
              Email: <span className="ml-2 font-semibold">ABC@gmail.com</span>
            </h2>
            <h2 className="flex items-center text-lg md:text-xl mb-4 text-gray-700">
              <FaPhoneAlt className="mr-2 text-emerald-600" size={22} />
              Mobile: <span className="ml-2 font-semibold">9456753469</span>
            </h2>
            <h2 className="flex items-center text-lg md:text-xl text-gray-700">
              <FaLocationDot className="mr-2 text-emerald-600" size={22} />
              <span>Chennai, Egmore</span>
            </h2>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-emerald-100">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
              Follow Us
            </h2>
            <div className="flex gap-6 text-gray-500">
              <FaInstagram
                size={35}
                className="cursor-pointer hover:text-pink-500 transition-colors"
              />
              <FaFacebook
                size={35}
                className="cursor-pointer hover:text-blue-600 transition-colors"
              />
              <FaTwitter
              size={35}
                className="cursor-pointer hover:text-cyan-400 transition-colors" />
              <ImYoutube
              size={35}
                className="cursor-pointer hover:text-red-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-emerald-100">
          <img
            src={map}
            alt="location map"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
   
     <Footer/>
    </div>
  );
 
};

export default Contact;
