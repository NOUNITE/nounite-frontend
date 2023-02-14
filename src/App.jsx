import { Routes, Route } from "react-router-dom";
import MainSection from "./components/home/MainSection";
import Navbar from "./components/common/Navbar";
import Waitlist from "./components/waitlist/Waitlist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<MainSection />} />
        <Route path="/waitlist" element={<Waitlist />} />

      </Routes>
    </>

  );
}

export default App;
