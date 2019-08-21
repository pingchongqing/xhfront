import './css/base.css'
import './css/index.css'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>        
      <title>江西兴辉水利水电工程有限公司</title>
    </Head>
    <div className="topnav">
      <div className="w1200 toptext">
        <span>客服热线：18720958187（8:30-17:30）</span>
      </div>      
    </div>
    <div className="header">
      <div className="logo">
        <img src="/static/images/logo.jpg" alt="江西安邦logo" />
      </div>
      <div className="nav">
        <ul>
          <li><a href="/">首页</a></li>
          <li>
            <a href="/about">企业概况</a>
            <div className="submenu">
              <span><a href="protection.html">企业简介</a></span>
              <span><a href="protection.html?id=99">企业资质</a></span>
              <span><a href="protection.html?id=102">企业荣誉</a></span>
              <span><a href="protection.html?id=102">企业文化</a></span>
              <span><a href="protection.html?id=102">组织结构</a></span>
            </div>
          </li>
          <li><a href="/about">工程业绩</a></li>
          <li><a href="/news">新闻动态</a></li>
          <li><a href="/contact">联系我们</a></li>
        </ul>
      </div>
    </div>
    { props.children }
    <div className="bg-515151">
      <div className="w1200 bottom">
        <span>COPYRIGHT 江西兴辉水利水电工程有限公司 All right reserved 赣ICP备 05xx0号</span>
      </div>
    </div>
  </div>
)

export default Layout