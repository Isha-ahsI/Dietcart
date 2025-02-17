import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from 'axios'
import {toast} from "react-toastify"

const List = ({url}) => {
  
  const [list,setlist]=useState([]);

  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/food/list`);
    
    if(response.data.success){
      setlist(response.data.data);
    }
    else{
      toast.error("error")
    }
  }

  const removeItem= async(foodId)=>{
    const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("error");
    }
    
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <h2>All Foods List</h2>
      <div className='list-tabel'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Categorys</b>
          <b>Price</b>
          <b>Cancel</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/image/`+item.image} alt=''/>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeItem(item._id)} className='remove'>X</p>



            </div>
          )
        })}

      </div>
    </div>
  )
}

export default List
