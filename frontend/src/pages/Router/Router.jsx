import { Routes, Route } from "react-router-dom";
import Testimonial from "../Testinomial/Testinomial";
import BookAppointmentPage from "../BookAppointment/BookAppointmentPage";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/Service" element={<Service />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/book-appointment" element={<BookAppointmentPage />} />
    </Routes>
  );
};

export default Router;
