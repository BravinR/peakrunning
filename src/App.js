import { Routes, Route } from 'react-router-dom';


import Team from "./pages/Team";
import Plans from "./pages/Plans";
import FanPage from "./pages/FanPage";
import Contact from "./pages/ContactUs";
import Home from "./pages/Home";

function App() {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/" element={<Home />} />
      <Route path='/team' element={<Team />}></Route>
      <Route  path='/getCoached' element={<Plans />}></Route>
      <Route  path='/fanPage' element={<FanPage />}></Route>
      <Route  path='/contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
