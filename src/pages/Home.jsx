import React from 'react'
import Announcement from '../componentns/Announcement'
import Categories from '../componentns/Categories'
import Navbar from '../componentns/Navbar'
import Slider from '../componentns/Slider'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
    </div>
  )
}

export default Home