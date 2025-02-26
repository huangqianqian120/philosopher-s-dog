<template>
  <div class="container">
    <div class="nav-bar">
      <div class="back-btn" @click="goBack">
        <img src="@/assets/images/back.png" alt="back">
      </div>
      <div class="title">每日哲思</div>
    </div>
    
    <div class="quote-container">
      <div class="quote-content">{{ dailyQuote.content }}</div>
      <div class="quote-info">
        <div class="author">—— {{ dailyQuote.author }}</div>
        <div class="source">《{{ dailyQuote.source }}》</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const dailyQuote = ref({})

const quotes = [
  {
    day: 1,  // 星期一
    content: "未经审视的人生不值得过。",
    author: "苏格拉底",
    source: "申辩篇"
  },
  {
    day: 2,  // 星期二
    content: "人是万物的尺度。",
    author: "普罗泰戈拉",
    source: "泰阿泰德篇"
  },
  {
    day: 3,  // 星期三
    content: "存在即合理。",
    author: "黑格尔",
    source: "法哲学原理"
  },
  {
    day: 4,  // 星期四
    content: "道可道，非常道；名可名，非常名。",
    author: "老子",
    source: "道德经"
  },
  {
    day: 5,  // 星期五
    content: "我思故我在。",
    author: "笛卡尔",
    source: "第一哲学沉思集"
  },
  {
    day: 6,  // 星期六
    content: "人生而自由，却无往不在枷锁之中。",
    author: "卢梭",
    source: "社会契约论"
  },
  {
    day: 0,  // 星期日
    content: "一切伟大的行动和思想，都有一个微不足道的开始。",
    author: "加缪",
    source: "西西弗斯神话"
  }
]

onMounted(() => {
  const today = new Date()
  const day = today.getDay()  // 获取当前是星期几（0-6）
  const quote = quotes.find(q => q.day === day)
  dailyQuote.value = quote
})

const goBack = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.quote-container {
  margin-top: 90px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quote-content {
  font-size: 18px;
  color: #333;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 300;
}

.quote-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.author {
  font-size: 16px;
  color: #666;
}

.source {
  font-size: 14px;
  color: #999;
}
</style> 