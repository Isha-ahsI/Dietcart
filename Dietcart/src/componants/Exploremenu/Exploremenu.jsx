import React from 'react'
import './Exploremenu.css'
import { plan_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
    return (
        <div className="food-gallery">
          <h1>Explore Our Meal Plans</h1>
          <p className='info-plan'>Choose the cleanse and maintain plan that suits your body.</p>
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
          <hr/>
        </div>
      );
}

export default Exploremenu
