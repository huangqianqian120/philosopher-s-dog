<template>
  <div class="loading-page">
    <div class="content">
      <div class="left-section">
        <img src="@/assets/images/loading.png" alt="philosopher dog" class="main-image">
      </div>
      <div class="right-section">
        <div class="icon-wrapper" @click="router.push('/basics')">
          <img src="@/assets/images/dog.png" alt="basics" class="icon icon-1">
          <span class="icon-text">哲学芝士</span>
        </div>
        <div class="icon-wrapper" @click="router.push('/chat')">
          <img src="@/assets/images/dog.png" alt="chat" class="icon icon-2">
          <span class="icon-text">和汪交流</span>
        </div>
        <div class="icon-wrapper" @click="router.push('/daily')">
          <img src="@/assets/images/dog.png" alt="daily" class="icon icon-3">
          <span class="icon-text">每日哲学</span>
        </div>
        <div class="icon-wrapper" @click="router.push('/test')">
          <img src="@/assets/images/dog.png" alt="test" class="icon icon-4">
          <span class="icon-text">哲学测试</span>
        </div>
      </div>
    </div>
    <div class="app-info">
      <h1>哲学家的狗</h1>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.loading-page {
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  padding: 0 40px;
}

.left-section {
  flex: 1;
  display: flex;
  justify-content: center;
  
  .main-image {
    width: 700px;
    height: 700px;
    object-fit: contain;
  }
}

.right-section {
  position: relative;
  width: 400px;
  height: 400px;

  .icon-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .icon {
      width: 100px;
      height: 100px;
      object-fit: contain;
      animation: float 3s ease-in-out infinite;
      margin-bottom: 8px;
    }

    .icon-text {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      opacity: 0.8;
    }
  }

  .icon-wrapper:nth-child(1) { top: 0; left: 20%; .icon { animation-delay: 0s; } }
  .icon-wrapper:nth-child(2) { top: 30%; right: 0; .icon { animation-delay: 0.5s; } }
  .icon-wrapper:nth-child(3) { bottom: 0; left: 30%; .icon { animation-delay: 1s; } }
  .icon-wrapper:nth-child(4) { top: 50%; left: 0; .icon { animation-delay: 1.5s; } }
}

.app-info {
  text-align: center;
  margin-top: 20px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #333;
    margin-bottom: 12px;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>