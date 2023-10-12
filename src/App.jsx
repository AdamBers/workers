import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import HomePage from "./pages/HomePage";
import Employees from "./pages/Employees";
import EditPage from "./pages/EditPage";
import "./scss/style.css";
// import { Counter } from "./features/counter/Counter";
/* <Counter /> */

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/employee/:employeeId" element={<EditPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
