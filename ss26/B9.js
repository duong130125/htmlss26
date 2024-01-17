let integerArray = [1, 9, 2, 5, 7, 15, 20, 11];

let cout = 1;
for (let element of integerArray) {
  while (integerArray.includes(cout)) {
    cout++;
  }
}

console.log("Mảng:", integerArray, "- Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện:", cout);
