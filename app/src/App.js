import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Rules from "./components/Rules";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
