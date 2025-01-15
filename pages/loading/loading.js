Page({
  onLoad() {
    this.timer = setTimeout(() => {
      wx.redirectTo({
        url: '/pages/index/index'
      })
    }, 5000)
  },

  skipLoading() {
    // 清除定时器
    if (this.timer) {
      clearTimeout(this.timer)
    }
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },

  onUnload() {
    // 页面卸载时清除定时器
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}) 