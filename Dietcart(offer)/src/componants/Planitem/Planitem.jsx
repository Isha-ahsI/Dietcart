import React from 'react'
import './Planitem.css'

function Planitem({subplan_name,subplan_img,subplan_desc,Price}) {
  return (
    <div className='plan-item'>
      <div className="plan-item-img-container">
        <img className='plan-item-img' src={subplan_img} alt=''/>
      </div>
      <div className="plan-item-info">
        <div className="plan-item-name">
            <h3>{subplan_name}</h3>
        </div>
        <p className="plan-item-desc">{subplan_desc}</p>
        <p className="plan-item-prise">{Price}</p>
        <a href="#" className="plan-item-buy">BUY IT NOW</a>
      </div>
    </div>
  )
}

export default Planitem
