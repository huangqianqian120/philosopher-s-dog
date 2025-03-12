<template>
  <div class="container">
    <div class="nav-bar">
      <div class="back-btn" @click="goBack">
        <img src="@/assets/images/back.png" alt="back">
      </div>
    </div>
    
    <div class="content">
      <div class="title">选择你喜欢的哲学家</div>
      <div class="type-cards">
        <div 
          class="type-card" 
          :class="{ active: selectedType === 'eastern' }"
          @click="switchType('eastern')"
        >
          东方
        </div>
        <div 
          class="type-card" 
          :class="{ active: selectedType === 'western' }"
          @click="switchType('western')"
        >
          西方
        </div>
      </div>
      
      <div class="philosopher-list">
        <div 
          class="philosopher-item" 
          v-for="(item, index) in currentPhilosophers" 
          :key="index"
          @click="goToChat(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedType = ref('western')

const easternPhilosophers = [
  '老子', '孔子', '墨子', '孟子', '庄子', 
  '荀子', '韩非子', '董仲舒', '王充', '朱熹', 
  '王阳明', '康有为', '梁启超', '胡适', '冯友兰', 
  '熊十力', '牟宗三', '李泽厚', '张岱年', '陈来'
]

const westernPhilosophers = [
  '泰勒斯', '毕达哥拉斯', '赫拉克利特', '巴门尼德', '苏格拉底',
  '柏拉图', '亚里士多德', '恩培多克勒', '德谟克利特', '奥古斯丁',
  '托马斯・阿奎那', '勒内・笛卡尔', '弗朗西斯・培根', '伽利略・伽利雷',
  '约翰・洛克', '大卫・休谟', '伊曼努尔・康德', 
  '格奥尔格・威廉・弗里德里希・黑格尔', '弗里德里希・尼采',
  '伯特兰・罗素', '马丁・海德格尔', '让 - 保罗・萨特',
  '约翰・罗杰斯・塞尔', '卡尔・马克思', '弗里德里希・恩格斯',
  '马克斯・韦伯'
]

const currentPhilosophers = computed(() => 
  selectedType.value === 'eastern' ? easternPhilosophers : westernPhilosophers
)

const switchType = (type) => {
  selectedType.value = type
}

const goToChat = (philosopher) => {
  router.push({
    path: '/chat',
    query: { philosopher }
  })
}

const goBack = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.container {
  padding: 40px 10px 10px;
  min-height: 100vh;
  background: #fff;
}

.title {
  font-size: 18px;
  font-weight: 400;
  color: #333;
  text-align: center;
  margin: 30px 0 15px;
}

.type-cards {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.type-card {
  width: 100px;
  padding: 10px 0;
  text-align: center;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 300;
  color: #333;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background: #f5f5f5;
    border-color: #ddd;
    font-weight: 400;
  }

  &:active {
    opacity: 0.8;
    transform: scale(0.98);
  }
}

.philosopher-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.philosopher-item {
  padding: 12px 15px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  text-align: left;
  font-size: 14px;
  font-weight: 300;
  color: #333;
  transition: all 0.3s ease;
  cursor: pointer;

  &:active {
    background: #fafafa;
    transform: scale(0.98);
  }
}

.content {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}
</style> 