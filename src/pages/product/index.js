import React, { Component } from 'react'
import Footer from '../../component/Footer/Footer'
import './index.css'
import imgTable from '../../static/table.png'
import img1 from '../../static/product/1.jpg'
import img2 from '../../static/product/2.jpg'
import img3 from '../../static/product/3.jpg'
import img4 from '../../static/product/4.jpg'
import img5 from '../../static/product/5.jpg'
import img6 from '../../static/product/6.jpg'


export default class index extends Component {
  render() {
    return (
      <>
        <div className='product_wrapper'>
          <div className='footer_title'><span></span>稼跃产品</div>
          <div className='product_red'>T特殊用牌号：</div>
          <div className='product_special'>15WTG1500、B15AT1500、B15AHT1200、B15AT1200、B15AHT1000、20WTG1200、10WTG1500、B20AHT1200、B20AT1200、B25AHV1300、B27AYSX-1、B27AHV1300 B27AHV1400、B30AHV1500、B30AHVS-1、B30AV1500、B30AYSX-2、B30A230、30WGP1600、B30AY-1、B40A400、MHX、MZ01、70WK340、75WK400、80WK420、WCF-100D等。</div>
          <div className='product_detailWrapper'>
            <div className='product_detail'>
              <div>新日铁系列：</div>
              <div>35H300、35H250、35H230、50H250、50H310等。</div>
            </div>
            <div className='product_detail'>
              <div className='product_detailTitle'>宝钢马达专用系列：</div>
              <div>B50AM470、B50AM1300等。</div>
            </div>
            <div className='product_detail'>
              <div className='product_detailTitle'>宝钢0.35系列：</div>
              <div>B35A210、B35A230、B35A250、B35A270、B35A300、B35A360、B35A440、B35A550、B35AH300、B35AR300、B35AY-1等。</div>
            </div>
            <div className='product_detail'>
              <div className='product_detailTitle'>宝钢50A系列：</div>
              <div>B50A230、B50A250、B50A270、B50A290、B50A310、B50A350、B50A400、B50AH400、B50A470、B50AH470、B50A600、B50AH600、B50A700、B50A800、B50A1000、B50A1300。</div>
            </div>
            <div className='product_detail'>
              <div className='product_detailTitle'>宝钢65A系列：</div>
              <div>B65A400、B65AH400、B65A470、B65AH470、B65A530、B50A600、B65A700、B65A800、B65A1000、B65A1300。</div>
            </div>
            <div className='product_detail'>
              <div className='product_detailTitle'>武钢：</div>
              <div>35WW230、35WW250、35WW300、35WW270、35WW400、35WW440、50WW290、50WW310、50WW350、50WW400、50WW440、50WW470、50WW600、50WW800、50WW1000、50WW1300、35W300、35W330、35W360、35W400、35W440、35W550、50W310、50W330、50W350、50W400、50W470、50W540、50W600、50W700、50W800、50W1000、50W1300、35W230、35W250、35W270、35W290、50W250、50W270、50WH270、50W290、50WS290、50WD300、50WGT530、J23-50、50WG600、20WTG1500、20WTG1700、15WTG1550。</div>
            </div>
          </div>
        </div>
        <div className='product_table'>
          <img src={imgTable} alt="" />
        </div>
        <div className='product_imgWrap'>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <Footer />
      </>
    )
  }
}
