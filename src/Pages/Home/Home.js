import React from "react";
import { InfoSection, Pricing } from "../../Components";
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <Pricing />
      <InfoSection {...HomeObjFour} />
    </>
  );
};

export default Home;
