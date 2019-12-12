let number1 = 0;
let randomCook1 = 0;
let randomCook2 = 0;
let randomCook3 = 0;
let userName, user, pantry, recipe, cookbook;
let loadAllRecipes = document.querySelector(".book-btn");
let loadChefRecipes = document.querySelector(".chef-btn");
let loadHeartRecipes = document.querySelector(".heart-btn");
let heartPage = document.querySelector(".favorite");
let allPage = document.querySelector(".all");
let chefPage = document.querySelector(".chef");

let cardSection = document.querySelector(".card-section");
let search;
let searchAnswers;

function getRandomInt(max) {
  return number1 = Math.floor(Math.random() * Math.floor(max));
}
getRandomInt(49) // for random user

function getRandomCookInt1(max) {
  return randomCook1 = Math.floor(Math.random() * Math.floor(max));
}
getRandomCookInt1(47) // for random user

function getRandomCookInt2(max) {
  return randomCook2 = Math.floor(Math.random() * Math.floor(max));
}
getRandomCookInt2(47) // for random user

function getRandomCookInt3(max) {
  return randomCook3 = Math.floor(Math.random() * Math.floor(max));
}
getRandomCookInt3(47) // for random user

userName = $('#user-login').val() || users[0].name;
pantry = new Pantry(users[number1].pantry);
user = new User(1, users[number1].name, users[number1].pantry);
cookbook = new Cookbook(recipeData);
cookbook.loadBook();
user.recipesToCook(cookbook.cookbook);

loadHeartRecipes.addEventListener('click', createFavoritedCards);
loadAllRecipes.addEventListener('click', createAllCards);
loadChefRecipes.addEventListener('click', createChefCards);


function createAllCards(event) {
  //map recipe over the whole array populate the page with recipe cards
  cookbook.cookbook.map(recipe => {
    event.preventDefault();
    allPage.innerHTML += `
    <div id="display-all">
      <button class="build-full"><img class="crop full" src=${recipe.image} alt="${recipe.name}"></button>
      <h4>${recipe.name}</h4>
    </div>`;
  })

};

function createFavoritedCards(event) {
  console.log(user.favorites);
  user.favorites.map(recipe => {
    event.preventDefault();
    heartPage.innerHTML += `
    <div id="display-all">
      <button class="build-full"><img class="crop full" src=${recipe.image} alt="${recipe.name}"></button>
      <h4>${recipe.name}</h4>
    </div>`;
  })
};

function createChefCards(event) {
  console.log(user.availableRecipes);
  user.availableRecipes.map(recipe => {
    event.preventDefault();
    chefPage.innerHTML += `
    <div id="display-all">
      <button class="build-full"><img class="crop full" src=${recipe.image} alt="${recipe.name}"></button>
      <h4>${recipe.name}</h4>
    </div>`;
  })
};


$( document ).ready(function() {
  $('.login').on( "click", function() {
    window.location = 'index.html';
  });

  $('#user-name').html(user.name);


  $('.recipe').html(`<div class="recipe"><h1 class="recipe-header">${cookbook["cookbook"][number1].name}</h1><p class="recipe-ingredients">Ingredients: <br />${cookbook["cookbook"][number1].ingredients[0].name}, ${cookbook["cookbook"][number1].ingredients[1].name}, ${cookbook["cookbook"][number1].ingredients[2].name}, ${cookbook["cookbook"][number1].ingredients[3].name} cont...<hr></p><p class="recipe-instructions">1: ${cookbook["cookbook"][number1].instructions[0].instruction} <br/> 2: ${cookbook["cookbook"][number1].instructions[1].instruction} <br/> 3: ${cookbook["cookbook"][number1].instructions[2].instruction} <br/> 4: ${cookbook["cookbook"][number1].instructions[3].instruction} <br/> cont...<p></div>`)

  $('#user-login').attr("value", user.name)

  $('#recipe-image').attr("src", cookbook["cookbook"][number1].image);
  $('#recipe-image').attr("alt", cookbook["cookbook"][number1].name);


  $('.favorites-one').attr("src", cookbook["cookbook"][1].image);
  $('.favorites-one').attr("alt", cookbook["cookbook"][1].name);
  $('.favorites-one').on("click", function() {
    user.favorites.push(cookbook["cookbook"][1]);
    console.log(user.favorites)
  });

  $('.favorites-two').attr("src", cookbook["cookbook"][2].image);
  $('.favorites-two').attr("alt", cookbook["cookbook"][2].name);
  $('.favorites-two').on("click", function() {
    user.favorites.push(cookbook["cookbook"][2]);
    console.log(user.favorites);

  });

  $('.favorites-three').attr("src", cookbook["cookbook"][3].image);
  $('.favorites-three').attr("alt", cookbook["cookbook"][3].name);
  $('.favorites-three').on("click", function() {
    user.favorites.push(cookbook["cookbook"][3]);
    console.log(user.favorites);
  })

  $('.available-one').attr("src", cookbook["cookbook"][5].image);
  $('.available-one').attr("alt", cookbook["cookbook"][5].name);

  $('.available-two').attr("src", cookbook["cookbook"][6].image);
  $('.available-two').attr("alt", cookbook["cookbook"][6].name);

  $('.available-three').attr("src", cookbook["cookbook"][9].image);
  $('.available-three').attr("alt", cookbook["cookbook"][9].name);

  $('.all-recipes-one').attr("src", cookbook["cookbook"][randomCook1].image);
  $('.all-recipes-one').attr("alt", cookbook["cookbook"][randomCook1].name);

  $('.all-recipes-two').attr("src", cookbook["cookbook"][randomCook2].image);
  $('.all-recipes-two').attr("alt", cookbook["cookbook"][randomCook2].name);

  $('.all-recipes-three').attr("src", cookbook["cookbook"][randomCook3].image);
  $('.all-recipes-three').attr("alt", cookbook["cookbook"][randomCook3].name);


  $('.search-button').on("click", function() {
    search = $('#search').val();
    // console.log(search)
    findSearchItem(search);

  })
  function findSearchItem(input) {
    if (cookbook["cookbook"].filter(cookbook => cookbook.name.includes(input)) ) {
      searchAnswers = cookbook["cookbook"].filter(cookbook => cookbook.name.includes(input));
    };
    if (cookbook["cookbook"].filter(cookbook => cookbook.tags.includes(input)) ) {
      searchAnswers = cookbook["cookbook"].filter(cookbook => cookbook.tags.includes(input));
    };
    console.log(searchAnswers);
    displaySearch();
  };

  function displaySearch() {
    $('#recipe-image').attr("src", searchAnswers[0].image);
    $('#recipe-image').attr("alt", searchAnswers[0].name);
    $('.recipe').html(`<h1 class="recipe-header">${searchAnswers[0].name}</h1><p class="recipe-ingredients">Ingredients: <br> ${searchAnswers[0].ingredients[0].name}, ${searchAnswers[0].ingredients[1].name}, ${searchAnswers[0].ingredients[2].name}, ${searchAnswers[0].ingredients[2].name}</p> <hr> <p class="recipe-instructions">Instructions: ${searchAnswers[0].instructions[0].instruction} <br></p>`)

    // $('#display-all').html(
    //     `<div id="display-all">
    //       <button class="build-full"><img class="crop full" src="${searchAnswers[1].image}" alt="${searchAnswers[1].name}"></button>
    //       <h4>${searchAnswers[1].name}</h4>
    //     </div>`
    //   );

      // $('#display-all').html(
      // `<header class="recipe-header">
      //   <img id="recipe-image" src="${searchAnswers[0].image}" alt="${searchAnswers[0].name}">
      //   <div class="recipe">
      //     <h1>"${searchAnswers[0].name}"</h1>
      //     <p class="recipe-ingredients">Ingredients: <br> ${searchAnswers[0].ingredients} <hr> <p class="recipe-instructions">Instructions: ${searchAnswers[0].instructions[0].instruction} <br>
      //     </p>
      //   </div>
      // </header>
      // <h2>All Available Recipes</h2>
      // <div class="all display">
      //   <li><img class="favorites-one crop" alt="${searchAnswers[1].name}" src="${searchAnswers[1].image}"></li>
      //   <li><img class="favorites-two crop" alt="${searchAnswers[2].name}" src="${searchAnswers[2].image}"></li>
      //   <li><img class="favorites-three crop" alt="${searchAnswers[3].name}" src="${searchAnswers[3].image}"></li>
      //   <li><a href="favorites.html"><img class="menu-select-btn heart-btn" id="heart-btn" src="../assets/heart-btn2.jpg" alt="favorites image"></a></li>
      // </div>`);

    $('#favorite-recipes').html(
      `<ul id="favorite-recipes">
      <li><img class="favorites-one crop" alt="${searchAnswers[1].name}" src="${searchAnswers[1].image}"></li>
      <li><img class="favorites-two crop" alt="${searchAnswers[2].name}" src="${searchAnswers[2].image}"></li>
      <li><img class="favorites-three crop" alt="${searchAnswers[3].name}" src="${searchAnswers[3].image}"></li>
      <li><a href="favorites.html"><img class="menu-select-btn heart-btn" id="heart-btn" src="../assets/heart-btn2.jpg" alt="favorites image"></a></li>
      </ul>`
    );
    $('#available-recipes').html(
      `<ul id="available-recipes">
      <li><img class="favorites-one crop" alt="${searchAnswers[4].name}" src="${searchAnswers[4].image}"></li>
      <li><img class="favorites-two crop" alt="${searchAnswers[5].name}" src="${searchAnswers[5].image}"></li>
      <li><img class="favorites-three crop" alt="${searchAnswers[6].name}" src="${searchAnswers[6].image}"></li>
      <li><a href="favorites.html"><img class="menu-select-btn heart-btn" id="heart-btn" src="../assets/heart-btn2.jpg" alt="favorites image"></a></li>
      </ul>`
    );
    $('#all-recipes').html(
      `<ul id="all-recipes">
      <li><img class="favorites-one crop" alt="${searchAnswers[7].name}" src="${searchAnswers[7].image}"></li>
      <li><img class="favorites-two crop" alt="${searchAnswers[8].name}" src="${searchAnswers[8].image}"></li>
      <li><img class="favorites-three crop" alt="${searchAnswers[9].name}" src="${searchAnswers[9].image}"></li>
      <li><a href="favorites.html"><img class="menu-select-btn heart-btn" id="heart-btn" src="../assets/heart-btn2.jpg" alt="favorites image"></a></li>
      </ul>`
    );

  }


}); // end jQuery
