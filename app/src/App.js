import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Rules from "./components/Rules";
import Nav from "./components/Nav";
import styled from "styled-components";

const AppBody = styled.div`
  overflow: hidden;
`;

function App() {
  return (
    <AppBody>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
        </Routes>
      </BrowserRouter>
    </AppBody>
  );
}

export default App;
