import React from 'react'
import './Exploremenu.css'
import { plan_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
    return (
        <div className="food-gallery">
          <div className="food-item">
           {plan_list.map((item,index)=>{
            return(
              <div onClick={()=>setCategory(prev=>prev===item.plan_decs?"All":item.plan_decs)} key={index} className='plan-list-item'>
                <img className={category===item.plan_decs?"active":""}src={item.plan_image} alt=''/>
                <p>{item.plan_decs}</p>


              </div>

            )
           })
           }
          </div>
          
        </div>
      );
}

export default Exploremenu
