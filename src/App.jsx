import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/contact";

import MainSection from "./pages/home/MainSection";
import Waitlist from "./pages/waitlist/Waitlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/waitlist" element={<Waitlist />} />

        <Route path="/contact" element={<Contact />} />


      </Routes>
    </>
  );
}

export default App;
