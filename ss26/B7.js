let integerArray = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let number = parseInt(prompt("Nhập vào một số bất kỳ:"));

let subArray = [];
let check = false;
for (let i = 0; i < integerArray.length; i++) {
    let currentSum = integerArray[i];
    subArray = [integerArray[i]];

    for (let j = i + 1; j < integerArray.length; j++) {
        currentSum += integerArray[j];
        subArray.push(integerArray[j]);
        if (currentSum === number) {
        check = true;
        break;
        }
    }
    if (check) {
        break;
    }
}
if (check) {
    console.log("Mảng con thỏa mãn:",subArray);
} else {
    console.log("Không có mảng con thỏa mãn.");
}
