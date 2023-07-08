import React from "react";

import ComputerScienceMajorBlock from "../components/Roadmap/components/ComputerScienceMajorBlock";
import classes from "../components/Roadmap/layout/MainContainer.module.css";
import boxesData from "../components/Roadmap/boxesData";
import { useState, useEffect, useContext } from "react";
import Modal from "../components/Roadmap/modal/Modal";
import CartContext from "../components/Roadmap/modal/modalContext";
import contentData from "../components/Roadmap/contentData";
import Loader from "../components/Roadmap/layout/Loader";
import Footer from "../components/Roadmap/layout/Footer";

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
          d="M957 165.5H858.75C852.537 165.5 847.5 170.537 847.5 176.75V176.75C847.5 182.963 842.463 188 836.25 188H738"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M465.5 318V212C465.5 198.745 476.245 188 489.5 188H543"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M323 255.5H409C422.255 255.5 433 244.755 433 231.5V212C433 198.745 443.745 188 457 188H543"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M813.5 318V212C813.5 198.745 802.755 188 789.5 188H738"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </React.Fragment>
  );
};

const ComputerScienceMajorContainer = () => {
  return (
    <div className={classes["main-container"]}>
      <svg
        viewBox="0 0 1280 3392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ComputerScienceMajorBlock boxData={boxesData["csMajor"]} />
        <Lines />
      </svg>
    </div>
  );
};

function ComputerScienceMajor() {
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
        <ComputerScienceMajorContainer />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default ComputerScienceMajor;
