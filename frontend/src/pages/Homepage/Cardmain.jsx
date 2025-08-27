import React from "react";
import to from "../../assets/spa.jpg";
import jo from "../../assets/hair.jpg";
import lo from "../../assets/make.jpg";
import { Link } from "react-router-dom";

const Card2 = () => {
  const homePages = [
    {
      id: 1,
      title: "Body Massage",
      img: to,
    },
    {
      id: 2,
      title: "Hair cut",
      img: jo,
    },
    {
      id: 3,
      title: "Make up",
      img: lo,
    },
  ];

  return (
    <div className="bg-white py-10 px-6">
      {/* Services Heading */}
      <h1 className="text-2xl font-bold text-center mb-10 text-[#9D7C5B]">
        Our Services
      </h1>
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-400">
        Born from a love for natural beauty and inner peace, <br />
        our spa is a sanctuary designed to restore balance, <br />
        one personalized experience at a time.
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {homePages.map((page) => (
          <div
            key={page.id}
            className="bg-white shadow-md rounded-xl p-5 text-center border border-green-100 
                       hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={page.img}
              alt={page.title}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{page.title}</h3>
            <p className="text-gray-600 mb-4">{page.desc}</p>
          </div>
        ))}
      </div>

      {/* Common Button - for all cards */}
      <div className="text-center mt-8">
        
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium cursor-pointer 
                             hover:bg-white  hover:shadow-xl hover:scale-105 hover:text-green-600 duration-500 border-2 border-green-600 transition">
            <Link to="/Services">Explore More</Link>
          </button>
        
      </div>
    </div>
  );
};

export default Card2;
