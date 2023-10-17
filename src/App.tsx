import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/areas/Nav";
import SideBar from "./components/areas/sidebar/SideBar";
import LeftMenu from "./components/areas/LeftMenu";
import Main from "./components/areas/main/Main";
import RightMenu from "./components/areas/rightMenu/RightMenu";
import Home from "./components/routes/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/categorythreads/:categoryId" element={}></Route>
      <Route path="/categorythreads/:categoryId" element={}></Route> */}
    </Routes>
  );
}
