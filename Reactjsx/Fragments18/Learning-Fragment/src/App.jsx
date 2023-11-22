/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/fooditems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  // let fooditems = ['Daal','Green Vegetables','Roti','Salad','Milk','ghee'];
 
  return(
    <>
    <h1> Healthy Food</h1>
    {/* {fooditems.length === 0  && <h3> I am still hungry</h3> } */}
    <ErrorMessage></ErrorMessage>

    <FoodItems></FoodItems>
</>
  )
  
}

export default App
