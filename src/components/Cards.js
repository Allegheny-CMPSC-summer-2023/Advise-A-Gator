import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  boxSize: "border-box",
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

function CourseCard(props) {
  return (
    <div class="card card-3">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">
        {props.courseNumber}: {props.courseName}
      </h2>
      <p class="card__apply">
        <a class="card__link" href="#">
          See More<i class="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

function FieldCard1(props) {
  return (
    <div class="card card-1">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">Computer Science Major</h2>
      <p class="card__apply">
        <Link to="/computersciencemajor" class="card__link">
          {" "}
          See Courses <i class="fas fa-arrow-right"></i>
        </Link>
      </p>
    </div>
  );
}

function FieldCard2(props) {
  return (
    <div class="card card-2">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">Data Science Major</h2>
      <p class="card__apply">
        <Link to="/datasciencemajor" class="card__link">
          {" "}
          See Courses <i class="fas fa-arrow-right"></i>
        </Link>
      </p>
    </div>
  );
}

function FieldCard3(props) {
  return (
    <div class="card card-3">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">Informatics Major</h2>
      <p class="card__apply">
        <Link to="/informaticsmajor" class="card__link">
          {" "}
          See Courses <i class="fas fa-arrow-right"></i>
        </Link>
      </p>
    </div>
  );
}

function FieldCard4(props) {
  return (
    <div class="card card-4">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">Software Engineering Major</h2>
      <p class="card__apply">
        <a class="card__link" href="#">
          See Courses <i class="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

function MinorCard5(props) {
  return (
    <div class="card card-5">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">Computer Science Minor</h2>
      <p class="card__apply">
        <a class="card__link" href="#">
          See Courses <i class="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

function MinorCard6(props) {
  return (
    <div class="card card-3">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">Data Science Minor</h2>
      <p class="card__apply">
        <a class="card__link" href="#">
          See Courses <i class="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

function MinorCard7(props) {
  return (
    <div class="card card-2">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">Informatics Minor</h2>
      <p class="card__apply">
        <a class="card__link" href="#">
          See Courses <i class="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

function MinorCard8(props) {
  return (
    <div class="card card-1">
      <div class="card__icon">
        <i class="fas fa-bolt"></i>
      </div>
      <p class="card__exit">
        <i class="fas fa-times"></i>
      </p>
      <h2 class="card__title">Software Engineering Minor</h2>
      <p class="card__apply">
        <a class="card__link" href="#">
          See Courses <i class="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

export {
  FieldCard1,
  FieldCard2,
  FieldCard3,
  FieldCard4,
  CourseCard,
  MinorCard5,
  MinorCard6,
  MinorCard7,
  MinorCard8,
  cardContainer,
  cardStyle,
  pageContainer,
};
