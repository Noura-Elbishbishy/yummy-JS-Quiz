async function getMealsByIngredient(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayMeals(meals) {
    const mealsDiv = document.getElementById('meals');
    mealsDiv.innerHTML = ''; // Clear previous meals

    meals.slice(0, 20).forEach(meal => { //20 meal bs al shown 
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-3';

        const mealInfo = `
            <div class="card meal-card my-1" onclick="viewMealDetails(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body d-flex align-items-center">
                    <h5 class="card-title">${meal.strMeal}</h5>
                </div>
            </div>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}

function viewMealDetails(mealId) {
    location.href = `mealDetails.html?id=${mealId}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const ingredient = localStorage.getItem('selectedIngredient');
    if (ingredient) {
        getMealsByIngredient(ingredient);
    }
});
