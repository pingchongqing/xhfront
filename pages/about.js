import React from 'react'
import Layout from '../components/layout'
import Router, { withRouter } from 'next/router'
import { parseTime } from '../utils'
import { fetchArtclsDetail } from '../api'

class About extends React.Component {
  static async getInitialProps({ req }) {
    const result = await fetchArtclsDetail({ _id: '5d4d60788ee6b62c8892a62a' })
    const aboutUs = result.data
    return { aboutUs }
  }
  createMarkup = (html) => {
    return { __html: html }
  }
  render() {
    const { aboutUs } = this.props
    return (
      <Layout>
        <div className="snd-banner product">
          <div className="content-container">
            <img src="/static/images/newsbanner.png" />
            <h1>公司简介</h1>
            <p>江西安邦工程质量检测有限公司要从事工程质量检测、建筑材料实验及检测技术咨询服务。</p>
          </div>
        </div>

        <div className="content-box snd-news">
          <div className="content-container">
            <div className="backtolist">
              <span><a onClick={() => { Router.back() }}>返回</a></span>
            </div>
            <div className="newsdetail">
              <div className="detailcontent" dangerouslySetInnerHTML={this.createMarkup(aboutUs.content)}></div>
            </div>
          </div>
        </div>
      </Layout> 
    )
  }  
}
export default withRouter(About)
