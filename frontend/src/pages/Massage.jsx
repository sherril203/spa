import React from 'react';
import { Link } from 'react-router-dom';
import massage from '../assets/massage.jpg';

const Massage = () => {
  const service = {
    name: "Relaxing Full Body Massage",
    image: massage,
    basePrice: 1000,
    duration: "60 minutes",
    description:
      "A rejuvenating massage experience designed to relieve stress, improve circulation, and relax your body using essential oils and soft tissue techniques.",
    packages: [
      { title: "30-minute Express Massage", price: 600 },
      { title: "60-minute Full Body Massage", price: 1000 },
      { title: "90-minute Deep Relaxation Massage", price: 1400 },
    ],
    addons: [
      { title: "Aromatherapy Oils", price: 200 },
      { title: "Hot Stone Therapy", price: 300 },
      { title: "Scalp Massage", price: 150 },
    ],
  };

  return (
    <div className="bg-emerald-100 min-h-screen px-6 py-10 text-[#333]">
      <h1 className="text-4xl font-extrabold mb-6 text-center">{service.name}</h1>

      <div className="flex flex-col gap-8 items-center justify-center max-w-4xl mx-auto">
        <img
          src={service.image}
          alt={service.name}
          className="w-full max-w-xl object-cover rounded"
        />

        <div className="w-full space-y-6 px-4 sm:px-0 ">
          <div className='bg-white p-4'>
            <p className="text-lg">{service.description}</p>
          <p className="text-lg font-semibold">Standard Duration: {service.duration}</p>
          <p className="text-xl font-bold text-green-700">Base Price: ₹{service.basePrice}</p>
          </div>
          

          <div className='bg-white p-3'>
            <h2 className="text-2xl font-semibold mb-2">Available Packages</h2>
            <ul className="list-disc list-inside space-y-2">
              {service.packages.map((pkg, index) => (
                <li key={index} className="text-md">
                  {pkg.title} — <span className="font-semibold text-green-800">₹{pkg.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='bg-white p-5'>
            <h2 className="text-2xl font-semibold mb-2">Optional Add-ons</h2>
            <ul className="list-disc list-inside space-y-2">
              {service.addons.map((addon, index) => (
                <li key={index} className="text-md">
                  {addon.title} — <span className="font-semibold text-green-800">₹{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/book-appointment">
            <button className=" flex justify-center items-center bg-amber-500 hover:bg-amber-600 transition text-white px-6 py-3 rounded w-full max-w-xs mx-auto mt-6">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Massage;
