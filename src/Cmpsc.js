import React from "react";

import ProductThinkingBlock from "./components/ProductThinkingBlock";
import classes from "./layout/MainContainer.module.css";
// import Lines from "./components/Lines";
import boxesData from "./boxesData";
// import MainContainer from "./layout/MainContainer";
import { useState, useEffect, useContext } from "react";
import Header from "./layout/Header";
import Modal from "./modal/Modal";
import CartContext from "./modal/modalContext";
import contentData from "./contentData";
import Loader from "./layout/Loader";
import Footer from "./layout/Footer";

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

const MainContainer = () => {
  return (
    <div className={classes["main-container"]}>
      <svg
        viewBox="0 0 1280 3392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ProductThinkingBlock boxData={boxesData["csMajor"]} />
        <Lines />
      </svg>
    </div>
  );
};

function App() {
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
        <Header></Header>
        {isLoading && <Loader />}
        <MainContainer />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
