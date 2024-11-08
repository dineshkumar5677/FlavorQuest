import React, { useState, useEffect } from "react";
import spinner from './spinner.gif';
const SearchDrop = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors
  const title = props.title;

  useEffect(() => {
    const fetchIngredients = async () => {
     
        
     
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/ingredients/search?apiKey=b3ef11e40c3d4bc1bb7b924088e99290&query=${title}`
        );
        const data = await response.json();
        if (data.results) {
          setIngredients(data.results);
        } else {
          setIngredients([]);
        }
      } catch (error) {
        console.error("Error fetching ingredients:", error);
        setError("Failed to fetch ingredients");
      } finally {
        setLoading(false); 
      } 
    };

    fetchIngredients();
  }, [title]);

  // Loading or error state rendering
  if (loading) return <img src={spinner}/>;
  if (error) return <div>{error}</div>;

  return (
    <div>
   
      {ingredients.map((ingredient) => (
        <h4 key={ingredient.id}>{ingredient.name}</h4> // Add key prop
      ))}
    </div>
  );
};

export default SearchDrop;
