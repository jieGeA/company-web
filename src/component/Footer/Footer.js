import React, { Component } from 'react'
import img1 from '../../static/second.jpg'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer_wrapper'>
                <div className='footer_title'>
                    <span></span>
                    联系我们
                </div>
                <div className='footer_main'>
                    <div className='footer_info'>
                        <div>销售经理：唐伟翔</div>
                        <div>联系方式：13636401452</div>
                        <div>QQ：2121165316</div>
                        <div>传真：021-56600096</div>
                        <div>邮箱：2121165316@qq.com</div>
                    </div>
                    <div className='footer_info'>
                        <div>销售经理：罗晓英</div>
                        <div>联系方式：17321074940</div>
                        <div>QQ：1952688786</div>
                        <div>传真：021-56600096</div>
                        <div>邮箱：shanghaijiayue@foxmail.com</div>
                    </div>
                    <div className='footer_imgWrapper'>
                        <img src={img1} alt="" />
                        <div>扫一扫加微信</div>
                    </div>
                </div>
            </div>
        )
    }
}
