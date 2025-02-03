import React,{useContext} from 'react'
import './Subplan.css'
import { StoreContext } from '../../../../Dietcart/src/context/StoreContext'
import Planitem from '../planitem/Planitem'


function Subplan({category}) {
    const { subplan_list } =useContext(StoreContext)
  return (
    <div className='subplan-display' >
      <h1>Detox - Gut Cleanse (All Levels: 3-7 days)</h1>
      <div className="plan-display-list">
        { subplan_list.map((item,index)=>{
            return <Planitem key={index} subplan_name={item.subplan_name} subplan_img={item.subplan_img} subplan_desc={item.subplan_desc} Price={item.Price}/>
        })}
      </div>
    </div>
  )
}

export default Subplan
