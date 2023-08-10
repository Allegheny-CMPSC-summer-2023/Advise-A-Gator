import React from "react";
import * as Card from "../../components/Cards";
import { infMajorCourses } from "./logic";

const INFcourseCards = () => {
  return (
    <main>
      <div style={Card.pageContainer}>
        <h1 style={{ justifyContent: "center" }}>INFORMATICS MAJOR COURSES</h1>
        <div style={Card.cardContainer}>
          {infMajorCourses.map((course, index) => (
            <Card.CourseCard
              courseNumber={infMajorCourses[index].courseNumber}
              courseName={infMajorCourses[index].courseName}
              distros={infMajorCourses[index].distributionRequirements}
              prereqs={infMajorCourses[index].prerequisites}
              unlocks={infMajorCourses[index].unlocks}
              description={infMajorCourses[index].courseDescription}
              cslevel={infMajorCourses[index].cslevel}
              dslevel={infMajorCourses[index].dslevel}
              dsSub={infMajorCourses[index].dsSub}
              inflevel={infMajorCourses[index].inflevel}
              infSub={infMajorCourses[index].infSub}
              selevel={infMajorCourses[index].selevel}
              topics={infMajorCourses[index].topics}
              tools={infMajorCourses[index].tools}
              lab={infMajorCourses[index].lab}
              learningObjectives={infMajorCourses[index].learningObjectives}
              learningOutcomes={infMajorCourses[index].learningOutcomes}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const INFDashboardPage = () => {
  return (
    <main>
      <div style={Card.cardContainer}>
        <INFcourseCards />
      </div>
    </main>
  );
};

export default INFDashboardPage;
