function average(n) {
  var sum = 0;
  console.log("The average of");
  n.forEach(a => {
    sum += a
    console.log(a);
  });
  console.log("is: " + sum/(n.length));
}

average([0]);
average([1,2,3]);
average([1,2,3,4]);
average([1,4,4,4,1]);
average([-12, -13, 512, 1337]);