let a = parseInt(prompt("Nhập số nguyên dương a:"));
let b = parseInt(prompt("Nhập số nguyên dương b:"));
let numbers = [];

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
  console.log("Vui lòng nhập số nguyên dương.");
} else {
    for (let i = 1; i <= a; i++) {
        if (i % b === 0) {
        numbers.push(i);
        }
    }

    for (let i = 1; i <= b; i++) {
        if (i % a === 0 && !numbers.includes(i)) {
        numbers.push(i);
        }
    }
    console.log("Các số chia hết là:", numbers);
}
