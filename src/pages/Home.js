import React from "react";
import * as Card from "../components/Cards";
import Layout from "../components/Layout";
import "../styles/styles.css";

export default function Home() {
  return (
    <section>
      <div class="majors" style={Card.cardContainer}>
        <Card.FieldCard1 />
        <Card.FieldCard2 />
        <Card.FieldCard3 />
        <Card.FieldCard4 />
      </div>
      <div class="minors" style={Card.cardContainer}>
        <Card.MinorCard5 />
        <Card.MinorCard6 />
        <Card.MinorCard7 />
        <Card.MinorCard8 />
      </div>
      {/* Other content for the home page */}
    </section>
  );
}
