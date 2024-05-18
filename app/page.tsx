"use client";
import React from "react";
import HomePage from "@/pages/HomePage";
import TopNav from "@/components/TopNav";

const Home = () => {
  return (
    <React.Fragment>
      <TopNav />
      <HomePage />
    </React.Fragment>
  );
};

export default Home;
