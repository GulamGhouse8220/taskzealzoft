import Navbar from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/register.js";
import Table from "./components/table.js";

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user/:id" element={<Table/>}/>
      </Routes>
    </div>
  );
}

export default App;
