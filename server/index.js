const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001
const apiKey = process.env.API_KEY

app.use(cors())
app.use(express.json())

// 添加健康检查端点
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/chat', async (req, res) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.moonshot.cn/v1/chat/completions',
      data: req.body,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })
    res.json(response.data)
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message)
    res.status(error.response?.status || 500).json({
      error: 'API调用失败',
      message: error.response?.data || error.message
    })
  }
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`)
}) 