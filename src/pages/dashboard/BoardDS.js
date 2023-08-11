import React from "react";
import * as Card from "../../components/Cards";
import { dsMajorCourses } from "./logic";

const DScourseCards = (cardNumber) => {
  return (
    <main>
      <div style={Card.pageContainer}>
        <h1 style={{ justifyContent: "center" }}>DATA SCIENCE MAJOR COURSES</h1>
        <div style={Card.cardContainer}>
          {console.log(dsMajorCourses)}
          {dsMajorCourses.map((course, index) => (
            <Card.CourseCard
              cardNumber={cardNumber}
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
      <div style={Card.cardContainer}>
        <DScourseCards cardNumber={4} />
      </div>
    </main>
  );
};

export default DSDashboardPage;
