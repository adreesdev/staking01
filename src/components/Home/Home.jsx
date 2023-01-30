import React from "react";
import ImportantPlan from "./ImportantPlane";
import Footer from "./Footer";
import Stake from "./Stake";

const Home = () => {
  return (
    <>
      <div>
        <ImportantPlan />
        <Stake />
        <Footer />
      </div>
    </>
  );
};

export default Home;
