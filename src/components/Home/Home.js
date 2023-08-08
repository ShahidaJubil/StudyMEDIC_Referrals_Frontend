import React from 'react'
import Header from '../Header/Header'
import HomeContents from './HomeContents'
import HomePoints from './HomePoints'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <HomeContents/>
      <HomePoints/>
      <Footer/>
    </div>
  )
}

export default Home