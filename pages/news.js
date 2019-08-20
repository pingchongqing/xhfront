import React from 'react'
import Layout from '../components/layout'
import Router, { withRouter } from 'next/router'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'
import { parseTime } from '../utils'
import { fetchArticleList } from '../api'

class News extends React.Component {
  static async getInitialProps({ req }) {
    const pageNum = (req.query && req.query.pageNum) || 1
    const newsListRes = await fetchArticleList({ pageNum, pageSize: 5 })
    const newsList = newsListRes.data.list || []
    return { newsList, current: Number(pageNum), total: newsListRes.data.total }
  }
  createMarkup = (html) => {
    return { __html: html }
  }
  onChange = (page) => {
    location.href = '/news?pageNum=' + page
  }
  render() {
    const { newsList } = this.props
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
            <div className="minimenu">
              <span><a href="/" >返回首页</a></span>
              <span className="active"><a >新闻动态</a></span>
              <div className="clearfix"></div>
            </div>
            <div className="newslist">
              <ul>
                {newsList.map(news => (
                  <li key={news._id}>
                    <a href={'/detail?_id=' + news._id}>
                      {news.title}
                    </a>
                    <span>{parseTime(news.createDate)}</span>
                  </li> 
                ))}
              </ul>
            </div>
            <div className="pagination">
              <Pagination onChange={this.onChange} current={this.props.current} total={this.props.total} pageSize={5} />
            </div>
          </div>
        </div>
      </Layout> 
    )
  }  
}
export default withRouter(News)
