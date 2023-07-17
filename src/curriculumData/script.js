const data = require("./current_data.json");
const fs = require("fs");

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

function converter(field) {
  const newData = {};

  for (const course of field) {
    const {
      courseNumber,
      courseName,
      unlocks,
      courseDescription,
      distributionRequirements,
      credits,
      prerequisites,
      topics = [],
      technicalTopics = [],
      professionalTopics = [],
      tools,
      learningObjectives,
      learningOutcomes,
    } = course;

    newData[courseNumber] = {
      title: courseName,
      description: courseDescription,
      distributionRequirements: distributionRequirements,
      credits: credits,
      prerequisites: prerequisites,
      unlocks: unlocks,
      topics: topics,
      technicalTopics: technicalTopics,
      professionalTopics: professionalTopics,
      tools: tools.map((tool) => ({ iconType: "tool", title: tool })),
      lab: [],
      learningObjectives: learningObjectives,
      learningOutcomes: learningOutcomes,
    };
  }

  return newData;
}

function writeToFile(data, fileName) {
  const content = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile(fileName, content, "utf8", (err) => {
    if (err) {
      console.error("An error occurred while writing the file:", err);
      return;
    }
    console.log(`${fileName} has been saved successfully.`);
  });
}

//calling functions

const infData = converter(infMajor);
const csData = converter(csMajor);
const dsData = converter(dsMajor);
const seData = converter(seMajor);

writeToFile(infData, "infMajor.js");
writeToFile(csData, "csMajor.js");
writeToFile(dsData, "dsMajor.js");
writeToFile(seData, "seMajor.js");
