import React from 'react'
import Layout from '../components/layout'
import Router, { withRouter } from 'next/router'
import { parseTime } from '../utils'
import { fetchArticleDetail } from '../api'

class Detail extends React.Component {
  static async getInitialProps(props) {
    console.log(props)
    const { req, query } = props
    const resiveQuery = query || req.query || {}
    const _id = resiveQuery._id
    const result = await fetchArticleDetail({ _id })
    const detail = result.data
    return { detail }
  }
  createMarkup = (html) => {
    return { __html: html }
  }
  render() {
    const { detail } = this.props
    return (
      <Layout>
        <div className="snd-banner snd-news">
          <div className="content-container">
            <img src="/static/images/newsbanner.png" />
            <h1>新闻动态</h1>
            <p>为您提供最近公司新闻、专业的行业动态与资讯。让您率先掌握行业开发先机。</p>
          </div>
        </div>

        <div className="content-box snd-news">
          <div className="content-container">
            <div className="backtolist">
              <span><a onClick={() => { Router.back() }}>返回</a></span>
            </div>
            <div className="newsdetail">
              <h2>{detail.title}</h2>
              <span>{parseTime(detail.createDate)}</span>
              <div className="detailcontent" dangerouslySetInnerHTML={this.createMarkup(detail.text)}></div>
            </div>
          </div>
        </div>
      </Layout> 
    )
  }  
}
export default withRouter(Detail)
