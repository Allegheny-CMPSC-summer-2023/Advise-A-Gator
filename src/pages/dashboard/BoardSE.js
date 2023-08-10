import React from "react";
import * as Card from "../../components/Cards";
import { csMajorCourses } from "./logic";

const SEcourseCards = () => {
  return (
    <main>
      <div style={Card.pageContainer}>
        <h1>COMPUTER SCIENCE MAJOR COURSES</h1>
        <div style={Card.cardContainer}>
          {csMajorCourses.map((course, index) => (
            <Card.CourseCard
              courseNumber={csMajorCourses[index].courseNumber}
              courseName={csMajorCourses[index].courseName}
              distros={csMajorCourses[index].distributionRequirements}
              prereqs={csMajorCourses[index].prerequisites}
              unlocks={csMajorCourses[index].unlocks}
              description={csMajorCourses[index].courseDescription}
              cslevel={csMajorCourses[index].cslevel}
              dslevel={csMajorCourses[index].dslevel}
              dsSub={csMajorCourses[index].dsSub}
              inflevel={csMajorCourses[index].inflevel}
              infSub={csMajorCourses[index].infSub}
              selevel={csMajorCourses[index].selevel}
              topics={csMajorCourses[index].topics}
              tools={csMajorCourses[index].tools}
              lab={csMajorCourses[index].lab}
              learningObjectives={csMajorCourses[index].learningObjectives}
              learningOutcomes={csMajorCourses[index].learningOutcomes}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const SEDashboardPage = () => {
  return (
    <main>
      <div style={Card.cardContainer}>
        <SEcourseCards />
      </div>
    </main>
  );
};

export default SEDashboardPage;
