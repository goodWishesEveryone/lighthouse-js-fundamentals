/* const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// Returns : 
// Don't forget your umbrella!
// Now you're ready to go outside!
*/



/*
const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// Returns : 
// Now you're ready to go outside!
*/




/*
const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//Retuns:
//Make sure you pick out a scarf!
//Now you're ready to go outside!
*/




/*
const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//Returns:
//Don't forget your umbrella!
//Make sure you pick out a scarf!
//Now you're ready to go outside!
*/



//What about for it to tell us that short sleeves are OK?
/*
const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

//Short sleeves are fine.
*/



/*
const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//Short sleeves won't cut it!
//Now you're ready to go outside!
*/




//What does temperature have to be for the program to tell us to pick a scarf?
/*
const temperature = -12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//Make sure you pick out a scarf!
//Now you're ready to go outside!
*/


/*
const temperature = 0;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//Short sleeves won't cut it!
//Now you're ready to go outside!
*/


//***************************************************************************
//Here we're checking that both conditions, isCitizen and age > 18 are true 
//for the if statement overall to evaluate to true. 
//If any of our two conditions are false, then the whole expression is false.
//***************************************************************************
/*
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//You are eligible to vote.
*/



/*
//Here our if statement is true when temperature is either below -40 or above 40 degrees.
//const temperature = -63;
//const temperature = 63;
//const temperature = -40;        // not handled
const temperature = 40;          // not handled
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//Maybe going outside isn't such a great idea…
*/

/*
**********************************************
! operator reverses the value of raining. 
That is, if raining is true, !raining is false. 
If raining is false, !raining is true.
************************************************/
//const raining = false;        //Leave your umbrella at home!
const raining = true;         //if condition has to be TRUE 
if (!raining) {
  console.log("Leave your umbrella at home!");
}


