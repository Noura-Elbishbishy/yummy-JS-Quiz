// // Fetch 20 random recipies mokhtalfen kol mara 3n al ablha 
// htaha 3lshan law feh haga ghlt feha momkn t2olyly aw try2a a3mlha bshkl a7sn y3ny?

// async function getRandomRecipes(numberOfRecipes) {
//     try {
//         let recipes = [];

//         while (recipes.length < numberOfRecipes) {
//             const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//             const data = await response.json();
//             if (data.meals && data.meals.length > 0) {
//                 recipes.push(data.meals[0]); // Add the randomly fetched recipe to the array
//             }
//         }

//         displayCategories(recipes);
//     } catch (error) {
//         console.error("Error fetching recipes:", error);
//     }
// }

// function displayCategories(categories) {
//     const categoriesDiv = document.getElementById('categories');
//     categoriesDiv.innerHTML = ''; // Clear previous categories

//     categories.forEach(meal => {
//         const categoryDiv = document.createElement('div');
//         categoryDiv.className = 'col-md-3';

//         const categoryInfo = `
//             <div class="card category-card my-1" onclick="viewMealDetails(${meal.idMeal})">
//                 <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
//                 <div class="card-body d-flex align-items-center">
//                     <h5 class="card-title">${meal.strMeal}</h5>
//                 </div>
//             </div>
//         `;
//         categoryDiv.innerHTML = categoryInfo;
//         categoriesDiv.appendChild(categoryDiv);
//     });
// }

// function viewMealDetails(mealId) {
//     location.href = `mealDetails.html?id=${mealId}`;
// }

// // Ensure DOM is fully loaded before executing
// document.addEventListener('DOMContentLoaded', () => {
//     getRandomRecipes(20); // Fetching 20 random recipes
// });


//zy al mtlob fe al quiz
async function getSearchResults() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
            displayCategories(data.meals.slice(0, 20));
        }
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}
function displayCategories(categories) {
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = ''; 
    categories.forEach(meal => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'col-md-3';

        const categoryInfo = `
            <div class="card category-card my-1" onclick="viewMealDetails(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body d-flex align-items-center">
                    <h5 class="card-title">${meal.strMeal}</h5>
                </div>
            </div>
        `;
        categoryDiv.innerHTML = categoryInfo;
        categoriesDiv.appendChild(categoryDiv);
    });
}
function viewMealDetails(mealId) {
    location.href = `mealDetails.html?id=${mealId}`;
}

document.addEventListener('DOMContentLoaded', () => {
    getSearchResults(); 
});
