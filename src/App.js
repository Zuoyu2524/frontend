import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Component/Nav/Nav";
import Register from "./View/Register";
import Home from "./View/Home";
import Login from "./View/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
