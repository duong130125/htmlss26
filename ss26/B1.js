let random = [1, 'abc', 3.14, 'xyz', 5, true, '6'];
let check = false;
for (let i = 0; i < random.length; i++) {
  if (Number.isInteger(random[i])) {
    console.log(`Số nguyên trong mảng là: ${random[i]}`);
    check = true;
  }
}
if (!check) {
  console.log("Trong mảng không tồn tại số nguyên.");
}
