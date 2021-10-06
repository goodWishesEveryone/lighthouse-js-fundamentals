/*const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
*/
/* Print
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Until the sun comes up! */


const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

/*
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
*change key*
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!*/