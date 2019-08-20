import React, { useEffect } from 'react'
import Layout from '../components/layout'
import Router from 'next/router'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { parseTime } from '../utils'
import { fetchArtclsDetail, fetchArticleList } from '../api'

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const result = await fetchArtclsDetail({ _id: '5d56b678169dac38f4428cb3' })
    const aboutUs = result.data
    const newsListRes = await fetchArticleList({ pageNum: 1, pageSize: 10 })
    const newsList = newsListRes.data.list || []
    return { aboutUs, newsList }
  }
  componentDidMount() {
    new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
      },      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }
  createMarkup = (html) => {
    return { __html: html }
  }
  render() {
    const { aboutUs, newsList } = this.props
    return (
      <Layout>
        <div className="banner">
          <img src="/static/images/banner.jpg" alt="安邦水利banner" />
        </div>
        <div className="bg-e5eaed">
          <div className="w1200 about">
            <div className="title">
              <span>关于我们</span>
            </div>
            <div className="content">
              <div className="content-left">
                <img src="/static/images/pic.jpg" />
              </div>
              <div className="content-right">
                <span dangerouslySetInnerHTML={this.createMarkup(aboutUs.content)}></span>
                <p className="align-right">
                  <a href="#">查看更多></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w1200 news">
          <div className="title">
            <span>公司新闻</span>
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper news-content">
              {newsList.map(news => (
                <div onClick={()=>{Router.push({pathname:'/detail',query:{_id:news._id}})}} className="swiper-slide news-box" style={{cursor: 'pointer'}} key={news._id}>
                  <div className="news-pic">
                    <img src={news.picPath} />
                  </div>
                  <h3>{news.title}</h3>
                  <p className="time">{parseTime(news.createDate)}</p>
                  <div className="des">{news.keyWord}</div>
                </div>
              ))}
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <div className="bg-e5eaed">
          <div className="w1200 contact">
            <div className="title">
              <span>联系我们</span>
            </div>
            <div className="contact-content">
              <div className="contact-box">
                <i className="icon icon-tel"></i>
                <span>0795-6288863 </span>
              </div>
              <div className="contact-box">
                <i className="icon icon-address"></i>
                <span>江西省丰城市紫云南大道1136号</span>
              </div>
              <div className="contact-box">
                <i className="icon icon-email"></i>
                <span>66864519@qq.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="friendlink">
          <ul>
            <li className="flink-title">
              <p>友情链接</p>
              <p>FriendLink</p>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/static/images/link1.jpg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/static/images/link2.jpg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/static/images/link3.jpg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/static/images/link1.jpg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/static/images/link2.jpg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/static/images/link3.jpg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/static/images/link1.jpg" />
              </a>
            </li>
          </ul>
        </div>
      </Layout> 
    )
  }  
}

