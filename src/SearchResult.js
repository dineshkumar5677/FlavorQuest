import React, { useState, useEffect } from 'react';
import './searchResult.css';
import spinner from './spinner.svg';

export default function SearchResult(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/ingredients/${props.id}/information?apiKey=ad8ecf65618f425286585a29a5ca07d3&amount=1`
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props.id]);
  console.log(data);

  // Loading and error handling
  if (loading) {
    return  <img src={spinner}/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  // Extract values from the data
  const amount = data.amount || 'N/A';
  const unitarr = data.shoppingListUnits || [];
  console.log(unitarr);
  const unit = unitarr.length > 0 ? unitarr[0] : 'unit';  // Fallback for unit
  const kcalarr = data.nutrition.nutrients || [];
  const kcal = kcalarr.find((nutrient) => nutrient.name === 'Calories')?.amount || 'N/A';

  return (
    // <div className="card">
    //   <img
    //     className="card-img-top"
    //     src={`https://img.spoonacular.com/ingredients_500x500/${props.img}`}
    //     alt={props.title}
    //   />
    //   <div className="card-body">
    //     <h5 className="card-title"></h5>
    //     <p className="card-text"></p>
    //     <a href="#" className="btn btn-primary">Add</a>
    //   </div>
    // </div>
    <div className="container">
      <div className="pizza-image">
        <img src={`https://img.spoonacular.com/ingredients_500x500/${props.img}`}  alt={props.title} />
      </div>
      <div className="pizza-details">
        <h2 className="title">{props.title}</h2>
        <p className="description">{kcal} kcal / {amount} {unit}</p>
        
        <button className="buy-button">Add to Diet</button>
      </div>
    </div>
  );
}
