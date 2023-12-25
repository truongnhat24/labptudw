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