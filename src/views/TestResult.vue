<template>
  <div class="result-container">
    <div class="nav-bar">
      <div class="back-btn" @click="goBack">
        <img :src="backIcon" alt="back">
      </div>
      <div class="title">测试结果</div>
    </div>
    
    <div class="result-content">
      <div class="result-header">
        <div class="philosopher-name">{{ philosopher.name }}</div>
        <div class="philosopher-quote">"{{ philosopher.quote }}"</div>
      </div>
      
      <div class="result-description">
        {{ philosopher.description }}
      </div>
      
      <div class="traits-container">
        <div class="traits-title">核心特质</div>
        <div class="traits-list">
          <div class="trait" v-for="(trait, index) in philosopher.traits" :key="index">
            {{ trait }}
          </div>
        </div>
      </div>
      
      <div class="chat-suggestion">
        <div class="suggestion-text">想了解更多{{ philosopher.name }}的哲学思想？</div>
        <button class="chat-button" @click="startChat">
          与{{ philosopher.name }}的狗对话
        </button>
      </div>
    </div>
    
    <div class="share-container">
      <button class="share-button" @click="shareResult">
        分享结果
      </button>
      <button class="restart-button" @click="restartTest">
        重新测试
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { philosopherDescriptions } from '@/data/testQuestions';
import backIcon from '@/assets/images/back.png';

const router = useRouter();
const route = useRoute();
const philosopher = ref({});

onMounted(() => {
  const result = route.query.result;
  if (!result || !philosopherDescriptions[result]) {
    router.push('/test');
    return;
  }
  
  philosopher.value = philosopherDescriptions[result];
});

const goBack = () => {
  router.push('/index');
};

const startChat = () => {
  router.push({
    path: '/chat',
    query: { philosopher: philosopher.value.name }
  });
};

const shareResult = () => {
  // 实现分享功能
  if (navigator.share) {
    navigator.share({
      title: `我的哲学倾向是${philosopher.value.name}`,
      text: `我的哲学倾向测试结果：${philosopher.value.name} - ${philosopher.value.quote}`,
      url: window.location.href
    }).catch(err => {
      console.error('分享失败:', err);
      alert('分享功能暂不可用');
    });
  } else {
    alert('您的浏览器不支持分享功能');
  }
};

const restartTest = () => {
  router.push('/test');
};
</script>

<style lang="scss" scoped>
.result-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.nav-bar {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
  
  .back-btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 20px;
      height: 20px;
    }
  }
  
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 500;
  }
}

.result-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.result-header {
  text-align: center;
  margin-bottom: 30px;
  
  .philosopher-name {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .philosopher-quote {
    font-style: italic;
    color: #666;
  }
}

.result-description {
  line-height: 1.6;
  margin-bottom: 30px;
}

.traits-container {
  margin-bottom: 30px;
  
  .traits-title {
    font-weight: 500;
    margin-bottom: 15px;
  }
  
  .traits-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    .trait {
      padding: 6px 12px;
      background: #f0f0f0;
      border-radius: 16px;
      font-size: 14px;
    }
  }
}

.chat-suggestion {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  
  .suggestion-text {
    margin-bottom: 15px;
  }
  
  .chat-button {
    padding: 10px 20px;
    background: #4a90e2;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
  }
}

.share-container {
  padding: 20px;
  display: flex;
  gap: 15px;
  
  button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .share-button {
    background: #4a90e2;
    color: white;
    border: none;
  }
  
  .restart-button {
    background: white;
    color: #4a90e2;
    border: 1px solid #4a90e2;
  }
}
</style> 