const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')

const API_HOST = 'http://localhost:3000'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const devProxy = {
  '/webApi': {
    target: API_HOST,
  //  pathRewrite: { '^/webApi': '/' },
    changeOrigin: true
  },
  '/files': {
    target: API_HOST,
  //  pathRewrite: { '^/webApi': '/' },
    changeOrigin: true
  }
}
const port = 2000
const env = process.env.NODE_ENV
let server
app.prepare().then(() => {
  server = express()
  // Set up the proxy.
  if (devProxy) {
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(devProxy).forEach(function (context) {
      server.use(proxyMiddleware(context, devProxy[context]))
    })
  }
  server.all('*', (req, res) => handle(req, res))
  server.listen(port, err => {
    if (err) {
      throw err
    }
    console.log(`> Ready on port ${port} [${env}]`)
  })
})