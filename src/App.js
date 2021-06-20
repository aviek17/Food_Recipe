import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe";
import "./App.css"


const App = () => {
 const APP_ID = "a7cc582f";
 const APP_KEY = "203ca6b4d61997f65f128289757fe139";

 const [recipes, setRecipes] = useState([])
 const [search, setSearch] = useState("")
 const [querry, setQuerry] = useState('chicken')

 const Example_req = `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`

 
 useEffect( async () => {
  //  console.log("Effect used");
   try{
    await getRecipes();
   }catch(err){
      console.log(err);
   }

  },[querry]);

  const getRecipes = async () => {
    const response = await fetch(Example_req);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = async (event) =>{
    setSearch(event.target.value);
    // console.log(search);
  }

  const getSearch = async (event) => {
    event.preventDefault();
    setQuerry(search);
  }

  return (
   <>
     <div className="App">
        <h2 className="heading">Food Recipe App</h2>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text"  value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit" >Search</button>
        </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe.calories} title={recipe.recipe.label} ingridients={recipe.recipe.ingredientLines} calories={recipe.recipe.calories} img={recipe.recipe.image}/>
          ))}
        </div>
     </div>
   </>
  )
}

export default App
