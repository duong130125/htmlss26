let number = parseInt(prompt("Nhập vào một số nguyên bất kỳ:"));
let numberList = [5,6,7,8,9,4,2,6,9,5,6,6,1,3,4];
let cout = 0;
for(let i=0; i< numberList.length; i++){
    if(number==numberList[i]){
        cout ++;
        check = true;
    }
}
console.log(`Số lần ${number} xuất hiện trong mảng là ${cout}`);
