import React,{useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
       <h2>Top dishes near you</h2>
       <div className="food-display-list">
        {food_list.map((ele,index)=>{
          if( category===ele.category){
            return <FoodItem key={index} id={ele._id} name={ele.name} description={ele.description} price={ele.price} image={ele.image} />
          }
        })}
       </div>
    </div>
  )
}

export default FoodDisplay
