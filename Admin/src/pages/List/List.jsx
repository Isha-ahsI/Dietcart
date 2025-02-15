import React from 'react'
import "./List.css"

const List = () => {
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
          <b>Action</b>
        </div>

      </div>
    </div>
  )
}

export default List
