Page({
  data: {
    philosopher: '',
    messages: [],
    inputValue: '',
    lastMessageId: '',
    systemPrompt: ''  // 用于存储系统提示词
  },

  onLoad(options) {
    if (!options.philosopher) {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      })
      return
    }

    const philosopher = options.philosopher
    const welcomeMessage = `汪！我是${philosopher}的爱犬，很高兴与你交流。`
    const systemPrompt = `你现在是${philosopher}的爱犬，要用${philosopher}的哲学观点和思维方式来回答问题。请保持对话风格活泼可爱，像一只聪明的狗狗。`
    
    this.setData({
      philosopher: philosopher,
      messages: [{
        type: 'philosopher',
        content: welcomeMessage
      }],
      systemPrompt: systemPrompt
    })
  },

  async sendMessage() {
    if (!this.data.inputValue.trim()) return

    const userMessage = {
      type: 'user',
      content: this.data.inputValue
    }
    
    this.setData({
      messages: [...this.data.messages, userMessage],
      inputValue: '',
      lastMessageId: `msg-${this.data.messages.length}`
    })

    try {
      const response = await this.callDeepseekAPI(this.data.inputValue)
      if (response) {
        const philosopherMessage = {
          type: 'philosopher',
          content: response
        }
        
        this.setData({
          messages: [...this.data.messages, philosopherMessage],
          lastMessageId: `msg-${this.data.messages.length}`
        })
      }
    } catch (error) {
      console.error('发送消息失败:', error)
    }
  },

  async callDeepseekAPI(message) {
    try {
      // 构建消息历史
      const messageHistory = this.data.messages.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }))

      const requestData = {
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: this.data.systemPrompt
          },
          ...messageHistory,
          {
            role: "user",
            content: message
          }
        ],
        stream: false
      }

      console.log('API请求数据:', requestData)

      // 使用Promise包装wx.request
      const response = await new Promise((resolve, reject) => {
        wx.request({
          url: 'https://api.deepseek.com/chat/completions',
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer sk-9f340c9031ef423587984054b7918c6e`
          },
          data: requestData,
          success: (res) => {
            resolve(res)
          },
          fail: (error) => {
            reject(error)
          }
        })
      })

      console.log('完整API响应:', response)

      if (response.statusCode === 200) {
        if (response.data && response.data.choices && response.data.choices[0]) {
          return response.data.choices[0].message.content
        } else {
          console.error('API响应数据格式错误:', response.data)
          throw new Error('API响应数据格式错误')
        }
      } else {
        console.error('API状态码错误:', response.statusCode, response.data)
        throw new Error(`API状态码错误: ${response.statusCode}`)
      }
    } catch (error) {
      console.error('API调用完整错误:', error)
      if (error.errMsg) {
        console.error('微信请求错误:', error.errMsg)
      }
      wx.showToast({
        title: '发送消息失败',
        icon: 'none'
      })
      return null
    }
  },

  goBack() {
    wx.navigateBack()
  },

  onInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  }
}) 