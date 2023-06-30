import React, { useState } from "react";

const body = document.querySelector("body");

// Create a ModalContext with a JavaScript object
const ModalContext = React.createContext({
  showDetailsHandler: (text) => {},
  hideDetailsHandler: () => {},
  currentTopicTitle: null,
  isModalOpen: false,
});

// ModalContextProvider for accessing modal functions like showModal, hideModal, and
// information like currentTopicTitle and isModalOpen.
export const ModalContextProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTopicTitle, setCurrentTopicTitle] = useState("null");

  const showModal = (text) => {
    setIsModalOpen(true);
    setCurrentTopicTitle(text);

    const scrollBarMarginRight =
      parseInt(window.innerWidth) -
      parseInt(document.documentElement.clientWidth);

    document.documentElement.style.marginRight = `${scrollBarMarginRight}px`;
    body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setIsModalOpen(false);

    body.style.overflow = "auto";
    document.documentElement.style.marginRight = "0px";
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
        currentTopicTitle,
        isModalOpen,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
