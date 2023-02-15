import { Routes, Route } from "react-router-dom";
import Faq from "./pages/faq/faq";
import MainSection from "./pages/home/MainSection";
import Waitlist from "./pages/waitlist/Waitlist";

function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<MainSection />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>
    </>

  );
}

export default App;
