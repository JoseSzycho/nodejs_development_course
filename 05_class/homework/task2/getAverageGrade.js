const getAverageGrade = (students) => {
  const sumAllGrades = (x) => x.reduce((acc, el) => acc + el, 0); // for summing all grades
  const allGradesArrays = (x) => x.map((el) => [...el["grades"]]); // for making and array that containts an array of each studendts grades
  const allGrades = (x) => [].concat(...x); // for join the array of arrays grades to only one array that conaints all grades
  const calculateAverage = (x) => {
    if (x.length === 0) return 0; //cannot calculate average of 0 elements of grade
    return sumAllGrades(x) / x.length;
  };

  // First, we get an array that contain all the grade array for each student
  // Second, we join all arrays together to only have one array
  // Third, we calculate the average of this array
  const composeGetAverage = (x) =>
    calculateAverage(allGrades(allGradesArrays(x)));

  return composeGetAverage(students);
};

module.exports = getAverageGrade;
