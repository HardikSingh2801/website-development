/* eslint-disable no-unused-vars */
const FoodItems = () => {

    let fooditems = ['Daal','Green Vegetables','Roti','Salad','Milk','ghee'];

    return ( 
        <ul className="list-group">
        {fooditems.map((item) => (<li key={item}
         className="list-group-item">{item}</li>))} 
    </ul>
    
    );
  
};

export default FoodItems;   