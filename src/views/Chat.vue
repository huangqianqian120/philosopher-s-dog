<template>
  <div class="container">
    <div class="nav-bar">
      <div class="back-btn" @click="goBack">
        <img src="@/assets/images/back.png" alt="back">
      </div>
      <div class="title">与{{philosopher}}的狗对话中</div>
    </div>
    
    <div class="chat-container">
      <div class="chat-messages" ref="messagesRef">
        <div 
          class="message" 
          :class="item.type" 
          v-for="(item, index) in messages" 
          :key="index"
        >
          <img 
            class="avatar" 
            :src="item.type === 'philosopher' ? '/public/images/head.png' : '/src/assets/images/user.png'" 
            :alt="item.type"
          >
          <div class="message-content">{{ item.content }}</div>
        </div>
      </div>

      <div class="input-container">
        <input 
          class="message-input" 
          v-model="inputValue" 
          @keyup.enter="sendMessage"
          placeholder="输入消息..."
        >
        <div class="send-button" @click="sendMessage">
          <img src="@/assets/images/dog.png" class="send-icon" alt="send">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const route = useRoute()
const messagesRef = ref(null)

const philosopher = ref('')
const messages = ref([])
const inputValue = ref('')
const systemPrompt = ref('')

onMounted(() => {
  if (!route.query.philosopher) {
    router.push('/')
    return
  }

  philosopher.value = route.query.philosopher
  const welcomeMessage = `汪！我是${philosopher.value}的爱犬，很高兴与你交流。`
  systemPrompt.value = `你现在是${philosopher.value}的爱犬，要用${philosopher.value}的哲学观点和思维方式来回答问题。请保持对话风格活泼可爱，像一只聪明的狗狗。`
  
  messages.value = [{
    type: 'philosopher',
    content: welcomeMessage
  }]
})

// 监听消息列表变化，自动滚动到底部
watch(messages, () => {
  nextTick(() => {
    if (messagesRef.value) {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight
    }
  })
}, { deep: true })

const sendMessage = async () => {
  if (!inputValue.value.trim()) return

  const userMessage = {
    type: 'user',
    content: inputValue.value
  }
  
  messages.value.push(userMessage)
  inputValue.value = ''

  try {
    const response = await callDeepseekAPI(userMessage.content)
    if (response) {
      messages.value.push({
        type: 'philosopher',
        content: response
      })
    }
  } catch (error) {
    console.error('发送消息失败:', error)
  }
}

const callDeepseekAPI = async (message) => {
  try {
    const messageHistory = messages.value.map(msg => ({
      role: msg.type === 'user' ? 'user' : 'assistant',
      content: msg.content
    }))

    const response = await axios.post('/api/v1/chat/completions', {
      model: "moonshot-v1-8k",
      messages: [
        {
          role: "system",
          content: systemPrompt.value
        },
        ...messageHistory,
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer sk-hj3RTklVH2pQXBW8pYj3STfQX3pDjRgbvT4QEhEwTyhPVYdU`
      }
    })

    console.log('API Response:', response)

    if (response.data && response.data.choices && response.data.choices[0]) {
      return response.data.choices[0].message.content
    }
    throw new Error('API响应数据格式错误')
  } catch (error) {
    console.error('API调用错误:', error.response || error)
    if (error.response) {
      console.error('Error Response:', error.response.data)
      console.error('Error Status:', error.response.status)
    }
    return null
  }
}

const goBack = () => {
  router.push('/index')
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.chat-container {
  margin-top: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
}

.chat-messages {
  flex: 1;
  padding: 0 10px;
  overflow-y: auto;
}

.message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 0 10px;

  &.user {
    flex-direction: row-reverse;

    .avatar {
      margin-right: 0;
      margin-left: 10px;
    }
  }
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.message-content {
  font-size: 14px;
  line-height: 1.6;
  max-width: 70%;
  word-wrap: break-word;
  font-weight: 300;
}

.input-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-top: 1px solid #eaeaea;
}

.message-input {
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin-right: 10px;
  background: #fafafa;
  height: 40px;
  line-height: 40px;

  &::placeholder {
    color: #999;
  }
}

.send-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
}

.send-icon {
  width: 40px;
  height: 40px;
}
</style> 