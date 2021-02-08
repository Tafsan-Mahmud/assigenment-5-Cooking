

const btn = document.getElementById('button').addEventListener('click', function () {
    searchFood();
});

function searchFood() {
    const food = document.getElementById('input');
    const foodvalue = food.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodvalue}`
    fetch(url)
        .then(respo => respo.json())
        .then(data => {
            if (foodvalue == "" || foodvalue == null) {
                alert("Please Enter A Valid Meal Name");
            }
            else {
                displayfoodCategoris(data.meals);
            }
        })
        .catch(error => alert('You Type Wrong Meal Name'))
}

const displayfoodCategoris = food => {
    const mainDiv = document.getElementById('mainDiv');
    mainDiv.innerHTML = '';
    for (let i = 0; i < food.length; i++) {
        const totalItem = food[i];
        let foodDiv = document.createElement('div')
        foodDiv.className = 'foody';
        const foodInfo = ` <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick = "showFoodDetails('${totalItem.strMeal}')">
        <img id="img-size" src="${totalItem.strMealThumb}">
        <h3 class = "food-name">${totalItem.strMeal}</h3>
        </div> `;
        foodDiv.innerHTML = foodInfo;
        mainDiv.appendChild(foodDiv);
    }
}

const showFoodDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(respo => respo.json())
        .then(data => renderFoodInfo(data.meals[0]))
}
const renderFoodInfo = totalItem => {
    const displayFoodDetail = document.getElementById('popup');
    displayFoodDetail.innerHTML = `
    <img src="${totalItem.strMealThumb}">
    <h2>Name: ${totalItem.strMeal}</h2>
    <h4>Area: ${totalItem.strArea}</h4>
    <h5> item: ${totalItem.strCategory}</h5>`
}






