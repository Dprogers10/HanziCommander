const vocabList = [
  // HSK 1 sample (subset of original vocab)
  { word: '我', pinyin: 'wo', english: 'I, me', level: 1, pos: 'pronoun' },
  { word: '我们', pinyin: 'women', english: 'we, us', level: 1, pos: 'pronoun' },
  { word: '你', pinyin: 'ni', english: 'you', level: 1, pos: 'pronoun' },
  { word: '他', pinyin: 'ta', english: 'he, him', level: 1, pos: 'pronoun' },
  { word: '她', pinyin: 'ta', english: 'she, her', level: 1, pos: 'pronoun' },
  { word: '苹果', pinyin: 'pingguo', english: 'apple', level: 1, pos: 'noun' },
  { word: '医生', pinyin: 'yisheng', english: 'doctor', level: 1, pos: 'noun' },
  { word: '看', pinyin: 'kan', english: 'to look', level: 1, pos: 'verb' },
  { word: '喜欢', pinyin: 'xihuan', english: 'to like', level: 1, pos: 'verb' },
  { word: '好', pinyin: 'hao', english: 'good', level: 1, pos: 'adjective' },
  { word: '漂亮', pinyin: 'piaoliang', english: 'beautiful', level: 1, pos: 'adjective' },

  // HSK 2 sample
  { word: '因为', pinyin: 'yinwei', english: 'because', level: 2, pos: 'conjunction' },
  { word: '问题', pinyin: 'wenti', english: 'question', level: 2, pos: 'noun' },
  { word: '帮助', pinyin: 'bangzhu', english: 'to help', level: 2, pos: 'verb' },
  { word: '快', pinyin: 'kuai', english: 'fast', level: 2, pos: 'adjective' },
  { word: '离', pinyin: 'li', english: 'from', level: 2, pos: 'preposition' },

  // HSK 3 sample
  { word: '经理', pinyin: 'jingli', english: 'manager', level: 3, pos: 'noun' },
  { word: '需要', pinyin: 'xuyao', english: 'to need', level: 3, pos: 'verb' },
  { word: '一边', pinyin: 'yibian', english: 'while', level: 3, pos: 'conjunction' },
  { word: '复习', pinyin: 'fuxi', english: 'to review', level: 3, pos: 'verb' },
  { word: '着急', pinyin: 'zhaoji', english: 'anxious', level: 3, pos: 'adjective' }
];

function getVocab(level, pos) {
  let list = vocabList.filter(v => v.level === level);
  if (pos && pos !== 'all') {
    list = list.filter(v => v.pos === pos);
  }
  return list;
}

// Default export used by the game
let hanziWordsArray = getVocab(1, 'all');
