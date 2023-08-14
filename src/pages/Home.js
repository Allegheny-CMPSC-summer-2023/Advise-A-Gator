import React from "react";
import * as Card from "../components/Cards";
import Layout from "../components/Layout";
import "../styles/styles.css";

export default function Home() {
  return (
    <section>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div style={{ paddingTop: 50, paddingBottom: 20 }}>
        <div class="majors" style={Card.HomePageCardContainer}>
          <Card.FieldCard1
            name={"Computer Science Major"}
            link={"/computersciencemajor"}
            cardNumber={1}
            iconClass={"fa-solid fa-code"}
          />
          <Card.FieldCard1
            name={"Data Science Major"}
            link={"/datasciencemajor"}
            cardNumber={2}
            iconClass={"fa-solid fa-database"}
          />
          <Card.FieldCard1
            name={"Informatics Major"}
            link={"/informaticsmajor"}
            cardNumber={3}
            iconClass={"fa-solid fa-computer"}
          />
          <Card.FieldCard1
            name={"Software Engineering Major"}
            link={"/softwareengineeringmajor"}
            cardNumber={5}
            iconClass={"fa-brands fa-react"}
          />
        </div>
      </div>

      <i class="fa-brands fa-react"></i>
      <div style={{ padding: 20 }}>
        <div class="minors" style={Card.HomePageCardContainer}>
          <Card.FieldCard1
            name={"Computer Science Minor"}
            link={"/computerscienceminor"}
            cardNumber={4}
            iconClass={"fa-solid fa-code"}
          />
          <Card.FieldCard1
            name={"Data Science Minor"}
            link={"/datascienceminor"}
            cardNumber={3}
            iconClass={"fa-solid fa-database"}
          />
          <Card.FieldCard1
            name={"Informatics Minor"}
            link={"/informaticsminor"}
            cardNumber={2}
            iconClass={"fa-solid fa-computer"}
          />
          <Card.FieldCard1
            name={"Software Engineering Minor"}
            link={"/softwareengineeringminor"}
            cardNumber={1}
            iconClass={"fa-brands fa-react"}
          />
        </div>
      </div>
      {/* Other content for the home page */}
    </section>
  );
}
