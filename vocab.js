const vocabList = [
  // HSK 1 vocabulary
  { word: '我', pinyin: 'wo', english: 'I, me', level: 1, pos: 'pronoun' },
  { word: '你', pinyin: 'ni', english: 'you', level: 1, pos: 'pronoun' },
  { word: '他', pinyin: 'ta', english: 'he, him', level: 1, pos: 'pronoun' },
  { word: '她', pinyin: 'ta', english: 'she, her', level: 1, pos: 'pronoun' },
  { word: '我们', pinyin: 'women', english: 'we, us', level: 1, pos: 'pronoun' },
  { word: '你们', pinyin: 'nimen', english: 'you (plural)', level: 1, pos: 'pronoun' },
  { word: '他们', pinyin: 'tamen', english: 'they, them', level: 1, pos: 'pronoun' },
  { word: '苹果', pinyin: 'pingguo', english: 'apple', level: 1, pos: 'noun' },
  { word: '医生', pinyin: 'yisheng', english: 'doctor', level: 1, pos: 'noun' },
  { word: '学校', pinyin: 'xuexiao', english: 'school', level: 1, pos: 'noun' },
  { word: '学生', pinyin: 'xuesheng', english: 'student', level: 1, pos: 'noun' },
  { word: '老师', pinyin: 'laoshi', english: 'teacher', level: 1, pos: 'noun' },
  { word: '水', pinyin: 'shui', english: 'water', level: 1, pos: 'noun' },
  { word: '杯子', pinyin: 'beizi', english: 'cup', level: 1, pos: 'noun' },
  { word: '看', pinyin: 'kan', english: 'to look', level: 1, pos: 'verb' },
  { word: '喜欢', pinyin: 'xihuan', english: 'to like', level: 1, pos: 'verb' },
  { word: '吃', pinyin: 'chi', english: 'to eat', level: 1, pos: 'verb' },
  { word: '喝', pinyin: 'he', english: 'to drink', level: 1, pos: 'verb' },
  { word: '去', pinyin: 'qu', english: 'to go', level: 1, pos: 'verb' },
  { word: '来', pinyin: 'lai', english: 'to come', level: 1, pos: 'verb' },
  { word: '好', pinyin: 'hao', english: 'good', level: 1, pos: 'adjective' },
  { word: '漂亮', pinyin: 'piaoliang', english: 'beautiful', level: 1, pos: 'adjective' },
  { word: '大', pinyin: 'da', english: 'big', level: 1, pos: 'adjective' },
  { word: '小', pinyin: 'xiao', english: 'small', level: 1, pos: 'adjective' },
  { word: '忙', pinyin: 'mang', english: 'busy', level: 1, pos: 'adjective' },

  // HSK 2 vocabulary
  { word: '因为', pinyin: 'yinwei', english: 'because', level: 2, pos: 'conjunction' },
  { word: '所以', pinyin: 'suoyi', english: 'so, therefore', level: 2, pos: 'conjunction' },
  { word: '问题', pinyin: 'wenti', english: 'question', level: 2, pos: 'noun' },
  { word: '手机', pinyin: 'shouji', english: 'mobile phone', level: 2, pos: 'noun' },
  { word: '事情', pinyin: 'shiqing', english: 'matter, thing', level: 2, pos: 'noun' },
  { word: '时间', pinyin: 'shijian', english: 'time', level: 2, pos: 'noun' },
  { word: '路', pinyin: 'lu', english: 'road', level: 2, pos: 'noun' },
  { word: '帮助', pinyin: 'bangzhu', english: 'to help', level: 2, pos: 'verb' },
  { word: '准备', pinyin: 'zhunbei', english: 'to prepare', level: 2, pos: 'verb' },
  { word: '学习', pinyin: 'xuexi', english: 'to study', level: 2, pos: 'verb' },
  { word: '觉得', pinyin: 'juede', english: 'to feel, think', level: 2, pos: 'verb' },
  { word: '快', pinyin: 'kuai', english: 'fast', level: 2, pos: 'adjective' },
  { word: '慢', pinyin: 'man', english: 'slow', level: 2, pos: 'adjective' },
  { word: '高', pinyin: 'gao', english: 'tall, high', level: 2, pos: 'adjective' },
  { word: '难', pinyin: 'nan', english: 'difficult', level: 2, pos: 'adjective' },
  { word: '离', pinyin: 'li', english: 'from', level: 2, pos: 'preposition' },

  // HSK 3 vocabulary
  { word: '经理', pinyin: 'jingli', english: 'manager', level: 3, pos: 'noun' },
  { word: '银行', pinyin: 'yinhang', english: 'bank', level: 3, pos: 'noun' },
  { word: '城市', pinyin: 'chengshi', english: 'city', level: 3, pos: 'noun' },
  { word: '眼镜', pinyin: 'yanjing', english: 'glasses', level: 3, pos: 'noun' },
  { word: '地图', pinyin: 'ditu', english: 'map', level: 3, pos: 'noun' },
  { word: '需要', pinyin: 'xuyao', english: 'to need', level: 3, pos: 'verb' },
  { word: '复习', pinyin: 'fuxi', english: 'to review', level: 3, pos: 'verb' },
  { word: '照顾', pinyin: 'zhaogu', english: 'to take care of', level: 3, pos: 'verb' },
  { word: '打算', pinyin: 'dasuan', english: 'to plan', level: 3, pos: 'verb' },
  { word: '留学', pinyin: 'liuxue', english: 'to study abroad', level: 3, pos: 'verb' },
  { word: '着急', pinyin: 'zhaoji', english: 'anxious', level: 3, pos: 'adjective' },
  { word: '新', pinyin: 'xin', english: 'new', level: 3, pos: 'adjective' },
  { word: '健康', pinyin: 'jiankang', english: 'healthy', level: 3, pos: 'adjective' },
  { word: '聪明', pinyin: 'congming', english: 'clever', level: 3, pos: 'adjective' },
  { word: '重要', pinyin: 'zhongyao', english: 'important', level: 3, pos: 'adjective' }
];

function getVocab(level, pos) {
  let list = vocabList.filter(v => v.level === level);
  if (pos && pos !== 'all') {
    list = list.filter(v => v.pos === pos);
  }
  return list;
}

let hanziWordsArray = getVocab(1, 'all');
