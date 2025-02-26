<template>
  <div class="container">
    <div class="nav-bar">
      <div class="back-btn" @click="goBack">
        <img src="@/assets/images/back.png" alt="back">
      </div>
      <div class="title">哲学发展脉络</div>
    </div>
    
    <div class="timeline-container">
      <div class="timeline">
        <div 
          class="timeline-item" 
          v-for="(period, index) in philosophyPeriods" 
          :key="index"
        >
          <div class="time-period">{{ period.time }}</div>
          <div class="content">
            <div class="title">{{ period.title }}</div>
            <div class="philosophers">
              <span v-for="(philosopher, pIndex) in period.philosophers" 
                    :key="pIndex">
                {{ philosopher }}
              </span>
            </div>
            <div class="description">{{ period.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { philosophyPeriods } from '@/assets/data/philosophy-periods'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: #ffffff;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 100;

  .back-btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }
  }

  .title {
    flex: 1;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    color: #333;
    margin-right: 24px;
  }
}

.timeline-container {
  margin-top: 60px;
  padding: 0 15px;
}

.timeline {
  position: relative;
  padding: 10px 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #eaeaea;
  }
}

.timeline-item {
  position: relative;
  padding-left: 20px;
  margin-bottom: 30px;

  &::before {
    content: '';
    position: absolute;
    left: -3px;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #333;
  }
}

.time-period {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.content {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 4px;

  .title {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 8px;
  }
}

.philosophers {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;

  span {
    font-size: 13px;
    color: #333;
    background: #fff;
    padding: 4px 8px;
    border-radius: 2px;
    border: 1px solid #eaeaea;
  }
}

.description {
  font-size: 13px;
  color: #666;
  line-height: 1.8;
  white-space: pre-line;
}
</style>