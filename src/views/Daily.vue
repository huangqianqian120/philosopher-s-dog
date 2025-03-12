<template>
  <div class="daily-page">
    <header>
      <div class="title">每日哲思</div>
    </header>
    <div class="daily-container">
      <div class="quote-container">
        <div class="quote-content">{{ dailyQuote.content }}</div>
        <div class="quote-info">
          <div class="author">—— {{ dailyQuote.author }}</div>
          <div class="source">《{{ dailyQuote.source }}》</div>
        </div>
        <div class="explanation">{{ dailyQuote.explanation }}</div>
        <div class="reading">
          <h3>延伸阅读</h3>
          <p>{{ dailyQuote.reading }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const dailyQuote = ref({})

const quotes = [
  {
    day: 1,
    content: '范畴是理性认识世界的基本形式',
    author: '康德',
    source: '纯粹理性批判',
    explanation: '康德认为，人类理性通过先天的范畴（如因果、实体、数量等）来组织和理解经验。这些范畴是我们认识世界的必要条件，但同时也限制了我们对物自体的认识。',
    reading: '推荐阅读：《纯粹理性批判》第一版序言和先验分析论部分，以及卡西尔的《康德生平与学说》。'
  },
  {
    day: 2,
    content: '存在先于本质',
    author: '萨特',
    source: '存在主义是一种人道主义',
    explanation: '这是存在主义的核心主张。人的本质不是预先给定的，而是通过自己的选择和行动来创造的。这强调了人的自由和责任。',
    reading: '推荐阅读：萨特的《存在与虚无》，以及波伏娃的《第二性》来理解存在主义女性主义视角。'
  },
  {
    day: 3,
    content: '权力即知识，知识即权力',
    author: '福柯',
    source: '规训与惩罚',
    explanation: '福柯揭示了知识与权力的内在联系。知识的生产和传播总是与权力关系密不可分，而权力的运作也依赖于特定的知识体系。',
    reading: '推荐阅读：《疯癫与文明》和《知识考古学》，以了解福柯的谱系学方法。'
  },
  {
    day: 4,
    content: '语言游戏',
    author: '维特根斯坦',
    source: '哲学研究',
    explanation: '后期维特根斯坦认为，语言的意义来自于其在具体生活形式中的使用。不同的语言游戏有其各自的规则，不能用统一的标准来衡量。',
    reading: '推荐阅读：《哲学研究》前100节，以及《关于确实性》来理解维特根斯坦的语言哲学。'
  },
  {
    day: 5,
    content: '永恒轮回',
    author: '尼采',
    source: '快乐的科学',
    explanation: '永恒轮回说表达了对生命的最高肯定：即使同样的生命要无限重复，我们也要说是。这体现了尼采对生命的酷爱和对虚无主义的克服。',
    reading: '推荐阅读：《查拉图斯特拉如是说》和《悲剧的诞生》，了解尼采的生命哲学。'
  },
  {
    day: 6,
    content: '物自体与现象',
    author: '叔本华',
    source: '作为意志和表象的世界',
    explanation: '继承康德的思想，叔本华认为我们所认识的世界只是表象，而其背后的本质是意志。这种意志是盲目的、非理性的生命冲动。',
    reading: '推荐阅读：《作为意志和表象的世界》第一卷，以及《人生的智慧》了解其实践哲学。'
  },
  {
    day: 0,
    content: '生活世界',
    author: '胡塞尔',
    source: '欧洲科学的危机与超验现象学',
    explanation: '生活世界是我们日常经验的前科学世界，是一切科学认识的基础。现象学试图回到这个原初的经验世界，揭示意识的本质结构。',
    reading: '推荐阅读：《笛卡尔式的沉思》和《纯粹现象学通论》，了解现象学的基本方法。'
  }
]

onMounted(() => {
  const today = new Date()
  const day = today.getDay()
  const quote = quotes.find(q => q.day === day)
  dailyQuote.value = quote
})
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.quote-container {
  margin-top: 60px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quote-content {
  font-size: 20px;
  color: #333;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
}

.quote-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
}

.author {
  font-size: 16px;
  color: #666;
}

.source {
  font-size: 14px;
  color: #999;
}

.explanation {
  font-size: 16px;
  color: #333;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 30px;
  padding: 0 20px;
}

.reading {
  width: 100%;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;

  h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }
}
</style> 