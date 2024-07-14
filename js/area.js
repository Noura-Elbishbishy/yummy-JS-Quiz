document.addEventListener('DOMContentLoaded', function() {
    async function getReci() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayAreas(data.meals);
            console.log('done step1');
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function displayAreas(areas) {
        try {
            const areasDiv = document.getElementById('areas');
            if (!areasDiv) {
                throw new Error("Element with id 'areas' not found.");
            }
            areas.forEach(area => {
                const areaDiv = document.createElement('div');
                areaDiv.className = 'col-md-3 my-2';
                const areaCard = `
                    <div class="cardArea p-4 justify-content-center area-card text-center" onclick="showAreaDetails('${area.strArea}')">
                    <i class="fa-solid fa-house-laptop w-100 text-white" ></i>
                        <div class="card-bodyArea m-2">
                            <h5 class="card-title">${area.strArea}</h5>
                        </div>
                    </div>
                `;
                areaDiv.innerHTML = areaCard;
                areasDiv.appendChild(areaDiv);
                console.log('step 2: appended area', area.strArea);
            });
        } catch (error) {
            console.error("Error displaying areas:", error);
        }
    }

    getReci();
});

function showAreaDetails(strArea) {
    localStorage.setItem('selectedArea', strArea);
    location.href = './areaDetail.html';
}
