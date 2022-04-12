import React, { Component } from 'react';
import logo from './static/logo.png'
import './App.css';
import Slider from './component/Slider/Slider';
import { NavLink, Route, Navigate, Routes } from 'react-router-dom';

import MainPage from './pages/mainPage'
import Produce from './pages/product'
import Service from './pages/service'
import Contact from './pages/contactUs'

export default class App extends Component {

  childRef = React.createRef();

  goPage = (activeKey) => {
    this.childRef.current.goNext(activeKey);
  }

  render() {
    return (
      <>
        <div className='header'>
          <div className='logo'>
            <img  src={logo}/>
          </div>
          <div>
            <ul>
              <li><NavLink to='/' onClick={()=>{this.goPage(1)}} >网站首页</NavLink></li>
              <li><NavLink to='/product' onClick={()=>{this.goPage(2)}}>稼跃产品</NavLink></li>
              <li><NavLink to='/service' onClick={()=>{this.goPage(3)}}>我们的服务</NavLink></li>
              <li><NavLink to='/contactUs' onClick={()=>{this.goPage(4)}}>联系我们</NavLink></li>
            </ul>
          </div>
        </div>
        <div className='main'>
          <Slider ref={this.childRef}/>
        </div>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/product' element={ <Produce />  } />
          <Route path='/service' element={ <Service />  } />
          <Route path='/contactUs' element={ <Contact />  } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </>
    )
  }
}

