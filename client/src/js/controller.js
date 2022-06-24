import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    // 1. Get id
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // Update view to mark selected result
    resultsView.update(model.getSearchResultsPerPage());

    // 2. Load recipe
    await model.loadRecipe(id);

    // 3. Rendering the recipe
    const renderedData = model.state.recipe;
    recipeView.render(renderedData);

    // 4) Update bookmarks
    bookmarksView.update(model.state.bookmarks);
  } catch (error) {
    recipeView.renderError();
    console.log(error);
  }
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error.message);
    console.log(error);
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    // 2) Load initial search results
    await model.loadSearchResults(query);

    // 3) Render initial search results
    resultsView.render(model.getSearchResultsPerPage());

    // 4) Render pagination buttons
    paginationView.render(model.state.search);

    // 5) Clear search input
    searchView.clearInput();
  } catch (error) {
    console.log(error);
    // resultsView.renderError(error);
  }
};

const controlPagination = function (goToPage) {
  // 3) Render New search results
  resultsView.render(model.getSearchResultsPerPage(goToPage));

  // 4) Render New pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update recipe servings in state
  model.updateServings(newServings);
  // Re-render the recipe
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandleRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  bookmarksView.addHandlerRender(controlBookmarks);
  addRecipeView._addHandlerUpload(controlAddRecipe);
};

init();
