import {BrowserRouter, Route, Routes} from "react-router-dom"
import Addsongs from "./Components/page comp/Addsongs";
import Home from "./Components/page comp/Home";
import Search from "./Components/page comp/Search";
import Signup from "./Components/page comp/Signup";
import Login from "./Components/page comp/Login";
import Songs from "./Components/page comp/Songs";
import Artists from "./Components/page comp/Artists";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Home></Home>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/search" element={<Search/>}></Route>
    <Route path="/Addsongs" element={<Addsongs/>}></Route>
    <Route path="/Songs" element={<Songs/>}></Route>
    <Route path="/Artist" element={<Artists/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
