import { Routes, Route } from "react-router-dom";
import Testinomial from "./Testinomial";
import Service from "./Service";
import Contact from "./Contact";
import BookAppointment from "./BookAppointment";
import Massage from "./Massage";
import ServiceHome from "./ServiceHome";
import Medicure from "./Medicure";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/Service" element={<Service />}/> */}
      <Route path="/contact" element={<Contact/>} />
      <Route path="/testinomial" element={<Testinomial />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/massage" element={<Massage />} />
      <Route path="/serhome" element={<ServiceHome/>}/>
      <Route path="/medicure" element={<Medicure/>}/>

       <Route path="/Service" element={<Service />}>
        {/* <Route path="/Service/massage" element={<Massage />} /> */}
       </Route>
    </Routes>
  );
};

export default Router;
