const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()
app.listen(PORT, () => console.log(`Server 🏃🏃🏃🏃 on PORT ${PORT}`))

const url = 'https://www.netlify.com/blog/'

axios(url)
  .then(res => {
    const html = res.data
    // console.log(html)
    const $ = cheerio.load(html)
    const articles = []

    $('.heading', html).each(function(){ 
      const title = $(this).text()
      const url = $(this).find('a').attr('href')
      articles.push({ title, url })
    })
    console.log(articles)

  }).catch(err => console.log(err))