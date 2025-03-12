<template>
  <div class="basics-page">
    <header>
      <div class="title">哲学发展脉络</div>
    </header>
    <div class="basics-container">
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
import { ref } from 'vue'

const philosophyPeriods = ref([
  {
    time: '公元前5世纪-公元前4世纪',
    title: '古希腊古典哲学',
    philosophers: ['苏格拉底', '柏拉图', '亚里士多德'],
    description: '苏格拉底转向对人的研究，提出"认识你自己"，发展辩证法。\n柏拉图创立理念论，著有《理想国》，探讨正义与理想社会。\n亚里士多德建立形而上学、逻辑学和伦理学体系，提出"四因说"和"中道"思想。'
  },
  {
    time: '公元前6世纪-公元前3世纪',
    title: '中国先秦哲学',
    philosophers: ['孔子', '老子', '墨子', '庄子', '孟子', '荀子', '韩非子'],
    description: '孔子创立儒家思想，强调"仁"与"礼"，主张"中庸"之道。\n老子创立道家思想，著有《道德经》，提出"道法自然"。\n墨子创立墨家，主张"兼爱非攻"，重视实用理性。\n庄子发展道家思想，提倡"逍遥游"。\n孟子发展儒家，提出"性善论"。\n荀子主张"性恶论"。\n韩非子集大成法家思想。'
  },
  {
    time: '公元前6世纪-公元5世纪',
    title: '印度古代哲学',
    philosophers: ['释迦牟尼', '迦毗罗', '耆那教创始人'],
    description: '释迦牟尼创立佛教，提出"四谛"与"八正道"，探讨苦难与解脱。\n迦毗罗创立数论派，提出"二元论"思想。\n耆那教主张不伤害生命，追求灵魂解脱。\n印度哲学普遍关注解脱问题，发展出丰富的形而上学体系。'
  },
  {
    time: '公元1-5世纪',
    title: '希腊罗马后期哲学',
    philosophers: ['普罗提诺', '爱比克泰德', '奥勒留', '普罗克洛'],
    description: '普罗提诺创立新柏拉图主义，提出"太一"流溢说。\n爱比克泰德发展斯多亚主义，强调内心自由。\n奥勒留是哲学皇帝，著有《沉思录》，探讨生活智慧。\n普罗克洛系统化新柏拉图主义，影响中世纪思想。'
  },
  {
    time: '公元5-15世纪',
    title: '中世纪哲学',
    philosophers: ['奥古斯丁', '托马斯·阿奎那', '阿维森纳', '阿维罗伊'],
    description: '奥古斯丁将基督教与柏拉图哲学结合，著有《忏悔录》。\n托马斯·阿奎那综合亚里士多德哲学与基督教神学。\n阿维森纳在伊斯兰世界发展亚里士多德哲学。\n阿维罗伊注释亚里士多德著作，影响西方思想。'
  },
  {
    time: '14-17世纪',
    title: '文艺复兴哲学',
    philosophers: ['尼古拉·库萨', '布鲁诺', '蒙田', '培根', '马基雅维利'],
    description: '尼古拉·库萨探讨"学识的无知"，开创现代思维。\n布鲁诺提出宇宙无限论，为科学革命铺路。\n蒙田发展怀疑主义，著有《随笔集》。\n培根倡导经验主义和归纳法，著有《新工具》。\n马基雅维利著有《君主论》，开创政治现实主义。'
  },
  {
    time: '17-18世纪',
    title: '理性主义与经验主义',
    philosophers: ['笛卡尔', '斯宾诺莎', '莱布尼茨', '洛克', '贝克莱', '休谟'],
    description: '笛卡尔提出"我思故我在"，开创近代哲学，发展理性主义。\n斯宾诺莎提出泛神论，著有《伦理学》。\n莱布尼茨发展单子论，提出"预定和谐"说。\n洛克提出经验主义，著有《人类理解论》，质疑天赋观念。\n贝克莱提出"存在即被感知"，发展主观唯心主义。\n休谟发展怀疑论，质疑因果关系，著有《人性论》。'
  },
  {
    time: '18世纪',
    title: '启蒙哲学',
    philosophers: ['伏尔泰', '卢梭', '孟德斯鸠', '狄德罗', '康德'],
    description: '伏尔泰批判宗教迷信，倡导理性与宽容。\n卢梭著有《社会契约论》，提出"天赋人权"思想。\n孟德斯鸠提出三权分立学说，著有《论法的精神》。\n狄德罗主编《百科全书》，传播启蒙思想。\n康德提出"哥白尼式革命"，著有三大批判，调和理性主义与经验主义。'
  },
  {
    time: '19世纪',
    title: '德国古典哲学与浪漫主义',
    philosophers: ['费希特', '谢林', '黑格尔', '叔本华', '克尔凯郭尔', '费尔巴哈'],
    description: '费希特发展主观唯心主义，强调自我意识。\n谢林提出同一哲学，强调自然与精神的统一。\n黑格尔建立辩证法体系，著有《精神现象学》，提出"存在即合理"。\n叔本华开创悲观主义哲学，著有《作为意志和表象的世界》。\n克尔凯郭尔开创存在主义，强调个体存在。\n费尔巴哈批判宗教，提出人本主义。'
  },
  {
    time: '19-20世纪',
    title: '马克思主义哲学',
    philosophers: ['马克思', '恩格斯', '列宁', '葛兰西', '卢卡奇'],
    description: '马克思创立历史唯物主义，著有《资本论》，分析资本主义。\n恩格斯发展辩证唯物主义，著有《自然辩证法》。\n列宁发展马克思主义，著有《唯物主义与经验批判主义》。\n葛兰西提出文化霸权理论，发展西方马克思主义。\n卢卡奇发展马克思主义美学，著有《历史与阶级意识》。'
  },
  {
    time: '19-20世纪',
    title: '实用主义与分析哲学',
    philosophers: ['皮尔士', '詹姆斯', '杜威', '弗雷格', '罗素', '维特根斯坦'],
    description: '皮尔士创立实用主义，提出"实用主义准则"。\n詹姆斯发展实用主义，著有《实用主义》。\n杜威提出工具主义，强调经验与实践。\n弗雷格开创现代逻辑，研究语言与意义。\n罗素发展逻辑原子主义，著有《数学原理》。\n维特根斯坦分析语言哲学，著有《逻辑哲学论》和《哲学研究》。'
  },
  {
    time: '20世纪',
    title: '现象学与存在主义',
    philosophers: ['胡塞尔', '海德格尔', '萨特', '梅洛-庞蒂', '列维纳斯'],
    description: '胡塞尔创立现象学，提出"回到事物本身"。\n海德格尔探讨存在问题，著有《存在与时间》。\n萨特发展存在主义，著有《存在与虚无》，强调"存在先于本质"。\n梅洛-庞蒂研究身体现象学，著有《知觉现象学》。\n列维纳斯强调"他者"的重要性，发展伦理学。'
  },
  {
    time: '20世纪',
    title: '法兰克福学派与批判理论',
    philosophers: ['霍克海默', '阿多诺', '马尔库塞', '哈贝马斯', '霍耐特'],
    description: '霍克海默与阿多诺合著《启蒙的辩证法》，批判工具理性。\n阿多诺发展否定辩证法，批判文化工业。\n马尔库塞著有《单向度的人》，批判发达工业社会。\n哈贝马斯提出交往行为理论，著有《交往行为理论》。\n霍耐特发展承认理论，研究社会正义。'
  },
  {
    time: '20世纪后期-21世纪',
    title: '后现代主义与解构主义',
    philosophers: ['福柯', '德里达', '利奥塔', '鲍德里亚', '罗蒂'],
    description: '福柯研究权力与知识关系，著有《规训与惩罚》。\n德里达提出解构主义，质疑西方形而上学传统。\n利奥塔著有《后现代状况》，宣告"元叙事"终结。\n鲍德里亚研究符号与模拟，提出"超现实"概念。\n罗蒂发展新实用主义，批判表征主义。'
  },
  {
    time: '20-21世纪',
    title: '中国现代哲学',
    philosophers: ['冯友兰', '熊十力', '牟宗三', '张岱年', '李泽厚', '杜维明'],
    description: '冯友兰重建新理学，著有《中国哲学史》。\n熊十力融合儒学与佛学，提出新唯识论。\n牟宗三发展新儒家思想，著有《心体与性体》。\n张岱年研究中国哲学范畴，著有《中国哲学大纲》。\n李泽厚提出"情本体"，研究美学与伦理学。\n杜维明发展"文化中国"理念，推动儒学全球化。'
  },
  {
    time: '20-21世纪',
    title: '当代哲学新趋势',
    philosophers: ['罗尔斯', '桑德尔', '朱迪斯·巴特勒', '阿甘本', '齐泽克'],
    description: '罗尔斯重振政治哲学，著有《正义论》，提出"无知之幕"。\n桑德尔发展社群主义，批评自由主义，著有《正义：什么是正确的事》。\n朱迪斯·巴特勒发展性别理论，质疑性别本质主义。\n阿甘本研究生命政治，著有《神圣人》系列。\n齐泽克结合黑格尔、马克思与拉康思想，批判意识形态。'
  }
])
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: #ffffff;
}

.nav-bar {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
  
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 500;
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