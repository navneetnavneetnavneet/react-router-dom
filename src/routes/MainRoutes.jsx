import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Users from "../components/Users";
import NotFound from "../components/NotFound";
import Details from "../components/Details";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* first way */}
        {/* <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Details />} /> */}

        {/* second way */}
        <Route path="/users" element={<Users />} >
          <Route path="/users/:id" element={<Details />} />
        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
