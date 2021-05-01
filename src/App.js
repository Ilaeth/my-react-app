import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const YOUR_APP_ID = `36fd474c`;
  const YOUR_APP_KEY = "142e0b0fdd5c23033569b17e7146a414";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("");

  useEffect( () => {
    getRecipes()},
     [query]);
  
  const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
  };

  const updateSearch = x =>{
    setSearch(x.target.value);
  };
  
  const getSearch = x => {
    x.preventDefault();
    setQuery(search)
  };

  return(
    <div className="App">
 		  <div className="title">
		    <a className="title" href="refresh"><h1>Make your dish</h1></a>
		  </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" onChange={updateSearch} value={search}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key = {recipe.recipe.label}
        title={recipe.recipe.label}
        kcal={Math.round(recipe.recipe.calories)}
        img={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
        />
      ))}
      </div>
      <div className="footer">
  
      </div>
    </div>
  );
};

export default App;