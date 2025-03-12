<template>
  <div class="result-container">
    <div class="result-card">
      <h2 class="result-title">你的哲学倾向</h2>
      <div class="result-type">{{ result.title }}</div>
      <p class="description">{{ result.description }}</p>
      <div class="philosophers">
        <h4>推荐哲学家</h4>
        <div class="philosopher-tags">
          <span v-for="philosopher in result.philosophers" :key="philosopher">
            {{ philosopher }}
          </span>
        </div>
      </div>
    </div>
    <div class="action-buttons">
      <button class="share-btn" @click="$emit('share')">
        分享结果
      </button>
      <button class="restart-btn" @click="$emit('restart')">
        重新测试
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  result: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.result-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.result-card {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.result-title {
  font-size: 18px;
  color: #666;
  margin-bottom: 16px;
  text-align: center;
}

.result-type {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 24px;
}

.description {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
  margin-bottom: 32px;
  text-align: justify;
}

.philosophers {
  h4 {
    font-size: 16px;
    color: #666;
    margin-bottom: 12px;
  }
}

.philosopher-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    padding: 6px 12px;
    background: #f5f5f5;
    border-radius: 16px;
    font-size: 14px;
    color: #666;
  }
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 24px;

  button {
    flex: 1;
    padding: 14px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
}

.share-btn {
  background: #333;
  color: #fff;
  border: none;

  &:hover {
    background: #444;
  }
}

.restart-btn {
  background: #fff;
  color: #333;
  border: 1px solid #ddd;

  &:hover {
    background: #f5f5f5;
  }
}
</style> 