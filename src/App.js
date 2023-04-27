import React from 'react'
// import Article from './components/article/Article'
// import Brand from './components/brand/Brand'
// import CTA from './components/cta/CTA'
// import Feature from './components/feature/Feature'
// import Navbar from './components/navbar/Navbar'

// we can write all of this line in a single line because of index.js file

import { Blog,Header,Footer,Possibility, WhatGPT3 } from './container'
import { Brand, CTA, Feature , Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
