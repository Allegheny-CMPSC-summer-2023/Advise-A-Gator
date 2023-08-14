import React from "react";
import * as Card from "../../components/Cards";
import {
  csMajorCourses,
  csMajorCore,
  csMajorFoundation,
  csMajorElective,
  csMajorProject,
} from "./logic";

const FoundationCards = (cardNumber, iconClass) => {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div style={Card.pageContainer}>
        <h2 style={{ justifyContent: "center" }}>FOUNDATION COURSES</h2>
        <div style={Card.cardContainer}>
          {csMajorFoundation.map((sdagici, index) => (
            <Card.CourseCard
              cardNumber={cardNumber}
              iconClass={iconClass}
              courseNumber={csMajorFoundation[index].courseNumber}
              courseName={csMajorFoundation[index].courseName}
              distros={csMajorFoundation[index].distributionRequirements}
              prereqs={csMajorFoundation[index].prerequisites}
              unlocks={csMajorFoundation[index].unlocks}
              description={csMajorFoundation[index].courseDescription}
              cslevel={csMajorFoundation[index].cslevel}
              dslevel={csMajorFoundation[index].dslevel}
              dsSub={csMajorFoundation[index].dsSub}
              inflevel={csMajorFoundation[index].inflevel}
              infSub={csMajorFoundation[index].infSub}
              selevel={csMajorFoundation[index].selevel}
              topics={csMajorFoundation[index].topics}
              tools={csMajorFoundation[index].tools}
              lab={csMajorFoundation[index].lab}
              learningObjectives={csMajorFoundation[index].learningObjectives}
              learningOutcomes={csMajorFoundation[index].learningOutcomes}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const CoreCards = (cardNumber, iconClass) => {
  return (
    <main>
      <div style={Card.pageContainer}>
        <h2 style={{ justifyContent: "center" }}>Core COURSES</h2>
        <div style={Card.cardContainer}>
          {csMajorCore.map((sdagici, index) => (
            <Card.CourseCard
              iconClass={iconClass}
              cardNumber={cardNumber}
              courseNumber={csMajorCore[index].courseNumber}
              courseName={csMajorCore[index].courseName}
              distros={csMajorCore[index].distributionRequirements}
              prereqs={csMajorCore[index].prerequisites}
              unlocks={csMajorCore[index].unlocks}
              description={csMajorCore[index].courseDescription}
              cslevel={csMajorCore[index].cslevel}
              dslevel={csMajorCore[index].dslevel}
              dsSub={csMajorCore[index].dsSub}
              inflevel={csMajorCore[index].inflevel}
              infSub={csMajorCore[index].infSub}
              selevel={csMajorCore[index].selevel}
              topics={csMajorCore[index].topics}
              tools={csMajorCore[index].tools}
              lab={csMajorCore[index].lab}
              learningObjectives={csMajorCore[index].learningObjectives}
              learningOutcomes={csMajorCore[index].learningOutcomes}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const ElectiveCards = (cardNumber, iconClass) => {
  return (
    <main>
      <div style={Card.pageContainer}>
        <h2 style={{ justifyContent: "center" }}>Elective COURSES</h2>
        <div style={Card.cardContainer}>
          {csMajorElective.map((sdagici, index) => (
            <Card.CourseCard
              iconClass={iconClass}
              cardNumber={cardNumber}
              courseNumber={csMajorElective[index].courseNumber}
              courseName={csMajorElective[index].courseName}
              distros={csMajorElective[index].distributionRequirements}
              prereqs={csMajorElective[index].prerequisites}
              unlocks={csMajorElective[index].unlocks}
              description={csMajorElective[index].courseDescription}
              cslevel={csMajorElective[index].cslevel}
              dslevel={csMajorElective[index].dslevel}
              dsSub={csMajorElective[index].dsSub}
              inflevel={csMajorElective[index].inflevel}
              infSub={csMajorElective[index].infSub}
              selevel={csMajorElective[index].selevel}
              topics={csMajorElective[index].topics}
              tools={csMajorElective[index].tools}
              lab={csMajorElective[index].lab}
              learningObjectives={csMajorElective[index].learningObjectives}
              learningOutcomes={csMajorElective[index].learningOutcomes}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const ProjectCards = (cardNumber, iconClass) => {
  return (
    <main>
      <div style={Card.pageContainer}>
        <h2 style={{ justifyContent: "center" }}>Project</h2>

        <div style={Card.cardContainer}>
          {csMajorProject.map((sdagici, index) => (
            <Card.CourseCard
              iconClass={iconClass}
              cardNumber={cardNumber}
              courseNumber={csMajorProject[index].courseNumber}
              courseName={csMajorProject[index].courseName}
              distros={csMajorProject[index].distributionRequirements}
              prereqs={csMajorProject[index].prerequisites}
              unlocks={csMajorProject[index].unlocks}
              description={csMajorProject[index].courseDescription}
              cslevel={csMajorProject[index].cslevel}
              dslevel={csMajorProject[index].dslevel}
              dsSub={csMajorProject[index].dsSub}
              inflevel={csMajorProject[index].inflevel}
              infSub={csMajorProject[index].infSub}
              selevel={csMajorProject[index].selevel}
              topics={csMajorProject[index].topics}
              tools={csMajorProject[index].tools}
              lab={csMajorProject[index].lab}
              learningObjectives={csMajorProject[index].learningObjectives}
              learningOutcomes={csMajorProject[index].learningOutcomes}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const CSDashboardPage = () => {
  return (
    <main style={{ backgroundColor: "aqua" }}>
      <h1 style={{ justifyContent: "center" }}>
        COMPUTER SCIENCE MAJOR COURSES
      </h1>
      <div style={Card.cardContainer}>
        <FoundationCards cardNumber={2} iconClass={"fa-solid fa-code"} />
      </div>
      <div style={Card.cardContainer}>
        <CoreCards cardNumber={3} iconClass={"fa-solid fa-code"} />
      </div>
      <div style={Card.cardContainer}>
        <ElectiveCards cardNumber={4} iconClass={"fa-solid fa-code"} />
      </div>
      <div style={Card.cardContainer}>
        <ProjectCards cardNumber={5} iconClass={"fa-solid fa-code"} />
      </div>
    </main>
  );
};

export default CSDashboardPage;
