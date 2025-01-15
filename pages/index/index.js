Page({
  data: {
    philosophers: [
      '泰勒斯', '毕达哥拉斯', '赫拉克利特', '巴门尼德', '苏格拉底',
      '柏拉图', '亚里士多德', '恩培多克勒', '德谟克利特', '奥古斯丁',
      '托马斯・阿奎那', '勒内・笛卡尔', '弗朗西斯・培根', '伽利略・伽利雷',
      '约翰・洛克', '大卫・休谟', '伊曼努尔・康德', 
      '格奥尔格・威廉・弗里德里希・黑格尔', '弗里德里希・尼采',
      '伯特兰・罗素', '马丁・海德格尔', '让 - 保罗・萨特',
      '约翰・罗杰斯・塞尔', '卡尔・马克思', '弗里德里希・恩格斯',
      '马克斯・韦伯'
    ]
  },

  goToChat(e) {
    const philosopher = e.currentTarget.dataset.philosopher
    wx.navigateTo({
      url: `/pages/chat/chat?philosopher=${philosopher}`
    })
  }
}) 