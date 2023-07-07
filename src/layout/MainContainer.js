import React from "react";

import ComputerScienceMajorBlock from "../components/ComputerScienceMajorBlock";
import classes from "./MainContainer.module.css";
import Lines from "../components/Lines";
import boxesData from "../boxesData";
import DataScienceMajorBlock from "../components/DataScienceMajorBlock";
import UserExperienceBlock from "../components/UserExperienceBlock";
import UserInterfaceBlock from "../components/UserInterfaceBlock";
import CommunicationBlock from "../components/CommunicationBlock";

const MainContainer = () => {
  return (
    <div className={classes["main-container"]}>
      <svg
        viewBox="0 0 1280 3392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ComputerScienceMajorBlock boxData={boxesData["csMajor"]} />
        <DataScienceMajorBlock boxData={boxesData["research"]} />
        <UserExperienceBlock boxData={boxesData["userExperience"]} />
        <UserInterfaceBlock boxData={boxesData["userInterface"]} />
        <CommunicationBlock boxData={boxesData["communication"]} />
        <Lines />
      </svg>
    </div>
  );
};

export default MainContainer;
