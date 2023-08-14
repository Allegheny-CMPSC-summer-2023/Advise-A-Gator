import React from "react";
import * as Card from "../../components/Cards";
import { dsMajorCourses } from "./logic";

const DScourseCards = (cardNumber, iconClass) => {
  return (
    <main>
      <div style={Card.pageContainer}>
        <h1 style={{ justifyContent: "center" }}>DATA SCIENCE MAJOR COURSES</h1>
        <div style={Card.cardContainer}>
          {console.log(dsMajorCourses)}
          {dsMajorCourses.map((course, index) => (
            <Card.CourseCard
              cardNumber={cardNumber}
              iconClass={iconClass}
              courseNumber={dsMajorCourses[index].courseNumber}
              courseName={dsMajorCourses[index].courseName}
              distros={dsMajorCourses[index].distributionRequirements}
              prereqs={dsMajorCourses[index].prerequisites}
              unlocks={dsMajorCourses[index].unlocks}
              description={dsMajorCourses[index].courseDescription}
              cslevel={dsMajorCourses[index].cslevel}
              dslevel={dsMajorCourses[index].dslevel}
              dsSub={dsMajorCourses[index].dsSub}
              inflevel={dsMajorCourses[index].inflevel}
              infSub={dsMajorCourses[index].infSub}
              selevel={dsMajorCourses[index].selevel}
              topics={dsMajorCourses[index].topics}
              tools={dsMajorCourses[index].tools}
              lab={dsMajorCourses[index].lab}
              learningObjectives={dsMajorCourses[index].learningObjectives}
              learningOutcomes={dsMajorCourses[index].learningOutcomes}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const DSDashboardPage = () => {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      ;
      <div style={Card.cardContainer}>
        <DScourseCards cardNumber={4} iconClass={"fa-solid fa-database"} />
      </div>
    </main>
  );
};

export default DSDashboardPage;
