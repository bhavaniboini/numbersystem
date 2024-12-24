const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
const evennumbers=numbers.filter(num =>num%2 ===0);
const oddnumbers =numbers.filter(num =>num%2!==0);
console.log("evennumbers:",evennumbers);
console.log("oddnumbers:",oddnumbers);  
