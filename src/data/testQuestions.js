export const questions = [
  {
    id: 1,
    text: "在面对重要决策时，你更倾向于：",
    options: [
      { id: 'A', text: "依据理性分析和逻辑推理", type: "理性主义" },
      { id: 'B', text: "根据个人经验和直觉感受", type: "经验主义" },
      { id: 'C', text: "考虑实际效果和可行性", type: "实用主义" },
      { id: 'D', text: "思考行为的道德价值", type: "道德主义" }
    ]
  },
  {
    id: 2,
    text: "你认为真理是：",
    options: [
      { id: 'A', text: "永恒不变的普遍规律", type: "理性主义" },
      { id: 'B', text: "相对的，因人因时而异", type: "相对主义" },
      { id: 'C', text: "在实践中检验的结果", type: "实用主义" },
      { id: 'D', text: "需要不断探索的过程", type: "怀疑主义" }
    ]
  },
  {
    id: 3,
    text: "关于人的本质，你更同意：",
    options: [
      { id: 'A', text: "人性本善，需要教育引导", type: "儒家" },
      { id: 'B', text: "人性本恶，需要规范约束", type: "法家" },
      { id: 'C', text: "无所谓善恶，顺其自然", type: "道家" },
      { id: 'D', text: "人是自我选择的结果", type: "存在主义" }
    ]
  },
  {
    id: 4,
    text: "你认为幸福的关键是：",
    options: [
      { id: 'A', text: "追求知识和智慧", type: "理性主义" },
      { id: 'B', text: "内心平和与自由", type: "道家" },
      { id: 'C', text: "社会和谐与正义", type: "社会主义" },
      { id: 'D', text: "个人实现与成长", type: "存在主义" }
    ]
  },
  {
    id: 5,
    text: "面对社会问题，你倾向于：",
    options: [
      { id: 'A', text: "寻找根本性的制度解决方案", type: "批判理论" },
      { id: 'B', text: "关注具体的改良措施", type: "实用主义" },
      { id: 'C', text: "保持独立的思考立场", type: "怀疑主义" },
      { id: 'D', text: "寻求多方利益的平衡", type: "调和主义" }
    ]
  }
]

export const results = {
  "理性主义": {
    title: "理性主义者",
    description: "你相信理性和逻辑是认识世界的最佳工具，重视普遍真理和客观规律。推荐阅读笛卡尔、康德的著作。",
    philosophers: ["笛卡尔", "康德", "黑格尔"]
  },
  "经验主义": {
    title: "经验主义者",
    description: "你重视感性经验和实证观察，相信知识来源于经验。推荐阅读洛克、休谟的著作。",
    philosophers: ["洛克", "休谟", "贝克莱"]
  },
  "实用主义": {
    title: "实用主义者",
    description: "你注重实践效果和实际价值，pragmatic的思维方式。推荐阅读杜威、詹姆斯的著作。",
    philosophers: ["皮尔士", "詹姆斯", "杜威"]
  },
  "存在主义": {
    title: "存在主义者",
    description: "你关注个体存在的意义和选择的自由，强调主体性。推荐阅读萨特、加缪的著作。",
    philosophers: ["克尔凯郭尔", "海德格尔", "萨特"]
  },
  "道家": {
    title: "道家思想者",
    description: "你推崇自然无为，追求心灵的逍遥与自由。推荐阅读老子、庄子的著作。",
    philosophers: ["老子", "庄子", "列子"]
  }
} 