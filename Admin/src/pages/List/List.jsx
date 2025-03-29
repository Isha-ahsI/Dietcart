import React, { useEffect, useState } from 'react';
import "./List.css";
import axios from 'axios';
import { toast } from "react-toastify";
import { assets } from '../../assets/assets';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', category: '', price: '', image: null });
  // const [previewImage, setPreviewImage] = useState(null); // For previewing uploaded image

  // Fetch food list
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching data");
    }
  };

  // Remove food item
  const removeItem = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error removing item");
    }
  };

  // Handle edit food
  const handleEdit = (item) => {
    setEditingItem(item._id);
    setFormData({ name: item.name, description: item.description, category: item.category, price: item.price, image: null });
    // setPreviewImage(`${url}/image/${item.image}`); // Show existing image
  };

  // Handle file/image change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    //   setPreviewImage(URL.createObjectURL(file)); // Show preview
    }
  };

  // Handle update food
  const handleUpdate = async () => {
    const form = new FormData();
    form.append("id", editingItem);
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("category", formData.category);
    form.append("price", formData.price);
    if (formData.image) {
      form.append("image", formData.image);
    }

    const response = await axios.post(`${url}/api/food/update`, form, { headers: { "Content-Type": "multipart/form-data" } });
    
    if (response.data.success) {
      toast.success("Food updated successfully!");
      setEditingItem(null);
      fetchList();
    } else {
      toast.error("Error updating item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <h2>All Foods List</h2>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Category</b>
          <b>Price</b>
          <b>Change</b>
          <b>Cancel</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/image/` + item.image} className='image' alt='' />
            {editingItem === item._id ? (
              <>
                <input type='text' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type='text' value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                <input type='text' value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                <input type='text' value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                
                {/* Image Upload */}
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {/* {previewImage && <img src={previewImage} alt="Preview" className='preview-image' />} */}

                <button onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <img src={assets.edit_icon} onClick={() => handleEdit(item)} className='edit' alt="" />
                <p onClick={() => removeItem(item._id)} className='remove'>X</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
