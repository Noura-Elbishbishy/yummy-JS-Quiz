//get reci -->for index page
async function getRandomRecipes(numberOfRecipes) {
  try {
      let recipes = [];

      while (recipes.length < numberOfRecipes) {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
          const data = await response.json();
          recipes.push(data.meals[0]); // Add the randomly fetched recipe to the array
      }
      displayCategories(recipes);
  } catch (error) {
      console.error("Error fetching recipes:", error);
  }
}
function displayCategories(categories) {
  const categoriesDiv = document.getElementById('categories');

  categories.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'col-md-3';

      const categoryInfo = `
          <div class="card category-card  my-1">
              <img src="${category.strMealThumb}" class="card-img-top" alt="${category.strMeal}">
              <div class="card-body  d-flex align-items-center">
                  <h5 class="card-title">${category.strMeal}</h5>
            </div>
          </div>
      `;
      categoryDiv.innerHTML = categoryInfo;
      categoriesDiv.appendChild(categoryDiv);
  });
}
getRandomRecipes(20); // Fetching 20 random reci

