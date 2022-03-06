// import from packages
import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import ShiftSwap from "./components/ShiftSwap/ShiftSwap";
import DailySwap from "./components/DailySwap/DailySwap";
import QuestionAnswer from "./components/QuestionAnswer/QuestionAnswer";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shiftswap' element={<ShiftSwap />} />
      <Route path='/dailyswap' element={<DailySwap />} />
      <Route path='/Q-and-A' element={<QuestionAnswer />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default App;
