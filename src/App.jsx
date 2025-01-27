import React from 'react';
import './App.css';
import RecipeList from './RecipeList'; // Correctly importing RecipeList

const App = () => {
  return (
    <div id ="app">
      <h1>WESTERN RECIPES</h1>
      <RecipeList />
    </div>
  );
};

export default App;
