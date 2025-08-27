import React from 'react'
import massage from '../assets/massage.jpg'
import medi from '../assets/nailing.jpg'
import wax from '../assets/waxing.jpg'
import makeup from '../assets/makeup.png'
import hair from '../assets/haircut.jpg'
const Service = () => {
    
    const Services = [
  { name: "Massage", img: massage,  },
  { name: "Haircut", img: hair,  },
  { name: "Makeup", img: makeup, },
  { name: "Waxing", img: wax,  },
  { name: "Medicure", img: medi,  }
];

    
 return (
    <div className="bg-emerald-100 min-h-screen py-1 px-4 sm:px-8">
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-[#333] mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
        {Services.map((item, index) => (
          <div
            key={index}
            className="w-80 sm:w-96 bg-white border border-gray-200 rounded-xl shadow-lg
            transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover rounded-t-xl"
            />
             <Link to={`/Service/${item.path}`} 
               className="block ">
             <h2 className="text-xl font-semibold text-center py-4 text-[#444]">{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service