const getAverageGrade = (students) => {

  const sumAllGrades = (x) => x.reduce((acc, el) => acc + el, 0); // for summing all grades
  const allGradesArrays = (x) => x.map((el) => [...el["grades"]]); // for making and array that containts an array of each studendt grades
  const allGrades = (x) => [].concat(...x); // for joining the array of arrays grades to only one array that conaints all grades
  const calculateAverage = (x) => {
    if (x.length === 0) return 0; //cannot calculate average of 0 elements of grade
    return sumAllGrades(x) / x.length;
  };

  // Cechking for error tipe
  const errorIfNotValidGrade = (el) => {
    if(el > 10 || el < 0) throw new TypeError("Grade must be in the range of 0 - 10.");
  };
  const allStundetGrades = allGrades(allGradesArrays(students));
  allStundetGrades.forEach(errorIfNotValidGrade);

  // First, we get an array that contain all the grades array for each student
  // Second, we join all arrays together to only have one array with all grades
  // Third, we calculate the average of this array
  const composeGetAverage = (x) =>
    calculateAverage(allGrades(allGradesArrays(x)));

  return composeGetAverage(students);
};

module.exports = getAverageGrade;
