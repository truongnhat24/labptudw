var student = {
  firstName: "Jane", 
  lastName: "Doe",
  age: 38,
  height: 170,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
},
student2 = {
  firstName: "Jane", 
  lastName: "Doe",
  age: 28,
  height: 170,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
},
student3 = {
  firstName: "Jane", 
  lastName: "Doe",
  age: 19,
  height: 170,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
},
student4 = {
  firstName: "Jane", 
  lastName: "Doe",
  age: 23,
  height: 170,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
},
listStudent = [student, student2, student3, student4];
listStudent.sort(function (a,b) {
  return a.age -b.age;
})
console.log(listStudent);