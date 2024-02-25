let student = {
  firstName: "Jane", 
  lastName: "Doe",
  age: 38,
  height: 170,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
},
student2 = {
  firstName: "Bonnie", 
  lastName: "Claw",
  age: 28,
  height: 170,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
},
student3 = {
  firstName: "Ivan", 
  lastName: "Rock",
  age: 19,
  height: 170,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
},
student4 = {
  firstName: "Nicholas", 
  lastName: "Cage",
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