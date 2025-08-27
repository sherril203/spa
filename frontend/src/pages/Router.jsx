import { Routes, Route } from "react-router-dom";
import Testinomial from "./Testinomial";
import Service from "./Service";
import Contact from "./Contact";
import BookAppointment from "./BookAppointment";
import Massage from "./Massage";
import ServiceHome from "./ServiceHome";
import Medicure from "./Medicure";
import Makeup from "./Makeup";
import Waxing from "./Waxing";
import Haircut from "./Haircut";

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
       <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/waxing" element={<Waxing/>}/>
        <Route path="/haircut" element={<Haircut/>}/>

       <Route path="/Service" element={<Service />}>
        {/* <Route path="/Service/massage" element={<Massage />} /> */}
       </Route>
    </Routes>
  );
};

export default Router;
