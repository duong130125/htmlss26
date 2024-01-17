let integerArray = [1, 2, 3, 2, 4, 5, 3, 6, 7, 8, 4, 9, 10, 10];
let check = {};
for (let element of integerArray) {
  if (check[element] === undefined) {
    check[element] = 1;
  } else {
    check[element]++;
  }
}
console.log("Các phần tử xuất hiện từ hai lần trở lên:");
for (let element in check) {
  if (check[element] >= 2) {
    console.log(element);
  }
}
