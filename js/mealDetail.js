document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get('id');

    if (mealId) {
        fetchMealDetails(mealId);
    }
});

function fetchMealDetails(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => {
            if (data.meals && data.meals.length > 0) {
                const meal = data.meals[0];
                displayMealDetails(meal);
            }
        })
        .catch(error => {
            console.error('Error fetching meal details:', error);
        });
}
function displayMealDetails(meal) {
    document.getElementById('meal-image').src = meal.strMealThumb;
    document.getElementById('meal-name').textContent = meal.strMeal;
    document.getElementById('meal-instructions').textContent = meal.strInstructions;
    document.getElementById('meal-area').textContent = `Area: ${meal.strArea}`;
    document.getElementById('meal-category').textContent = `Category: ${meal.strCategory}`;
    document.getElementById('meal-youtube').href = meal.strYoutube;
    document.getElementById('meal-source').href = meal.strSource;

    const ingredientsList = document.getElementById('meal-ingredients');
    ingredientsList.innerHTML = ''; // Clear previous ingredients

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            const div = document.createElement('div');
            div.className = 'bg-primary text-white rounded p-2 m-1';
            div.textContent = `${ingredient} - ${measure}`; // hy3ml zy space aw fasel bsbb al - byn kol ingrediant w al b3do
            ingredientsList.appendChild(div); //h3ml new child div lkol ingrediant in the list
        }
    }
}
