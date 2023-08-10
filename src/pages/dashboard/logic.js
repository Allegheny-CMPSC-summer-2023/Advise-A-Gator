import data from "../../curriculumData/current_data.json";

function filterbyMajor(data, field) {
  const filteredCourses = data.courses.filter((course) => {
    return course.Major.includes(field);
  });

  const uniqueCourses = [...new Set(filteredCourses)];

  return uniqueCourses;
}

function filterbycategories(data, field, method) {
  const filteredCourses = data.courses.filter((course) => {
    return course.Major.includes(field);
  });

  const listOfCourses = [];
  listOfCourses.push(filterbycategories);

  return filteredCourses;
}

const csMajorCourses = filterbyMajor(data, "Computer Science Major");
const dsMajorCourses = filterbyMajor(data, "Data Science Major");
const infMajorCourses = filterbyMajor(data, "Informatics Major");
const seMajorCourses = filterbyMajor(data, "Software Engineering Major");

export {
  filterbyMajor,
  csMajorCourses,
  dsMajorCourses,
  infMajorCourses,
  seMajorCourses,
};
