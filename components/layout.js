import './css/base.css'
import './css/index.css'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>        
      <title>江西安邦工程质量检测有限公司</title>
    </Head>
    <div className="header">
      <div className="logo">
        <img src="/static/images/logo.jpg" alt="江西安邦logo" />
      </div>
      <div className="nav">
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="/about">公司简介</a></li>
          <li><a href="/news">新闻动态</a></li>
          <li><a href="/contact">联系我们</a></li>
        </ul>
      </div>
    </div>
    { props.children }
    <div className="bg-515151">
      <div className="w1200 bottom">
        <span>COPYRIGHT ©2019江西安邦工程质量检测有限公司 All right reserved 赣ICP备 05xx0号</span>
      </div>
    </div>
  </div>
)

export default Layout