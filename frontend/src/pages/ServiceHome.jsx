import React from 'react';
import massage from '../assets/massage.jpg';
import makeup from '../assets/makeup.png';
import hair from '../assets/haircut.jpg';
import { Link } from 'react-router-dom';

const ServiceHome = () => {
  const services = [
  { name: "Massage", img: massage, path: "massage" },
  { name: "Haircut", img: hair, path: "haircut" },
  { name: "Makeup", img: makeup, path: "makeup" },
];


  return (
    <div className="bg-emerald-100 min-h-screen py-1 px-4 sm:px-8">
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-[#333] mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {services.map((item, index) => (
          <div
            key={index}
            className="w-80 sm:w-96 bg-white border border-gray-200 rounded-xl shadow-lg
            transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={`${item.name} service`}
              className="w-full h-64 object-cover rounded-t-xl"
            />
           
              
               <Link to={`/${item.path}`} 
               className="block ">
             <h2 className="text-xl font-semibold text-center py-4 text-[#444]">{item.name}</h2>
            </Link>
          
          </div>
          
        ))}
      </div>
      <br />
      <div>
            <Link to="/Service" className='flex justify-center items-center'>
            <button className='bg-emerald-500 p-3 text-center rounded shadow text-3xl text-white'>See More </button>
            </Link>
          </div>
    </div>
  );
};

export default ServiceHome;
