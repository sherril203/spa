import React from 'react';
import { Link } from 'react-router-dom';
import hair from '../../assets/haircut.jpg';
import Nav from '../Nav'
import Footer from '../Footer'

const Haircut = () => {
  const service = {
    name: "Haircut Services",
    image: hair,
    basePrice: 300,
    duration: "30–60 minutes",
    description:
      "Get the perfect look with our professional haircut services for men, women, and children. Our experienced stylists provide customized cuts to suit your face shape, hair type, and style preferences.",
    packages: [
      { title: "Basic Trim", price: 300, details: "Quick ends trimming and shaping" },
      { title: "Layered Cut", price: 600, details: "Multi-length layers for added volume" },
      { title: "Style & Blow Dry", price: 900, details: "Professional styling with blow-dry finish" },
    ],
    addons: [
      { title: "Hair Wash", price: 150 },
      { title: "Scalp Massage", price: 200 },
      { title: "Fringe/Bangs Cut", price: 100 },
    ],
  };

  return (
    <div className="min-h-screen bg-[#7EDC90] text-[#333]">
      <Nav/>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Sticky Image */}
        <div className="lg:w-1/2 w-full h-96 lg:h-screen sticky top-0 z-10">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 w-full px-6 py-10 space-y-8">
          <h1 className="text-4xl font-extrabold text-center lg:text-left">{service.name}</h1>

          <div className="space-y-6 bg-white p-6 rounded-lg shadow">
            <p className="text-lg">{service.description}</p>
            <p className="text-lg font-semibold">Estimated Duration: {service.duration}</p>
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

export default Haircut;
