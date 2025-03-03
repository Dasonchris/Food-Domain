import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { useState } from 'react'
import AppDownload from '../../components/AppDownload/AppDownload'
import Footer from '../../components/footer/Footer'
  
function Home() {
  const [category, setCategory] = useState("All");
  return (
  <>

    <Header />
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDisplay category={category} />
    <AppDownload />
      
  </>
  )
}

export default Home
