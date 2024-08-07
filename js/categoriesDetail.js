// Get meals for the selected category
async function getMealsByCategory(category) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayMeals(meals) {
    const mealsDiv = document.getElementById('meals');
    mealsDiv.innerHTML = ''; // Clear previous meals

    meals.forEach(meal => {
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
    const category = localStorage.getItem('selectedCategory');
    if (category) {
        getMealsByCategory(category);
    }
});
