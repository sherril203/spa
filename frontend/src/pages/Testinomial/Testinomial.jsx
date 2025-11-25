import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Testinomial = () => {
  const [data, setData] = useState([]);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    queries: "",
  });
 const BACKEND_API=import.meta.env.BACKEND_API
  // POST API
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formdata);

    try {
      const response = await axios.post(`${BACKEND_API}/postquery`, formdata);
      toast.success("Your feedback has been submitted");

      const newItem = response.data.data || response.data;
      setData((prev) => (Array.isArray(prev) ? [...prev, newItem] : [newItem]));

      setformdata({
        name: "",
        email: "",
        queries: "",
      });

      getFeedback();
    } catch (error) {
      console.error("Error in post api:", error.response?.data || error.message);
    }
  };

  // GET API
  const getFeedback = async () => {
    try {
      const response = await axios.get(`${BACKEND_API}/showquery`);
      setData(response.data.data || []);
    } catch (error) {
      console.log("Error in get api", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <div className="bg-emerald-200 min-h-screen flex flex-col justify-center items-center px-4 py-10">
      <ToastContainer/>
      <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-center font-bold text-3xl text-emerald-800 mb-6">
          Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-lg text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formdata.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formdata.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-gray-700 mb-1">feedback</label>
            <textarea
              name="feedback"
              rows="4"
              placeholder="Enter your queries or complaints"
              value={formdata.feedback}
              onChange={handleChange}
              className="p-3 border border-gray-300 w-full rounded resize-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-xl p-3 w-full rounded shadow transition-all"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
};

export default Testinomial;
