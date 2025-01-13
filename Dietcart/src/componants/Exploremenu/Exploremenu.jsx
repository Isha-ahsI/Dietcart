import React from 'react'
import './Exploremenu.css'
import { assets } from '../../assets/assets'

const Exploremenu = () => {
    return (
        <div className="food-gallery">
          <div className="food-item">
            <img src={assets.image11} alt="Smoothie and parfait" />
            <p>Detox: Cleanse and Lower GI Levels (7-10 days)</p>
          </div>
          <div className="food-item">
            <img src={assets.image2} alt="Skinny rolls and drinks" />
            <p>Weight loss plan (Lose 10-30 days)</p>
          </div>
          <div className="food-item">
            <img src={assets.image5} alt="Grilled veggies and rice" />
            <p>Protein Boost: GI Levels (10-12 days)</p>
          </div>
          <div className="food-item">
            <img src={assets.image3} alt="Smoothie bowl and juice" />
            <p>10 Days Smoothie Challenge</p>
          </div>
        </div>
      );
}

export default Exploremenu
