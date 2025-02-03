import React, { useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'


const Add = () => {
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    description:"",
    category:"salad",
    price:""
  })

  const onChangeHandler=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  
  
  const onSubmitHandler = async (event) => {
    // event.preventDefault();
    // const formData = new FormData();
    // formData.append("name",data.name)
    // formData.append("description",data.description)
    // formData.append("price",Number(data.price))
    // formData.append("category",data.category)
    // formData.append("image",image)
  }
  
  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSubmitHandler}>
       
        <div className='add-img-upload flex-col'>
         <p>Upload Image</p>
         <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_icon} alt=''/>
         </label>
         <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
        </div>
        
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type Here'/>
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write Content here'></textarea>
        </div>

        <div className="add-category-price">
          
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
                <option value="Egg Plate">Egg Plate</option>
                <option value="Smoothies">Smoothies</option>
                <option value="Salad">Salad</option>
                <option value="Brown Rice Special">Brown Rice Special</option>
                <option value="Main Course">Main Course</option>
                <option value="Pre & Post Workout Special">Pre & Post Workout Special</option>
                <option value="Dietcombo">Dietcombo</option>
            </select>
          </div>

          <div className="add-price">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="text" name='price' placeholder='Rs.'/>        
          </div>

        </div>
      
        <button type='submit' className='add-btn'>ADD</button>
    
      </form>
      
    </div>
   
    
    
  )
}

export default Add
