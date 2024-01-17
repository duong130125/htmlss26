let integerArray = [-3, 5, -7, 2, 8, -1, 4, -6];
const resutlArray = [];

for (let i = 0; i < integerArray.length; i++) {
  if (integerArray[i] < 0) {
    resutlArray.unshift(integerArray[i]);
  }
}
for (let i = 0; i < integerArray.length; i++) {
  if (integerArray[i] >= 0) {
    resutlArray.push(integerArray[i]);
  }
}
console.log("Mảng sau khi di chuyển:",resutlArray);
