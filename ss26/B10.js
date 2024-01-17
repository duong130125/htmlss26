let array1 = [1, 2, 3, 4, 5];
let array2 = [-5, -1, 2, 4, 5];
let array3 = [-1, 4, 5, 8, 10];

let i = 0, j = 0, k = 0;
while (i < array1.length && j < array2.length && k < array3.length) {
  if (array1[i] === array2[j] && array2[j] === array3[k]) {
    console.log(`Phần tử chung: ${array1[i]}`);
    i++;
    j++;
    k++;
  } else if (array1[i] < array2[j]) {
    i++;
  } else if (array2[j] < array3[k]) {
    j++;
  } else {
    k++;
  }
}

