// search reci---
//  by name
async function searchByName() {
    const searchInput = document.getElementById('searchByNameInput').value.trim(); 
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
// by First letter 
async function searchByFLetter() {
    const searchInput = document.getElementById('searchByFLetterInput').value.trim();

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
function displayMeals(meals) {
    const mealsDiv = document.getElementById('food-items');
    mealsDiv.innerHTML = ''; // Clear prev results

    if (!meals) {
        mealsDiv.innerHTML = '<p class="text-center">No meals found.</p>';
        return;
    }

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-3';

        const mealInfo = `
            <div class="card category-card my-1" onclick="viewMealDetails(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body  d-flex align-items-center">
                    <h5 class="card-title">${meal.strMeal}</h5>
                   
                </div>
            </div>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}

function viewMealDetails(mealId) { // lazem ahot al onclick="viewMealDetails(${meal.idMeal})"
    location.href = `mealDetails.html?id=${mealId}`;
}