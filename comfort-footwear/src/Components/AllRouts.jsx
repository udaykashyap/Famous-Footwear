import React from "react";
import { Routes, Route } from "react-router-dom";
import Accessories from "../Page/Accessories";
import Brands from "../Page/Brands";
import Kids from "../Page/Kids";
import Login from "../Page/Login";
import Men from "../Page/Men";
import Sale from "../Page/Sale";
import SinglePageMen from "../Page/SinglePageMen";
import SingleProduct from "../Page/SingleProduct";
import Women from "../Page/Women";
import LandingPage from "./LandingPage";

const AllRouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/women" element={<Women />} />
        <Route
          path="/women/:women_id"
          element={<SingleProduct temp="womens" />}
        />
        <Route path="/men" element={<Men />} />
        <Route path="/men/:men_id" element={<SinglePageMen />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRouts;
