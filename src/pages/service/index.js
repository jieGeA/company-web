import React, { Component } from 'react'
import Footer from '../../component/Footer/Footer'
import './index.css'

export default class index extends Component {
  render() {
    return (
      <>
        <div className='service_wrapper'>
          <div className='footer_title'><span></span>我们的服务</div>
          <div className='service_info'>
            <div className='service_int'>我们认为公司的成功来源于我们所有员工辛勤的劳动与付出，我们选择彼此信任以及尊重；一个具有包容性的公司能够打造出一个多元化的工作环境，能够增强力营的凝聚力并持续创造商业的成功！</div>
            <div className='service_join'>加入我们！！</div>
            <div className='service_title service_up'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='service_title service_down'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
