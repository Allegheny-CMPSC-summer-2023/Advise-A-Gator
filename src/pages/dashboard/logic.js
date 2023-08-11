import data from "../../curriculumData/current_data.json";

// filters courses using their level and methods
function filterbyMethods(data, field, level, method) {
  const filteredCourses = data.courses.filter((course) => {
    if (
      course.Major.includes(field) &&
      course[level].toLowerCase() === method.toLowerCase()
    ) {
      return course;
    }
    // return course.Major.includes(field);
  });

  const uniqueCourses = [...new Set(filteredCourses)];

  return uniqueCourses;
}

// displays all the courses in the Major
function filterbyMajor(data, field) {
  const filteredCourses = data.courses.filter((course) => {
    return course.Major.includes(field);
  });

  const uniqueCourses = [...new Set(filteredCourses)];

  return uniqueCourses;
}

//computer science courses
const csMajorCourses = filterbyMajor(data, "Computer Science Major");
const csMajorFoundation = filterbyMethods(
  data,
  "Computer Science Major",
  "cslevel",
  "foundation",
);
const csMajorCore = filterbyMethods(
  data,
  "Computer Science Major",
  "cslevel",
  "Core",
);
const csMajorElective = filterbyMethods(
  data,
  "Computer Science Major",
  "cslevel",
  "Elective",
);
const csMajorProject = filterbyMethods(
  data,
  "Computer Science Major",
  "cslevel",
  "Project",
);

const dsMajorCourses = filterbyMajor(data, "Data Science Major", "dslevel");
const infMajorCourses = filterbyMajor(data, "Informatics Major", "inflevel");
const seMajorCourses = filterbyMajor(
  data,
  "Software Engineering Major",
  "selevel",
);

export {
  filterbyMajor,
  csMajorCourses,
  csMajorFoundation,
  csMajorCore,
  csMajorElective,
  csMajorProject,
  dsMajorCourses,
  infMajorCourses,
  seMajorCourses,
};
