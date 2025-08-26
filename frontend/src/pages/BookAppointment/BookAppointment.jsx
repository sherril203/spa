import React, { useState, useEffect } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [data, setData] = useState([]);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    mobile_no: "",
    gender:"",
    Service:"",
    Appointment_date: "",
  });

  // POST API
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form Data:", formdata);

  try {
    const response = await axios.post("http://localhost:4050/postAppointment", formdata);

    console.log("POST response:", response.data);
    alert("Appointment is booked for you ");

    setData((prev) => (Array.isArray(prev) ? [...prev, formdata] : [formdata]));

    // reset form
    setformdata({
      name: "",
      email: "",
      mobile_no: "",
      gender:"",
      Service:"",
      Appointment_date: "",
    });

    // or fetch fresh data from backend if needed
    getAppointment();
  } catch (error) {
    console.error("Error in post api:", error.message);
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // GET API
  const getAppointment = async () => {
    try {
      const response = await axios.get("http://localhost:4050/showAppointments"); 
      setData(response.data.data);
    } catch (error) {
      console.log("Error in get api", error.message);
    }
  };

  useEffect(() => {
    getAppointment();
  }, []);

  return (
      <div className="bg-emerald-200 min-h-screen flex flex-col justify-center items-center px-4 py-10">
      <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-center font-bold text-3xl text-[#333] mb-6">
          Book Your Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-lg mb-1 text-[#444]">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formdata.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-1 text-[#444]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formdata.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-1 text-[#444]">Mobile No</label>
            <input
              type="tel"
              name="mobile_no"
              pattern="[0-9]{10}"
              placeholder="Enter your mobile number"
              value={formdata.mobile_no}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-1 text-[#444]">Gender</label>
            <select
              name="gender"
              value={formdata.gender}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded bg-white"
              required
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-lg mb-1 text-[#444]">Select Service</label>
            <select
              name="Service"
              value={formdata.Service}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded bg-white"
              required
            >
              <option value="">Select your service</option>
              <option value="Haircut">Haircut</option>
              <option value="Waxing">Waxing</option>
              <option value="Massage">Massage</option>
              <option value="Make up">Make up</option>
            </select>
          </div>

          <div>
            <label className="block text-lg mb-1 text-[#444]">Appointment Date</label>
            <input
              type="date"
              name="Appointment_date"
              value={formdata.Appointment_date}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition-colors text-white w-full p-3 rounded text-xl shadow"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
