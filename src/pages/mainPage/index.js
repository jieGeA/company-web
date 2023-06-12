import React, { Component } from 'react'
import Footer from '../../component/Footer/Footer'
import './index.css'
import img22 from '../../static/lunbo/22.jpg'
import img33 from '../../static/lunbo/33.jpg'

export default class index extends Component {
  render() {
    return (
      <>
        <div>
          <div className='footer_title index_title'><span></span>公司介绍</div>
          <div className='index_title index_info'>
            上海稼跃实业有限公司是一家集钢材贸易、加工、配送、仓储为一体的综合性公司，公司经过全体员工的不懈努力，凭借良好的信誉、完善的营销网络和周到的服务，已与国内各大钢厂建立了业务合作关系，客户遍及全国各地。自公司成立以来一直本着＂诚信、互利、双赢＂的原则，广交朋友，本着＂人无地区我有，人有我优，人优我廉，同等价格比服务，同等服务比价格＂的营销理念，想客户所想，急客户所急，努力追求与客户稳定、长远的合作关系。充分发挥资金、信誉、信息和人才优势，面向华东，立足上海市场。成为国内宝钢、鞍钢、武钢、本钢、马钢、上钢一厂、邯钢、包钢、梅钢、珠钢等大型钢厂的贸易伙伴，并成为众多大型钢铁公司的产品代理商。主要经营:热轧卷板、冷轧卷板、酸洗卷板、彩涂卷、热镀锌卷板、电镀锌卷板、合金钢等，按照“诚实信用、互惠双赢”的经营方针，“处处维护客户利益”的宗旨，稼跃实业有限公司热情为社会各界服务。在经营品种和经营规模上不断扩展的同时，推广应用全新的贸易模式和管理模式，积极开拓国内贸易业务，投资其他产业，以寻求更加广泛的贸易机会和发展空间。为了更好的服务广大新老用户，我们不断地提高企业的自身素质，实现＂一流的体制，一流的服务，一流的管理，一流的队伍＂的企业发展要求，让你在选择中感到前所未有的发展方向。公司也将一如既往的秉承诚信合作的原则，组织优质优价的资源来感谢新老客户对本公司的支持、惠顾和厚爱！
          </div>
        </div>
        <div>
          <div className='footer_title index_title'><span></span>稼跃产品</div>
          <div className='index_img'>
            <img src={img22} alt="" />
          </div>
        </div>
        <div>
          <div className='footer_title index_title'><span></span>我们的服务</div>
          <div  className='index_img'>
            <img src={img33} alt="" />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
