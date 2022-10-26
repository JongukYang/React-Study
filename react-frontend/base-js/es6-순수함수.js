const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = numbers.reduce((acc, n) => acc + n, 0);
console.log(number);
const even_numbers = numbers.filter(i => i % 2 == 0);
console.log(even_numbers);
console.log("쉬어가는날");