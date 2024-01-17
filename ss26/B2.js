let value = prompt("Nhập vào giá trị bất kỳ:");
let random = [1, 2, "dương", "nam", "{}", "[]", 3.54];
let check = false;
for(let i=0; i< random.length; i++){
    if(value==random[i]){
        console.log(`Phần tử ${random[i]} tìm thấy ở vị trí thứ ${i}`);
        check = true;
        break;
    }
}
if(!check){
    console.log("Phần tử không tìm thấy trong mảng.");

}