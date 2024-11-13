// import SearchDrop from "./searchDrop";
import SearchResult from "./SearchResult";
import "./App.css";
import { useState,useEffect } from "react";
import spinner from './spinner.svg';

function App() {
 
  let [tit, settit] = useState("");

  function searchbtn() {
    console.log(tit);
    settit(document.getElementById("searchbox").value);
    console.log(tit);

  }

  const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true); // To track loading state
    const [error, setError] = useState(null); 
   

  
    useEffect(() => {
      const fetchIngredients = async () => {
       
          
       
        try {
          const response = await fetch(
            `https://api.spoonacular.com/food/ingredients/search?apiKey=ad8ecf65618f425286585a29a5ca07d3&query=${tit}`
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
    }, [tit]);
  
    // Loading or error state rendering
    if (loading) return <img src={spinner}/>;
    if (error) return <div>{error}</div>;


  return (
    <>
      <div className="in-box">

        <input
          id="searchbox"
          className="input"
         
          placeholder="Search the Food Item here"
        
        
        />
        <button onClick={searchbtn} className="btnn">
          Search
        </button>
      </div>
      {!(tit === '') && 
  
      <div className="item-box">
      {
           ingredients.map((element) => {
            console.log(element);
            return (
                <SearchResult title={element.name} id={element.id} img={element.image}/>
            )
          })
      } 
      </div>}

      
    </>
  );
}

export default App;
