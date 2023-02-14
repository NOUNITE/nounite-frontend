import { Routes, Route } from "react-router-dom";
import MainSection from "./components/home/MainSection";
import Waitlist from "./components/waitlist/Waitlist";

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
