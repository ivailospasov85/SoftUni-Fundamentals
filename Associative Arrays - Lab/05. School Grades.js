// Write a function that stores students and their grades throughout the year. If a student appears more than once,
// add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by
// student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.



function shoolGrades(input) {
    let students = {};
  
    for (let i = 0; i < input.length; i++) {
      let [name, ...gradesArr] = input[i].split(' ');
      let grades = gradesArr.map(Number);
  
      if (students.hasOwnProperty(name)) {
        students[name] = students[name].concat(grades);
      } else {
        students[name] = grades;
      }
    }
  
    let studentAverages = {};
  
    for (let student in students) {
      let grades = students[student];
      let sum = grades.reduce((acc, grade) => acc + grade, 0);
      let average = sum / grades.length;
      studentAverages[student] = average.toFixed(2);
    }
  
    let sortedStudents = Object.keys(studentAverages).sort();
  
    for (let student of sortedStudents) {
      console.log(`${student}: ${studentAverages[student]}`);
    }
  }


shoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)