import React from 'react'
import Hero from '../components/Home/Hero'
import Perks from '../components/Home/Perks'
import Trending from '../components/Home/Trending'
import Categories from '../components/Home/Categories'
import Jack from '../components/Home/Jack'
import Newsletter from '../components/Home/Newsletter'
const Home = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <Categories />
      <Jack />
      <Perks />
      <Newsletter />
    </div>
  )
}

export default Home