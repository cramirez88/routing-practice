import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
// import Number from "./components/Number";
import Word from "./components/Word";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:word" element={<Word/>}/>
        <Route  path="/:word" element={<Word/>}/>
        <Route path='/:word/:textColor/:backgroundColor' element={<Word/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
