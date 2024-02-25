function printFibonacci (n) {
  let before1 = 0,
      before2 = 0;
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      num = i;
    } else {
      num = before1 + before2;
      before2 = before1;
    }
    console.log("Fibonacci's number " + i + " is: " + num);
    before1 = num;
  }
}
printFibonacci(30)
