import React from "react";
import { useState, useEffect, useContext } from "react";

import classes from "../components/Roadmap/layout/MainContainer.module.css";
import boxesData from "../components/Roadmap/boxesData";
import Modal from "../components/Roadmap/modal/Modal";
import CartContext from "../components/Roadmap/modal/modalContext";
import contentData from "../components/Roadmap/contentData";
import Loader from "../components/Roadmap/layout/Loader";
import Footer from "../components/Roadmap/layout/Footer";
import DataScienceMajorBlock from "../components/Roadmap/components/DataScienceMajorBlock";

const Lines = () => {
  return (
    <React.Fragment>
      <svg
        width="1280"
        height="3452"
        viewBox="0 550 1280 3452"
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

const DataScienceMajorContainer = () => {
  return (
    <div className={classes["main-container"]}>
      <svg
        viewBox="0 0 1280 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <DataScienceMajorBlock boxData={boxesData["dsMajor"]} />
        <Lines />
      </svg>
    </div>
  );
};

function DataScienceMajor() {
  const { currentTopicTitle } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  const topicData = contentData[currentTopicTitle];

  return (
    <div>
      <Modal topicData={topicData} />
      <main>
        {isLoading && <Loader />}
        <DataScienceMajorContainer />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default DataScienceMajor;
