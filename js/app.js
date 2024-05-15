const Base_URL = "https://www.themealdb.com/api/json/v1";
function getRecipe(event) {
  event.preventDefault();
  // console.log("works")
  const cookBook = event.target["recipe-input"].value;
  const url = Base_URL + `/1/search.php?s=${cookBook}`;
// console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => {console.log(data)});
    for (let i = 0; i < data.meals.length; i++){
        console.log(data.meals[i].strMeal)
      }

}
