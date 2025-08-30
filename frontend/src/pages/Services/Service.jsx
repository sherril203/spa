
import React from 'react'
import massage from '../../assets/massage.jpg'
import medi from '../../assets/nailing.jpg'
import wax from '../../assets/waxing.jpg'
import makeup from '../../assets/makeup.png'
import hair from '../../assets/haircut.jpg'
import Nav from '../Nav'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Service = () => {
  const Services = [
    { name: "Massage", img: massage, path: "massage" },
    { name: "Haircut", img: hair, path: "haircut" },
    { name: "Makeup", img: makeup, path: "makeup" },
    { name: "Waxing", img: wax, path: "waxing" },
    { name: "Manicure", img: medi, path: "manicure" }
  ];

  return (
    <div className='bg-[#7EDC90] '>
      <Nav />
      <div className="p-7">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-[#333] mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {Services.map((item, index) => (
            <div
              key={index}
              className="w-80 sm:w-96 bg-white border border-gray-200 rounded-xl shadow-lg
                transform hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <img
                src={item.img}
                alt={`${item.name} service`}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <Link to={`/${item.path}`} className="block">
                <h2 className="text-xl font-semibold text-center py-4 text-[#444]">
                  {item.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service
