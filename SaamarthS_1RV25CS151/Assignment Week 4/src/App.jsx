import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestBoard from "./pages/QuestBoard";
import StatsPage from "./pages/StatsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuestBoard />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
