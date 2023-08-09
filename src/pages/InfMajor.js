import React from "react";
import { useState, useEffect, useContext } from "react";

import classes from "../components/Roadmap/layout/MainContainer.module.css";
import boxesData from "../components/Roadmap/boxesData";
import Modal from "../components/Roadmap/modal/Modal";
import CartContext from "../components/Roadmap/modal/modalContext";
import contentData from "../components/Roadmap/contentData";
import Loader from "../components/Roadmap/layout/Loader";
import Footer from "../components/Roadmap/layout/Footer";
import InformaticsMajorBlock from "../components/Roadmap/components/InformaticsMajorBlock";

const Lines = () => {
  return (
    <React.Fragment>
      <svg
        width="1280"
        height="3452"
        viewBox="0 2559 1280 3452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M927 2761.5H933C946.255 2761.5 957 2772.25 957 2785.5V3051.5C957 3064.75 967.745 3075.5 981 3075.5H993"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M738 2831H824C837.255 2831 848 2820.25 848 2807V2786"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M927 2761.5H933C946.255 2761.5 957 2772.25 957 2785.5V2876.5C957 2889.75 967.745 2900.5 981 2900.5H993"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M543 2831H474C460.745 2831 450 2841.75 450 2855V2877"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M371 2901H323"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M371 2901H366C352.745 2901 342 2911.75 342 2925V3056.5C342 3066.99 333.493 3075.5 323 3075.5V3075.5"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M450 2925V2936.75C450 2949.59 460.409 2960 473.25 2960V2960C486.091 2960 496.5 2970.41 496.5 2983.25V2995"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M927 2761.5H942C951.941 2761.5 960 2753.44 960 2743.5V2743.5C960 2733.56 968.059 2725.5 978 2725.5H993"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M371 2901H364C350.745 2901 340 2890.25 340 2877V2742.5C340 2733.11 332.389 2725.5 323 2725.5V2725.5"
          stroke="#CED4DA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </React.Fragment>
  );
};

const InformaticsMajorContainer = () => {
  return (
    <div className={classes["main-container"]}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1280 1800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <InformaticsMajorBlock boxData={boxesData["infMajor"]} />
        {/* <Lines /> */}
      </svg>
    </div>
  );
};

function InformaticsMajor() {
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
        <InformaticsMajorContainer />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default InformaticsMajor;
