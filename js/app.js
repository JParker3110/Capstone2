const Base_URL = "https://www.themealdb.com/api/json/v1";
function getRecipe(event) {
  event.preventDefault();
  // console.log("works")
  const cookBook = event.target["recipe-input"].value;
  const url = Base_URL + `/1/search.php?s=${cookBook}`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const foodDiv = document.getElementById("food");

      for (let i = 0; i < data.meals.length; i++) {
        const foodItem = document.createElement("p");
        foodItem.textContent = data.meals[i].strInstructions;
        foodDiv.appendChild(foodItem);

        for (let j = 0; j < 20; j++) {
          const ingredient = data.meals[i]["strIngredient" + j];
          if (ingredient) {
            const ingredientElement = document.createElement("p");
            ingredientElement.textContent = ingredient;
            foodDiv.appendChild(ingredientElement);
          }
        }
      }
    });
}
