import React from "react";
import data from "../curriculumData/current_data.json";
import * as Card from "../components/Cards";

function filterCourses(data, field) {
  const filteredCourses = data.courses.filter((course) => {
    return course.Major.includes(field);
  });

  const listOfCourses = [];
  listOfCourses.push(filterCourses);

  return filteredCourses;
}

const csMajor = filterCourses(data, "Computer Science Major");
const dsMajor = filterCourses(data, "Data Science Major");
const infMajor = filterCourses(data, "Informatics Major");
const seMajor = filterCourses(data, "Software Engineering Major");

const CScourseCards = () => {
  return (
    <main>
      <div style={Card.pageContainer}>
        <h1>COMPUTER SCIENCE MAJOR COURSES</h1>
        <div style={Card.cardContainer}>
          {csMajor.map((course, index) => (
            <Card.CourseCard
              courseNumber={csMajor[index].courseNumber}
              courseName={csMajor[index].courseName}
              distros={csMajor[index].distributionRequirements}
              prereqs={csMajor[index].prerequisites}
              unlocks={csMajor[index].unlocks}
              description={csMajor[index].courseDescription}
              cslevel={csMajor[index].cslevel}
              dslevel={csMajor[index].dslevel}
              dsSub={csMajor[index].dsSub}
              inflevel={csMajor[index].inflevel}
              infSub={csMajor[index].infSub}
              selevel={csMajor[index].selevel}
              topics={csMajor[index].topics}
              tools={csMajor[index].tools}
              lab={csMajor[index].lab}
              learningObjectives={csMajor[index].learningObjectives}
              learningOutcomes={csMajor[index].learningOutcomes}
            />
          ))}
          {/* <CourseCard
            courseNumber={csMajor[1].courseNumber}
            courseName={csMajor[1].courseName}
            distros={csMajor[1].distributionRequirements}
            prereqs={csMajor[1].prerequisites}
            unlocks={csMajor[1].unlocks}
            description={csMajor[1].courseDescription}
            cslevel={csMajor[1].cslevel}
            dslevel={csMajor[1].dslevel}
            dsSub={csMajor[1].dsSub}
            inflevel={csMajor[1].inflevel}
            infSub={csMajor[1].infSub}
            selevel={csMajor[1].selevel}
            topics={csMajor[1].topics}
            tools={csMajor[1].tools}
            lab={csMajor[1].lab}
            learningObjectives={csMajor[1].learningObjectives}
            learningOutcomes={csMajor[1].learningOutcomes}
          /> */}
        </div>
      </div>
    </main>
  );
};

const CoursesPage = () => {
  return (
    <main>
      <div style={Card.cardContainer}>
        <CScourseCards />
      </div>
    </main>
  );
};

export default CoursesPage;
