// Khai báo biến và kiểu dữ liệu
var age = 18;
var name = "Jane";
var name = {first:"Jane", last:"Doe"};
var truth = false;
var sheets = ["HTML", "CSS", "JS"];
var a; typeof a;
var a = null;

//Cấu trúc điều khiển:
// // if - else
if ((age >= 14) && (age < 19)) {
  status = "Eligible.";
} else {
  status = "Not eligible.";
}

// // switch
switch (new Date().getDay()) {
  case 6:
    text = "Saturday";
    break;
  case 0: 
    text = "Sunday";
    break;
  default:
    text = "Whatever";
}

//Vòng lặp
// // For
var sum = 0;
var a = [0, 1, 2, 3];
for (var i = 0; i < a.length; i++) {
  sum += a[i];
}

// // while
var i = 1;
while (i < 100) {
  i *= 2;
  console.log(i + ", ");
}

// // Do While
var i = 1;
do {
  i *= 2;
  console.log(i + ", ");
} while (i < 100);

//Khai báo hàm
function addNumbers(a, b) {
  return a + b;
}
x = addNumbers(1, 2);

//Đối tượng
var student = { //object name
  firstName: "Jane", 
  lastName: "Doe",
  age: 18,
  height: 170,
  fullName: function () { //Object function
    return this.firstName + " " + this.lastName;
  }
};
student.age = 19;
student[age]++;
name = student.fullName();

//Sắp xếp mảng
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b) {return a-b});