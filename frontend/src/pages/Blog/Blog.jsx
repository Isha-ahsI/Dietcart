import React from 'react'
import './Blog.css'
import { blogPosts } from '../../assets/assets'

function Blog() {
  return (
    <div className='blog-container'>
     
        {blogPosts.map((item,index)=>{
            return(
                <div key={index} className='blog-cart'>
                    
                        <img src={item.image}/>
                        <div className='blog-info'>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    
                    
                </div>
            )
        })}
       
      </div>
   
      

  )
}

export default Blog
