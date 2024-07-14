document.addEventListener('DOMContentLoaded', function() {
    async function getIngredients() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayIngredients(data.meals);
            console.log('done step1');
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function displayIngredients(ingredients) {
        try {
            const ingredientsDiv = document.getElementById('ingredients');
            if (!ingredientsDiv) {
                throw new Error("Element with id 'ingredients' not found.");
            }
            ingredients.forEach(ingredient => {
                const ingredientDiv = document.createElement('div');
                ingredientDiv.className = 'col-md-3 my-2';
                const ingredientCard = `
                    <div class="cardIngredient p-4 justify-content-center ingredient-card text-center" onclick="showIngredientDetails('${ingredient.strIngredient}')">
                    <i class="fa-solid fa-drumstick-bite fa-4x w-100 text-white"></i>
                        <div class="card-bodyIngredient m-2">
                            <h5 class="card-title">${ingredient.strIngredient}</h5>
                            <p> ${ingredient.strDescription.substring(0, 100)}</p>
                        </div>
                    </div>
                `;
                ingredientDiv.innerHTML = ingredientCard;
                ingredientsDiv.appendChild(ingredientDiv);
                console.log('step 2: appended ingredient', ingredient.strIngredient);
            });
        } catch (error) {
            console.error("Error displaying ingredients:", error);
        }
    }

    getIngredients();
});

// Show details  ll-selected ingredient
function showIngredientDetails(strIngredient) {
    localStorage.setItem('selectedIngredient', strIngredient);
    location.href = './ingrDetails.html';
}
