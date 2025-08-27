import React from 'react';
import { Link } from 'react-router-dom';
import medi from '../assets/nailing.jpg';

const Medicure = () => {
  const service = {
    name: "Medicure",
    image: medi,
    basePrice: 800,
    duration: "45 minutes",
    description:
      "Pamper your hands and feet with our professional medicure treatments. Our service includes nail shaping, cuticle care, exfoliation, moisturizing, and polishing to leave your nails healthy, clean, and beautiful.",
    packages: [
      { title: "Basic Medicure", price: 500, details: "Nail shaping and cuticle care" },
      { title: "Standard Medicure", price: 800, details: "Basic medicure + exfoliation and moisturizing" },
      { title: "Deluxe Medicure", price: 1200, details: "Standard medicure + polish and hand massage" },
    ],
    addons: [
      { title: "Gel Polish", price: 400 },
      { title: "Paraffin Wax Treatment", price: 350 },
      { title: "Nail Art", price: 200 },
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
          <div className='bg-white p-4 rounded shadow'>
            <p className="text-lg">{service.description}</p>
            <p className="text-lg font-semibold mt-3">Standard Duration: {service.duration}</p>
            <p className="text-xl font-bold text-green-700">Base Price: ₹{service.basePrice}</p>
          </div>

          <div className='bg-white p-5 rounded shadow'>
            <h2 className="text-2xl font-semibold mb-4">Available Packages</h2>
            <ul className="list-disc list-inside space-y-3">
              {service.packages.map((pkg, index) => (
                <li key={index} className="text-md">
                  <span className="font-semibold">{pkg.title}</span> — ₹{pkg.price}
                  <p className="text-sm text-gray-600 ml-5">{pkg.details}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className='bg-white p-5 rounded shadow'>
            <h2 className="text-2xl font-semibold mb-4">Optional Add-ons</h2>
            <ul className="list-disc list-inside space-y-3">
              {service.addons.map((addon, index) => (
                <li key={index} className="text-md">
                  {addon.title} — <span className="font-semibold text-green-800">₹{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/book-appointment">
            <button className="flex justify-center items-center bg-amber-500 hover:bg-amber-600 transition text-white px-6 py-3 rounded w-full max-w-xs mx-auto mt-6">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Medicure;
