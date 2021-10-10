const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
let textI = "";

while (ingredients[i]) {
  textI += console.log(ingredients[i] + " ");
  i++;
}


// Write a for loop that prints out the contents of ingredients:
for (const ingredient of ingredients) { 
  console.log(ingredient);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
let reverseIngredients = [];
for (let i = ingredients.length - 1; i >= 0; i--) {
  reverseIngredients.push(ingredients[i]);
}
console.log(reverseIngredients);