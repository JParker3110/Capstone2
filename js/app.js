const Base_URL = "www.themealdb.com/api/json/v1";
function getRecipe(event) {
    event.preventDefault();

    const cookBook = event.target["recipe"].value;
   
    const url =
      BASE_URL + `/1/search.php?s=${cookBook}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       
        // DOM manipulation / update UI
        document.getElementById("search-area").textContent = `${data.name}`
      });
  }
