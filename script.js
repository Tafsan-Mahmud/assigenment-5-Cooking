

const btn = document.getElementById('button').addEventListener('click' , function(){
    searchFood();
    // document.getElementById('input').value; 
});

function searchFood(){
    const food = document.getElementById('input');
    const foodvalue = food.value ;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodvalue}`
    fetch(url)
    .then(respo => respo.json())
    .then(data => {
        if(foodvalue == "" || foodvalue == null){
                alert("please enter a valid meal Name");
            }
            else{
                displayfoodCategoris(data.meals);
            }
    })
    .catch(error => alert('you type wrong meal Name'))
}

const displayfoodCategoris = food =>{
    const mainDiv = document.getElementById('mainDiv');
    mainDiv.innerHTML = '';
    for (let i = 0; i < food.length; i++){
        const totalItem = food[i];
        let foodDiv = document.createElement('div')
        foodDiv.className = 'foody';
        const foodInfo = ` <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick = "showCountryDetails('${totalItem.strMeal}')">
        <img id="img-size" src="${totalItem.strMealThumb}">
        <h3 class = "food-name">${totalItem.strMeal}</h3>
        </div> `;
        foodDiv.innerHTML = foodInfo;
        mainDiv.appendChild(foodDiv);
    }
}

const showCountryDetails = name =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(respo => respo.json())
    .then(data =>renderFoodInfo(data.meals[0]))
 }
 const renderFoodInfo = totalItem =>{
    const displayFoodDetail = document.getElementById('popup');
    displayFoodDetail.innerHTML = `
    <img src="${totalItem.strMealThumb}">
    <h2>Name: ${totalItem.strMeal}</h2>
    <h4>Area: ${totalItem.strArea}</h4>
    <h5> item: ${totalItem.strCategory}</h5>
    <h6>Order Id: ${totalItem.idMeal}</h6>
    `
 }






