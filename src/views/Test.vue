<template>
  <div class="test-page">
    <header>
      <div class="title">哲学倾向测试</div>
    </header>
    <div class="test-container">
      <!-- 欢迎页面 -->
      <div class="welcome-page" v-if="currentPage === 'welcome'">
        <div class="welcome-content">
          <h2>探索你的哲学倾向</h2>
          <p>通过回答一系列问题，发现你的哲学思维特质</p>
          <button class="start-btn" @click="startTest">开始测验</button>
        </div>
      </div>

      <!-- 测验说明 -->
      <div class="instruction-page" v-if="currentPage === 'instruction'">
        <div class="instruction-content">
          <h2>测验说明</h2>
          <div class="instruction-text">
            <p>• 本测验包含5个精选问题</p>
            <p>• 每个问题有4个选项</p>
            <p>• 请选择最符合你想法的选项</p>
            <p>• 答案没有对错之分</p>
          </div>
          <button class="continue-btn" @click="showQuestion">开始答题</button>
        </div>
      </div>

      <!-- 问题页面 -->
      <div class="question-page" v-if="currentPage === 'question'">
        <div class="progress-bar">
          <div class="progress" :style="{width: `${(currentQuestion/questions.length)*100}%`}"></div>
        </div>
        <div class="question-content">
          <span class="question-number">Q{{currentQuestion}}</span>
          <h3 class="question-text">{{questions[currentQuestion-1].text}}</h3>
          <div class="options-container">
            <button 
              v-for="option in questions[currentQuestion-1].options" 
              :key="option.id"
              class="option-btn"
              @click="selectOption(option.id)"
            >
              {{option.text}}
            </button>
          </div>
        </div>
      </div>

      <!-- 结果页面 -->
      <div class="result-page" v-if="currentPage === 'result'">
        <test-result 
          :result="result" 
          @restart="restart"
          @share="shareResult"
        ></test-result>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { questions, results } from '../data/testQuestions.js'
import TestResult from '../components/TestResult.vue'

const currentPage = ref('welcome')
const currentQuestion = ref(1)
const answers = ref([])
const result = ref(null)

const startTest = () => {
  currentPage.value = 'instruction'
}

const showQuestion = () => {
  currentPage.value = 'question'
}

const selectOption = (optionId) => {
  answers.value.push(optionId)
  if (currentQuestion.value < questions.length) {
    currentQuestion.value++
  } else {
    calculateResult()
  }
}

const calculateResult = () => {
  // 统计答案类型
  const typeCount = {}
  answers.value.forEach((answer, index) => {
    const questionType = questions[index].options.find(opt => opt.id === answer).type
    typeCount[questionType] = (typeCount[questionType] || 0) + 1
  })
  
  // 找出最多的类型
  let maxType = Object.entries(typeCount).reduce((a, b) => 
    (a[1] > b[1] ? a : b))[0]
  
  result.value = results[maxType]
  currentPage.value = 'result'
}

const restart = () => {
  currentPage.value = 'welcome'
  currentQuestion.value = 1
  answers.value = []
  result.value = null
}

const shareResult = () => {
  if (navigator.share) {
    navigator.share({
      title: '我的哲学倾向测试结果',
      text: `我是一位${result.value.title}，${result.value.description}`,
      url: window.location.href
    })
  }
}
</script>

<style lang="scss" scoped>
.test-page {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
}

.test-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.welcome-page, .instruction-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 20px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 32px;
  }
}

.instruction-text {
  text-align: left;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 32px;

  p {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.start-btn, .continue-btn {
  padding: 14px 32px;
  font-size: 16px;
  color: #fff;
  background: #333;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #444;
  }
}

.question-page {
  width: 100%;
  padding: 20px 0;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: #eee;
  margin-bottom: 40px;
  border-radius: 2px;
  overflow: hidden;

  .progress {
    height: 100%;
    background: #333;
    transition: width 0.3s ease;
  }
}

.question-content {
  text-align: center;
}

.question-number {
  display: inline-block;
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.question-text {
  font-size: 20px;
  font-weight: 500;
  color: #333;
  margin-bottom: 32px;
  line-height: 1.4;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;
}

.option-btn {
  width: 100%;
  padding: 16px;
  text-align: left;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #333;
    background: #f9f9f9;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style> 