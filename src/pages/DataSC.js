import React from "react";

import classes from "../layout/MainContainer.module.css";
// import Lines from "./components/Lines";
import boxesData from "../boxesData";
import DataScienceMajorBlock from "../components/DataScienceMajorBlock";

const Lines = () => {
  return (
    <React.Fragment>
      <svg
        width="1280"
        height="3452"
        viewBox="0 0 1280 3452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M957 741.5H837.75C825.186 741.5 815 751.686 815 764.25V764.25C815 776.814 804.814 787 792.25 787H738"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M957 1015H840C826.745 1015 816 1004.25 816 991V811C816 797.745 805.255 787 792 787H738"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M433 1037.5H439.999C453.254 1037.5 463.999 1026.75 463.999 1013.5V811C463.999 797.745 474.745 787 487.999 787H543"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M323 764H421.5C427.851 764 433 769.149 433 775.5V775.5C433 781.851 438.149 787 444.5 787H543"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </React.Fragment>
  );
};

const MainContainer = () => {
  return (
    <div className={classes["main-container"]}>
      <svg
        viewBox="0 0 1280 3392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <DataScienceMajorBlock boxData={boxesData["research"]} />
        <Lines />
      </svg>
    </div>
  );
};

export default MainContainer;
