const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

const average = (...grades) => grades.reduce((prev, curr) => prev + curr) / grades.length;

console.log (average(...grades));
