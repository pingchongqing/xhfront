import React, { useEffect } from 'react'
import Layout from '../components/layout'
import Router from 'next/router'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { parseTime } from '../utils'
import { fetchArtclsDetail, fetchArticleList } from '../api'

export default class Index extends React.Component {
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
    return (
      <Layout>
        <div className="banner">
          <img src="/static/images/banner.jpg" alt="兴辉水利banner" />
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

