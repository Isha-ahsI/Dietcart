import React, { useState } from 'react'
import './Home.css'
import Header from '../../componants/Header/Header.jsx'
import Exploremenu from '../../componants/Exploremenu/Exploremenu.jsx'
import Subplan from '../../componants/Subplans/Subplan.jsx';

function Home() {

  const [category,setCategory] = useState("All");
  return (
        <div>
            <Header/>
            <Exploremenu category={category} setCategory={setCategory}/>
            <Subplan category={category}/>
        </div>
  )
}

export default Home
