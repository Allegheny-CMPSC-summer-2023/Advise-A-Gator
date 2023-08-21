import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  boxSize: "border-box",
};

const HomePageCardContainer = {
  display: "flex",
  flexWrap: "wrap",
  boxSize: "border-box",
  justifyContent: "center",
};

const pageContainer = {
  display: "flex",
  flexDirection: "column",
};

const cardStyle = {
  width: 500,
  flexDirection: "column",
  background: "#white",
  border: 3,
  borderStyle: "solid",
  margin: 10,
  padding: 50,
  maxWidth: 500,
};

// cards for the computer science DASHBOARD
function CSCourseCard(props) {
  return (
    <div class={"card card-" + props.cardNumber["cardNumber"].toString()}>
      <div class="card__icon">
        <i class={props.cardNumber["iconClass"]}></i>
      </div>
      <h2 class="card__title">
        {props.courseNumber}: {props.courseName}
        {console.log(props.cardNumber)}
        {console.log(props.iconClass)}
      </h2>
      <p class="card__apply">
        <a class="card__link" href="#">
          See More <i class="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

function CourseCard(props) {
  return (
    <div class={"card card-" + props.cardNumber["cardNumber"].toString()}>
      <div class="card__icon">
        <i class={props.cardNumber["iconClass"]}></i>
      </div>
      <h2 class="card__title">
        {props.courseNumber}: {props.courseName}
        {console.log(props.cardNumber)}
        {console.log(props.iconClass)}
      </h2>
      <p class="card__apply">
        <a class="card__link" href="#">
          See More <i class="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

function FieldCard1(props) {
  return (
    <div class={"card card-" + props.cardNumber.toString()}>
      {" "}
      <div class="card__icon">
        <i class={props.iconClass}></i>
      </div>
      <h2 class="card__title">{props.name}</h2>
      <p class="card__apply">
        <Link to={props.link} class="card__link">
          {" "}
          See Courses <i class="fas fa-arrow-right"></i>
        </Link>
      </p>
    </div>
  );
}

export {
  FieldCard1,
  CourseCard,
  cardContainer,
  HomePageCardContainer,
  cardStyle,
  pageContainer,
};
