import { Routes, Route } from "react-router-dom";
import MainSection from "./pages/home/MainSection";
import Waitlist from "./pages/waitlist/Waitlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </>
  );
}

export default App;
