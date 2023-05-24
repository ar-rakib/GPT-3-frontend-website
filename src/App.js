import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './container';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    <h1>Hello World</h1>
  </div>
);

export default App
