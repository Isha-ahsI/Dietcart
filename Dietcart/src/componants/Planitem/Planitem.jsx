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
            <p>{subplan_name}</p>
        </div>
        <p className="plan-item-desc">{subplan_desc}</p>
        <p className="plan-item-prise">Rs.{Price}</p>
      </div>
    </div>
  )
}

export default Planitem
