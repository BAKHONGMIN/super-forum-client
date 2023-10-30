import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Thread from "./components/routes/thread/Thread";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "./components/store/user/Reducer";
import UserProfile from "./components/routes/userProfile/UserProfile";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        useName: "testUser"
      }
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/categorythreads/:categoryId" element={<Home />}></Route>
      <Route path="/thread/:id" element={<Thread />} />
      <Route path="/userprofile/:id" element={<UserProfile />} />
    </Routes>
  );
}
