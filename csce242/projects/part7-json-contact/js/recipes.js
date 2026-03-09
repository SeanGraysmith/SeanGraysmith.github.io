class Recipe {
    constructor(id, imageLink, title, cost, time, pageLink){
        this.id = id;
        this.imageLink = imageLink;
        this.title = title;
        this.cost = cost;
        this.time = time;
        this.pageLink = pageLink;
    }

    // get the card for this recipe
    get card(){
        const recipeSection = document.createElement("section");
        recipeSection.classList.add("recipe-list-card");

        // create image and append
        const recipeImage = document.createElement("img");
        recipeImage.src = this.imageLink;
        recipeImage.alt = this.title;
        recipeSection.append(recipeImage);

        // create h3 and append
        const recipeTitle = document.createElement("h3");
        recipeTitle.innerHTML = this.title;
        recipeSection.append(recipeTitle);

        // create attribute div and attributes
        const attributeDiv = document.createElement("div");
        attributeDiv.classList.add("recipe-list-attributes");

        const costP = document.createElement("p");
        costP.innerHTML = "$" + this.cost + "/Serving";
        attributeDiv.append(costP);

        const timeP = document.createElement("p");
        timeP.innerHTML = this.time + " minutes";
        attributeDiv.append(timeP);

        recipeSection.append(attributeDiv);

        const recipeButton = document.createElement("button");
        recipeButton.classList.add("action-button");
        recipeButton.innerHTML = "View Recipe";

        recipeButton.onclick = () => {
            // change window href to the page for the recipe
            window.location.href = this.pageLink;
        };
        recipeSection.append(recipeButton);
        return recipeSection;
    }
}

// parsing json
// heavily influenced by https://github.com/portiaportia/portiaportia.github.io/blob/master/csce242/examples/03-js/js/jsons.js

const baseURL = "https://seangraysmith.github.io/csce242/json"

// get the json content
const getRecipeCards = async() => {
    const url = `${baseURL}/recipe-cards.json`;
    const response = await fetch(url);
    return response.json();
};

const addRecipes = async() => {
    const recipes = await getRecipeCards();
    const recipesList = document.getElementById("recipes-list");

    let columnToUse = document.createElement("div");
    let counter = 1;
    recipes.forEach((recipe, index) => {
        const nextItem = recipes[index + 1];
        const newRecipeCard = new Recipe(recipe.id, recipe.img, recipe.title, recipe.cost, recipe.time, recipe["page-link"]).card;

        columnToUse.append(newRecipeCard);
        if (counter == 2 || !nextItem) {  // if we are at the second item, or there is no next item
            columnToUse.classList.add("column");
            recipesList.append(columnToUse);
            columnToUse = document.createElement("div");
            counter = 1;
        } else {
            counter++;
        }
    });
    createDynamicPages();
};

// dynamic page generation logic
// essentially, 3 columns are shown at a time
function createDynamicPages() {
    const recipesList = document.getElementById("recipes-list");
    const columns = Array.from(recipesList.children); // gets every child (column)
    const COLUMNS_PER_PAGE = 3;
    let currentPage = 1;
    const totalPages = Math.ceil(columns.length / COLUMNS_PER_PAGE);

    function showPageNum(pageNum) {
        currentPage = pageNum;

        // show columns for this page, hide others
        columns.forEach((column, i) => {
            const columnPage = Math.floor(i / COLUMNS_PER_PAGE) + 1;
            column.style.display = columnPage === pageNum ? "" : "none";
        });

        // set page display text
        document.getElementById("recipes-pagenum-header").innerHTML = 
        `Showing page ${pageNum} of ${totalPages}`;

        // set buttons to active and inactive
        document.querySelectorAll("#page-number-buttons button").forEach((button, i) => {
            button.classList.toggle("inactive-button", i + 1 !== pageNum);
        });
    }

    // create page buttons for number of pages. 
    const buttonsDiv = document.getElementById("page-number-buttons");
    buttonsDiv.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add("action-button");
        if (i !== 1) {
            // only set inactive when not page 1 button
            button.classList.add("inactive-button"); 
        }
        button.innerHTML = i;
        button.onclick = () => { // show its page when clicked
            showPageNum(i);
        };
        buttonsDiv.append(button);
    }
    showPageNum(1); //start with first page shown.
}

addRecipes();