
import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import Banner from './components/banner/Banner';
import MainContainer from './components/main/MainContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div>
        <Navbar />
        <Carousel />
        <Banner />
        <MainContainer />
      </div>

    
    )
  }
}

export default App;