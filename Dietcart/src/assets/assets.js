import logo from  './logo.jpg'
import search from './search.png'
import cart from './cart.png'
import home from './home.jpg'
import image11 from './image11.jpg'
import image2 from './image2.jpg'
import image5 from './image5.jpg'
import image3 from './image3.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpeg'
import img3 from './img3.jpg'

export const assets={
    logo,
    search,
    cart,
    home,
    image11,
    image2,
    image5,
    image3,
    img1,
    img2,
    img3
}

export const plan_list=[
    {
        plan_decs:"Detox: Cleanse and Lower GI Levels (7-10 days)",
        plan_image:image11

    },
    {
        plan_decs:"Weight loss plan (Lose 10-30 days)",
        plan_image: image2 
    },
    {
        plan_decs:"Protein Boost: GI Levels (10-12 days)",
        plan_image:image5
    },
    {
        plan_decs:"10 Days Smoothie Challenge",
        plan_image:image3
    }

]


export const subplan_list=[
    {
        subplan_name:"3 Day- Detox Cleanse Plan",
        subplan_img:img1,
        subplan_desc:"A nutritious plan which is a combination of all three levels and helps cleanse the system.",
        Price:"Rs. 3,999.00 /- for 3 Days"
    },

    {
        subplan_name:"Level 1 - Beginner",
        subplan_img:img2,
        subplan_desc:"A combination of liquids, semi-solids and solids.",
        Price:"Rs. 3,999.00 /- for 3 days / Veg"
    },

    {
        subplan_name:"Level 2 - Intermediate",
        subplan_img:img3,
        subplan_desc:"A mix of liquids and semi-solids for a balanced effect.",
        Price:"Rs. 3,999.00 /- for 3 Days"
    }
]
