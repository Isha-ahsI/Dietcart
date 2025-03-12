import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from 'axios'
import {toast} from "react-toastify"
import {assets} from '../../assets/assets'

const List = ({url}) => {
  
  const [list,setlist]=useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', category: '', price: '' });


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

  const handleEdit = (item) => {
    setEditingItem(item._id);
    setFormData({ name: item.name, description: item.description, category: item.category, price: item.price });
  };

  const handleUpdate = async () => {
    const response = await axios.post(`${url}/api/food/update`, { id: editingItem, ...formData });
    if (response.data.success) {
      toast.success("Food updated successfully!");
      setEditingItem(null);
      fetchList();
    } else {
      toast.error("Error updating item");
    }
  };

  

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
          <b>Change</b>
          <b>Cancel</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/image/` + item.image} className='image'alt='' />
            {editingItem === item._id ? (
              <>
                <input type='text' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type='text' value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                <input type='text' value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                <input type='text' value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                <button onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <img src={assets.edit_icon} onClick={() => handleEdit(item)} className='edit' alt=""/>
                {/* <button onClick={() => handleEdit(item)}>Edit</button> */}
                <p onClick={() => removeItem(item._id)} className='remove'>X</p>
              </>
            )}
          </div>
        ))}

      </div>
    </div>
  )
}

export default List
