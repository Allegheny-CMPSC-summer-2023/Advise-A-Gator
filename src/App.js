import MainContainer from "./components/Roadmap/layout/MainContainer";
import { useState, useEffect, useContext } from "react";
import Header from "./components/Roadmap/layout/Header";
import Modal from "./components/Roadmap/modal/Modal";
import CartContext from "./components/Roadmap/modal/modalContext";
import contentData from "./components/Roadmap/contentData";
import Loader from "./components/Roadmap/layout/Loader";
import Footer from "./components/Roadmap/layout/Footer";

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
        <MainContainer></MainContainer>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
