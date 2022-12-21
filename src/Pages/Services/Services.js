import React from "react";
import { InfoSection, Pricing } from "../../Components";
import { HomeObjOne, HomeObjThree } from "./Data";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjThree} />
    </>
  );
};

export default Services;
