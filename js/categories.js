// Get categories
async function getReci() {
  try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      displayCategories(data.categories);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

function displayCategories(categories) {
  const categoriesDiv = document.getElementById('categories');

  categories.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'col-md-3';

      const categoryInfo = `
          <div class="card category-card my-1" onclick="showDetails('${category.strCategory}')">
              <img src="${category.strCategoryThumb}" class="card-img-top" alt="${category.strCategory}">
              <div class="card-body align-items-center">
                  <h5 class="card-title">${category.strCategory}</h5>
                  <p class="card-text">${category.strCategoryDescription.substring(0, 150)}...</p> 
              </div>
          </div>
      `; // .substring(0, 150) de ht-limit number of letters

      categoryDiv.innerHTML = categoryInfo;
      categoriesDiv.appendChild(categoryDiv);
  });
}

getReci();

function showDetails(strCategory) {
  localStorage.setItem('selectedCategory', strCategory);
  location.href = './categDetail.html';
}
