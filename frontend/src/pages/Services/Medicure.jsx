import React from 'react';
import { Link } from 'react-router-dom';
import medi from '../../assets/nailing.jpg';
import Nav from '../../common/Nav'
import Footer from '../../common/Footer'
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
    <div className="min-h-screen bg-[#7EDC90] text-[#333]">
      <Nav/>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Fixed Image */}
        <div className="lg:w-1/2 w-full h-96 lg:h-screen sticky top-0 z-10">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Scrollable Info */}
        <div className="lg:w-1/2 w-full px-6 py-10 space-y-8">
          <h1 className="text-4xl font-extrabold text-center lg:text-left">{service.name}</h1>

          <div className="space-y-6 bg-white p-6 rounded-lg shadow">
            <p className="text-lg">{service.description}</p>
            <p className="text-lg font-semibold">Standard Duration: {service.duration}</p>
            <p className="text-xl font-bold text-green-700">Base Price: ₹{service.basePrice}</p>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Available Packages</h2>
              <ul className="list-disc list-inside space-y-2">
                {service.packages.map((pkg, index) => (
                  <li key={index} className="text-md">
                    <span className="font-semibold">{pkg.title}</span> — ₹{pkg.price}
                    <p className="text-sm text-gray-600 ml-4">{pkg.details}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
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
              <button className="bg-amber-500 hover:bg-amber-600 transition text-white px-6 py-3 rounded w-full max-w-xs mx-auto block mt-4">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Medicure;
