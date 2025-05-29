const vocabList = [
  // HSK 1 vocabulary
  { word: '爱', pinyin: 'ai', english: 'love', level: 1, pos: 'verb' },
  { word: '爱好', pinyin: 'aihao', english: 'hobby', level: 1, pos: 'noun' },
  { word: '八', pinyin: 'ba', english: 'eight', level: 1, pos: 'noun' },
  { word: '爸爸', pinyin: 'baba', english: 'dad', level: 1, pos: 'noun' },
  { word: '吧', pinyin: 'ba', english: '(interjection particle)', level: 1, pos: 'interjection' },
  { word: '白', pinyin: 'bai', english: 'white', level: 1, pos: 'adjective' },
  { word: '白天', pinyin: 'baitian', english: 'day', level: 1, pos: 'noun' },
  { word: '百', pinyin: 'bai', english: 'hundred', level: 1, pos: 'noun' },
  { word: '班', pinyin: 'ban', english: 'class', level: 1, pos: 'noun' },
  { word: '半', pinyin: 'ban', english: 'half', level: 1, pos: 'noun' },
  { word: '半年', pinyin: 'bannian', english: 'half a year', level: 1, pos: 'noun' },
  { word: '半天', pinyin: 'bantian', english: 'half day', level: 1, pos: 'noun' },
  { word: '帮', pinyin: 'bang', english: 'help', level: 1, pos: 'verb' },
  { word: '帮忙', pinyin: 'bangmang', english: 'help', level: 1, pos: 'verb' },
  { word: '包', pinyin: 'bao', english: 'package', level: 1, pos: 'noun' },
  { word: '包子', pinyin: 'baozi', english: 'bun', level: 1, pos: 'noun' },
  { word: '杯', pinyin: 'bei', english: 'cup', level: 1, pos: 'noun' },
  { word: '杯子', pinyin: 'beizi', english: 'cup', level: 1, pos: 'noun' },
  { word: '北', pinyin: 'bei', english: 'north', level: 1, pos: 'noun' },
  { word: '北边', pinyin: 'beibian', english: 'North side', level: 1, pos: 'noun' },
  { word: '北京', pinyin: 'beijing', english: 'Beijing', level: 1, pos: 'noun' },
  { word: '本', pinyin: 'ben', english: '(measure word for books or volumes)', level: 1, pos: 'noun' },
  { word: '本子', pinyin: 'benzi', english: 'book', level: 1, pos: 'noun' },
  { word: '比', pinyin: 'bi', english: 'particle used for comparison', level: 1, pos: 'preposition' },
  { word: '别', pinyin: 'bie', english: 'Don\'t', level: 1, pos: 'adverb' },
  { word: '别的', pinyin: 'biede', english: 'other', level: 1, pos: 'adjective' },
  { word: '别人', pinyin: 'bieren', english: 'other people', level: 1, pos: 'noun' },
  { word: '病', pinyin: 'bing', english: 'disease', level: 1, pos: 'noun' },
  { word: '病人', pinyin: 'bingren', english: 'patient', level: 1, pos: 'noun' },
  { word: '不大', pinyin: 'buda', english: 'not big', level: 1, pos: 'adjective' },
  { word: '不对', pinyin: 'budui', english: 'wrong', level: 1, pos: 'adjective' },
  { word: '不客气', pinyin: 'bukeqi', english: 'You\'re welcome', level: 1, pos: 'interjection' },
  { word: '不用', pinyin: 'buyong', english: 'No need to', level: 1, pos: 'adverb' },
  { word: '不', pinyin: 'bu', english: 'No', level: 1, pos: 'adverb' },
  { word: '菜', pinyin: 'cai', english: 'dish', level: 1, pos: 'noun' },
  { word: '茶', pinyin: 'cha', english: 'tea', level: 1, pos: 'noun' },
  { word: '差', pinyin: 'cha', english: 'differ from; bad; short of', level: 1, pos: 'adjective' },
  { word: '常', pinyin: 'chang', english: 'often', level: 1, pos: 'adverb' },
  { word: '常常', pinyin: 'changchang', english: 'often', level: 1, pos: 'adverb' },
  { word: '唱', pinyin: 'chang', english: 'sing', level: 1, pos: 'verb' },
  { word: '唱歌', pinyin: 'changge', english: 'sing', level: 1, pos: 'verb' },
  { word: '车', pinyin: 'che', english: 'car', level: 1, pos: 'noun' },
  { word: '车票', pinyin: 'chepiao', english: 'ticket', level: 1, pos: 'noun' },
  { word: '车上', pinyin: 'cheshang', english: 'in the car', level: 1, pos: 'noun' },
  { word: '车站', pinyin: 'chezhan', english: 'station', level: 1, pos: 'noun' },
  { word: '吃', pinyin: 'chi', english: 'eat', level: 1, pos: 'verb' },
  { word: '吃饭', pinyin: 'chifan', english: 'have meal', level: 1, pos: 'verb' },
  { word: '出', pinyin: 'chu', english: 'out', level: 1, pos: 'verb' },
  { word: '出来', pinyin: 'chulai', english: 'come', level: 1, pos: 'verb' },
  { word: '出去', pinyin: 'chuqu', english: 'go out', level: 1, pos: 'verb' },
  { word: '穿', pinyin: 'chuan', english: 'wear', level: 1, pos: 'verb' },
  { word: '床', pinyin: 'chuang', english: 'bed', level: 1, pos: 'noun' },
  { word: '次', pinyin: 'ci', english: '(measure word for times, frequency)', level: 1, pos: 'noun' },
  { word: '从', pinyin: 'cong', english: 'from', level: 1, pos: 'preposition' },
  { word: '错', pinyin: 'cuo', english: 'wrong', level: 1, pos: 'adjective' },
  { word: '打', pinyin: 'da', english: 'hit, take', level: 1, pos: 'verb' },
  { word: '打车', pinyin: 'dache', english: 'take a taxi', level: 1, pos: 'verb' },
  { word: '打电话', pinyin: 'dadianhua', english: 'make a phonecall', level: 1, pos: 'verb' },
  { word: '打开', pinyin: 'dakai', english: 'turn on', level: 1, pos: 'verb' },
  { word: '打球', pinyin: 'daqiu', english: 'play ball', level: 1, pos: 'verb' },
  { word: '大', pinyin: 'da', english: 'large, big', level: 1, pos: 'adjective' },
  { word: '大学', pinyin: 'daxue', english: 'university', level: 1, pos: 'noun' },
  { word: '大学生', pinyin: 'daxuesheng', english: 'university student', level: 1, pos: 'noun' },
  { word: '到', pinyin: 'dao', english: 'reach', level: 1, pos: 'verb' },
  { word: '得到', pinyin: 'dedao', english: 'get', level: 1, pos: 'verb' },
  { word: '地', pinyin: 'de', english: 'auxiliary word', level: 1, pos: 'adverb' },
  { word: '的', pinyin: 'de', english: '(aux.)', level: 1, pos: 'adjective' }, // Note: 'de' can be tricky, often a particle. Classified as adjective based on common HSK list simplification.
  { word: '等', pinyin: 'deng', english: 'wait', level: 1, pos: 'verb' },
  { word: '地', pinyin: 'di', english: 'ground', level: 1, pos: 'noun' },
  { word: '地点', pinyin: 'didian', english: 'location', level: 1, pos: 'noun' },
  { word: '地方', pinyin: 'difang', english: 'local', level: 1, pos: 'noun' }, // Can also mean place.
  { word: '地上', pinyin: 'dishang', english: 'on the ground', level: 1, pos: 'noun' },
  { word: '地图', pinyin: 'ditu', english: 'Map', level: 1, pos: 'noun' },
  { word: '弟弟', pinyin: 'didi', english: 'younger brother', level: 1, pos: 'noun' },
  { word: '第', pinyin: 'di', english: 'auxiliary word for ordinal numbers (second)', level: 1, pos: 'adjective' }, // More accurately a prefix or particle for ordinals.
  { word: '点', pinyin: 'dian', english: 'spot', level: 1, pos: 'noun' }, // Can also mean 'o'clock' or 'a little bit'.
  { word: '电', pinyin: 'dian', english: 'electricity', level: 1, pos: 'noun' },
  { word: '电话', pinyin: 'dianhua', english: 'phone', level: 1, pos: 'noun' },
  { word: '电脑', pinyin: 'diannao', english: 'Computer', level: 1, pos: 'noun' },
  { word: '电视', pinyin: 'dianshi', english: 'television', level: 1, pos: 'noun' },
  { word: '电视机', pinyin: 'dianshiji', english: 'television', level: 1, pos: 'noun' },
  { word: '电影', pinyin: 'dianying', english: 'Film', level: 1, pos: 'noun' },
  { word: '电影院', pinyin: 'dianyingyuan', english: 'cinema; movie theater', level: 1, pos: 'noun' },
  { word: '东', pinyin: 'dong', english: 'east', level: 1, pos: 'noun' },
  { word: '东边', pinyin: 'dongbian', english: 'east side', level: 1, pos: 'noun' },
  { word: '东西', pinyin: 'dongxi', english: 'thing', level: 1, pos: 'noun' },
  { word: '动', pinyin: 'dong', english: 'move', level: 1, pos: 'verb' },
  { word: '动作', pinyin: 'dongzuo', english: 'action', level: 1, pos: 'noun' },
  { word: '都', pinyin: 'dou', english: 'all', level: 1, pos: 'adverb' },
  { word: '读', pinyin: 'du', english: 'read', level: 1, pos: 'verb' },
  { word: '读书', pinyin: 'dushu', english: 'reading; study', level: 1, pos: 'verb' },
  { word: '对', pinyin: 'dui', english: 'right', level: 1, pos: 'adjective' }, // Can also be a preposition 'to/towards'.
  { word: '对不起', pinyin: 'duibuqi', english: 'I\'m sorry.', level: 1, pos: 'interjection' },
  { word: '多', pinyin: 'duo', english: 'many; much; more', level: 1, pos: 'adjective' }, // Can also be adverb.
  { word: '多少', pinyin: 'duoshao', english: 'how much', level: 1, pos: 'pronoun' },
  { word: '饿', pinyin: 'e', english: 'hungry', level: 1, pos: 'adjective' },
  { word: '儿子', pinyin: 'erzi', english: 'Son', level: 1, pos: 'noun' },
  { word: '二', pinyin: 'er', english: 'Two', level: 1, pos: 'noun' },
  { word: '饭', pinyin: 'fan', english: 'rice; meal', level: 1, pos: 'noun' },
  { word: '饭店', pinyin: 'fandian', english: 'restaurant', level: 1, pos: 'noun' },
  { word: '房间', pinyin: 'fangjian', english: 'Room', level: 1, pos: 'noun' },
  { word: '房子', pinyin: 'fangzi', english: 'house; building', level: 1, pos: 'noun' },
  { word: '放', pinyin: 'fang', english: 'discharge', level: 1, pos: 'verb' }, // Also 'to put'.
  { word: '放假', pinyin: 'fangjia', english: 'holiday; have a holiday', level: 1, pos: 'verb' },
  { word: '放学', pinyin: 'fangxue', english: 'off school', level: 1, pos: 'verb' },
  { word: '飞', pinyin: 'fei', english: 'fly', level: 1, pos: 'verb' },
  { word: '飞机', pinyin: 'feiji', english: 'aircraft', level: 1, pos: 'noun' },
  { word: '非常', pinyin: 'feichang', english: 'very', level: 1, pos: 'adverb' },
  { word: '分', pinyin: 'fen', english: 'minute; point; part; (measure word)', level: 1, pos: 'noun' },
  { word: '风', pinyin: 'feng', english: 'wind', level: 1, pos: 'noun' },
  { word: '干', pinyin: 'gan', english: 'dry', level: 1, pos: 'adjective' },
  { word: '干净', pinyin: 'ganjing', english: 'clean', level: 1, pos: 'adjective' },
  { word: '干', pinyin: 'gan', english: 'do', level: 1, pos: 'verb' },
  { word: '干什么', pinyin: 'ganshenme', english: 'What', level: 1, pos: 'pronoun' }, // Phrase acting as pronoun.
  { word: '高', pinyin: 'gao', english: 'high', level: 1, pos: 'adjective' },
  { word: '高兴', pinyin: 'gaoxing', english: 'happy', level: 1, pos: 'adjective' },
  { word: '告诉', pinyin: 'gaosu', english: 'tell', level: 1, pos: 'verb' },
  { word: '哥哥', pinyin: 'gege', english: 'elder brother', level: 1, pos: 'noun' },
  { word: '歌', pinyin: 'ge', english: 'song', level: 1, pos: 'noun' },
  { word: '个', pinyin: 'ge', english: 'individual', level: 1, pos: 'noun' }, // Measure word.
  { word: '给', pinyin: 'gei', english: 'give', level: 1, pos: 'verb' }, // Can also be preposition 'to/for'.
  { word: '跟', pinyin: 'gen', english: 'with', level: 1, pos: 'preposition' }, // Can also be verb 'to follow'.
  { word: '工人', pinyin: 'gongren', english: 'Worker', level: 1, pos: 'noun' },
  { word: '工作', pinyin: 'gongzuo', english: 'work', level: 1, pos: 'verb' }, // Can also be noun 'job'.
  { word: '关', pinyin: 'guan', english: 'shut; close; turn off', level: 1, pos: 'verb' },
  { word: '关上', pinyin: 'guanshang', english: 'close;shut to; turn off', level: 1, pos: 'verb' },
  { word: '贵', pinyin: 'gui', english: 'noble', level: 1, pos: 'adjective' }, // More commonly 'expensive'.
  { word: '国', pinyin: 'guo', english: 'country; state; nation', level: 1, pos: 'noun' },
  { word: '国家', pinyin: 'guojia', english: 'Country', level: 1, pos: 'noun' },
  { word: '国外', pinyin: 'guowai', english: 'foreign; oversea; abroad', level: 1, pos: 'noun' },
  { word: '过', pinyin: 'guo', english: 'pass', level: 1, pos: 'verb' }, // Can also be aspect particle.
  { word: '还', pinyin: 'hai', english: 'also; still; yet', level: 1, pos: 'adverb' },
  { word: '还是', pinyin: 'haishi', english: 'still', level: 1, pos: 'adverb' }, // Can also be conjunction 'or' in questions.
  { word: '还有', pinyin: 'haiyou', english: 'also; in addition; besides', level: 1, pos: 'conjunction' },
  { word: '孩子', pinyin: 'haizi', english: 'Children', level: 1, pos: 'noun' },
  { word: '汉语', pinyin: 'hanyu', english: 'Chinese', level: 1, pos: 'noun' },
  { word: '汉字', pinyin: 'hanzi', english: 'Chinese character', level: 1, pos: 'noun' },
  { word: '好', pinyin: 'hao', english: 'good', level: 1, pos: 'adjective' }, // Can also be adverb 'very'.
  { word: '好吃', pinyin: 'haochi', english: 'Yummy', level: 1, pos: 'adjective' },
  { word: '好看', pinyin: 'haokan', english: 'good looking', level: 1, pos: 'adjective' },
  { word: '好听', pinyin: 'haoting', english: 'pleasant to hear', level: 1, pos: 'adjective' },
  { word: '好玩儿', pinyin: 'haowanr', english: 'fun; interesting', level: 1, pos: 'adjective' },
  { word: '号', pinyin: 'hao', english: 'Number/date', level: 1, pos: 'noun' },
  { word: '喝', pinyin: 'he', english: 'drink', level: 1, pos: 'verb' },
  { word: '和', pinyin: 'he', english: 'and', level: 1, pos: 'conjunction' }, // Can also be preposition 'with'.
  { word: '很', pinyin: 'hen', english: 'very', level: 1, pos: 'adverb' },
  { word: '后', pinyin: 'hou', english: 'back; behind; after; later', level: 1, pos: 'noun' }, // Often part of compound like 后面,以后.
  { word: '后边', pinyin: 'houbian', english: 'behind; back', level: 1, pos: 'noun' },
  { word: '后天', pinyin: 'houtian', english: 'day after tomorrow', level: 1, pos: 'noun' },
  { word: '花', pinyin: 'hua', english: 'flower', level: 1, pos: 'noun' }, // Can also be verb 'to spend'.
  { word: '话', pinyin: 'hua', english: 'word; words', level: 1, pos: 'noun' },
  { word: '坏', pinyin: 'huai', english: 'bad', level: 1, pos: 'adjective' },
  { word: '还', pinyin: 'huan', english: 'return; pay back', level: 1, pos: 'verb' },
  { word: '回', pinyin: 'hui', english: 'go back; return', level: 1, pos: 'verb' },
  { word: '回答', pinyin: 'huida', english: 'Answer', level: 1, pos: 'verb' },
  { word: '回到', pinyin: 'huidao', english: 'back to', level: 1, pos: 'verb' },
  { word: '回家', pinyin: 'huijia', english: 'go home; return home', level: 1, pos: 'verb' },
  { word: '回来', pinyin: 'huilai', english: 'come back; return', level: 1, pos: 'verb' },
  { word: '回去', pinyin: 'huiqu', english: 'go back', level: 1, pos: 'verb' },
  { word: '会', pinyin: 'hui', english: 'can; be able to', level: 1, pos: 'verb' }, // Modal verb, can also mean 'meeting'.
  { word: '火车', pinyin: 'huoche', english: 'train', level: 1, pos: 'noun' },
  { word: '机场', pinyin: 'jichang', english: 'Airport', level: 1, pos: 'noun' },
  { word: '机票', pinyin: 'jipiao', english: 'air ticket', level: 1, pos: 'noun' },
  { word: '鸡蛋', pinyin: 'jidan', english: 'Egg', level: 1, pos: 'noun' },
  { word: '几', pinyin: 'ji', english: 'several', level: 1, pos: 'pronoun' }, // Also 'how many'.
  { word: '记', pinyin: 'ji', english: 'remember', level: 1, pos: 'verb' },
  { word: '记得', pinyin: 'jide', english: 'remember', level: 1, pos: 'verb' },
  { word: '记住', pinyin: 'jizhu', english: 'remember; keep in mind', level: 1, pos: 'verb' },
  { word: '家', pinyin: 'jia', english: 'home', level: 1, pos: 'noun' },
  { word: '家里', pinyin: 'jiali', english: 'In the home', level: 1, pos: 'noun' },
  { word: '家人', pinyin: 'jiaren', english: 'family', level: 1, pos: 'noun' },
  { word: '间', pinyin: 'jian', english: 'between; measure word for rooms', level: 1, pos: 'noun' }, // As measure word.
  { word: '见', pinyin: 'jian', english: 'see; meet', level: 1, pos: 'verb' },
  { word: '见面', pinyin: 'jianmian', english: 'meet', level: 1, pos: 'verb' },
  { word: '教', pinyin: 'jiao', english: 'teach', level: 1, pos: 'verb' },
  { word: '叫', pinyin: 'jiao', english: 'call; be called', level: 1, pos: 'verb' },
  { word: '教学楼', pinyin: 'jiaoxuelou', english: 'teaching building', level: 1, pos: 'noun' },
  { word: '姐姐', pinyin: 'jiejie', english: 'elder sister', level: 1, pos: 'noun' },
  { word: '介绍', pinyin: 'jieshao', english: 'introduce', level: 1, pos: 'verb' },
  { word: '今年', pinyin: 'jinnian', english: 'this year', level: 1, pos: 'noun' },
  { word: '今天', pinyin: 'jintian', english: 'Today', level: 1, pos: 'noun' },
  { word: '进', pinyin: 'jin', english: 'enter', level: 1, pos: 'verb' },
  { word: '进来', pinyin: 'jinlai', english: 'come in', level: 1, pos: 'verb' },
  { word: '进去', pinyin: 'jinqu', english: 'go in', level: 1, pos: 'verb' },
  { word: '九', pinyin: 'jiu', english: 'Nine', level: 1, pos: 'noun' },
  { word: '就', pinyin: 'jiu', english: 'as soon as; right away; then', level: 1, pos: 'adverb' },
  { word: '觉得', pinyin: 'juede', english: 'Think', level: 1, pos: 'verb' },
  { word: '开', pinyin: 'kai', english: 'open', level: 1, pos: 'verb' }, // Also 'to drive'.
  { word: '开车', pinyin: 'kaiche', english: 'drive; drive a car', level: 1, pos: 'verb' },
  { word: '开会', pinyin: 'kaihui', english: 'have a meeting', level: 1, pos: 'verb' },
  { word: '开玩笑', pinyin: 'kaiwanxiao', english: 'Make fun of', level: 1, pos: 'verb' },
  { word: '看', pinyin: 'kan', english: 'see', level: 1, pos: 'verb' }, // Also 'to watch', 'to read'.
  { word: '看病', pinyin: 'kanbing', english: 'see a doctor', level: 1, pos: 'verb' },
  { word: '看到', pinyin: 'kandao', english: 'see', level: 1, pos: 'verb' },
  { word: '看见', pinyin: 'kanjian', english: 'seeing', level: 1, pos: 'verb' },
  { word: '考', pinyin: 'kao', english: 'test; examine', level: 1, pos: 'verb' },
  { word: '考试', pinyin: 'kaoshi', english: 'Examination', level: 1, pos: 'noun' },
  { word: '渴', pinyin: 'ke', english: 'thirsty', level: 1, pos: 'adjective' },
  { word: '课', pinyin: 'ke', english: 'course', level: 1, pos: 'noun' }, // Also 'lesson'.
  { word: '课本', pinyin: 'keben', english: 'textbook', level: 1, pos: 'noun' },
  { word: '课文', pinyin: 'kewen', english: 'text', level: 1, pos: 'noun' },
  { word: '口', pinyin: 'kou', english: 'mouth', level: 1, pos: 'noun' }, // Also measure word for family members.
  { word: '块', pinyin: 'kuai', english: 'block', level: 1, pos: 'noun' }, // Also measure word for money, pieces.
  { word: '快', pinyin: 'kuai', english: 'fast', level: 1, pos: 'adjective' }, // Can also be adverb.
  { word: '来', pinyin: 'lai', english: 'come', level: 1, pos: 'verb' },
  { word: '来到', pinyin: 'laidao', english: 'come; arrive', level: 1, pos: 'verb' },
  { word: '老', pinyin: 'lao', english: 'old; aged', level: 1, pos: 'adjective' },
  { word: '老人', pinyin: 'laoren', english: 'old people; the aged', level: 1, pos: 'noun' },
  { word: '老师', pinyin: 'laoshi', english: 'Teacher', level: 1, pos: 'noun' },
  { word: '了', pinyin: 'le', english: 'past tense marker', level: 1, pos: 'adverb' }, // More accurately a particle.
  { word: '累', pinyin: 'lei', english: 'tired', level: 1, pos: 'adjective' },
  { word: '冷', pinyin: 'leng', english: 'cold', level: 1, pos: 'adjective' },
  { word: '里', pinyin: 'li', english: 'in', level: 1, pos: 'preposition' }, // Often part of 里边/里面.
  { word: '里边', pinyin: 'libian', english: 'inside', level: 1, pos: 'noun' },
  { word: '两', pinyin: 'liang', english: 'two', level: 1, pos: 'noun' }, // Specifically for counting, not 'number two'.
  { word: '零', pinyin: 'ling', english: 'zero', level: 1, pos: 'noun' },
  { word: '六', pinyin: 'liu', english: 'Six', level: 1, pos: 'noun' },
  { word: '楼', pinyin: 'lou', english: 'floor', level: 1, pos: 'noun' }, // Also 'building'.
  { word: '楼上', pinyin: 'loushang', english: 'upstairs', level: 1, pos: 'noun' },
  { word: '楼下', pinyin: 'louxia', english: 'downstairs', level: 1, pos: 'noun' },
  { word: '路', pinyin: 'lu', english: 'road', level: 1, pos: 'noun' },
  { word: '路口', pinyin: 'lukou', english: 'intersection; crossing', level: 1, pos: 'noun' },
  { word: '路上', pinyin: 'lushang', english: 'on the road', level: 1, pos: 'noun' },
  { word: '妈妈', pinyin: 'mama', english: 'mom; mother', level: 1, pos: 'noun' },
  { word: '马路', pinyin: 'malu', english: 'road; street', level: 1, pos: 'noun' },
  { word: '马上', pinyin: 'mashang', english: 'Right off', level: 1, pos: 'adverb' },
  { word: '吗', pinyin: 'ma', english: 'auxiliary word', level: 1, pos: 'interjection' }, // Question particle.
  { word: '买', pinyin: 'mai', english: 'buy', level: 1, pos: 'verb' },
  { word: '慢', pinyin: 'man', english: 'slow', level: 1, pos: 'adjective' },
  { word: '忙', pinyin: 'mang', english: 'busy', level: 1, pos: 'adjective' },
  { word: '毛', pinyin: 'mao', english: 'a fractional unit of money in China (measure word)', level: 1, pos: 'noun' },
  { word: '没', pinyin: 'mei', english: 'no', level: 1, pos: 'adverb' }, // Used with 有.
  { word: '没关系', pinyin: 'meiguanxi', english: 'No problem', level: 1, pos: 'interjection' },
  { word: '没什么', pinyin: 'meishenme', english: 'It\'s nothing', level: 1, pos: 'interjection' },
  { word: '没事儿', pinyin: 'meishir', english: 'It\'s okay', level: 1, pos: 'interjection' },
  { word: '没有', pinyin: 'meiyou', english: 'have not; no', level: 1, pos: 'verb' },
  { word: '妹妹', pinyin: 'meimei', english: 'younger sister', level: 1, pos: 'noun' },
  { word: '门', pinyin: 'men', english: 'door', level: 1, pos: 'noun' },
  { word: '门口', pinyin: 'menkou', english: 'doorway', level: 1, pos: 'noun' },
  { word: '门票', pinyin: 'menpiao', english: 'tickets', level: 1, pos: 'noun' },
  // { word: '们', pinyin: 'men', english: 'plural marker for pronouns and a few animate nouns (friends)', level: 1, pos: 'suffix' }, // Suffix, not a standalone word for typical vocab list object.
  { word: '米饭', pinyin: 'mifan', english: 'Steamed Rice', level: 1, pos: 'noun' },
  { word: '面包', pinyin: 'mianbao', english: 'Bread', level: 1, pos: 'noun' },
  { word: '面条儿', pinyin: 'miantiaor', english: 'noodles', level: 1, pos: 'noun' },
  { word: '名字', pinyin: 'mingzi', english: 'Name', level: 1, pos: 'noun' },
  { word: '明白', pinyin: 'mingbai', english: 'clear', level: 1, pos: 'verb' }, // Can also be adjective 'clear'.
  { word: '明年', pinyin: 'mingnian', english: 'next year', level: 1, pos: 'noun' },
  { word: '明天', pinyin: 'mingtian', english: 'Tomorrow', level: 1, pos: 'noun' },
  { word: '拿', pinyin: 'na', english: 'take', level: 1, pos: 'verb' },
  { word: '哪', pinyin: 'na', english: 'which', level: 1, pos: 'pronoun' },
  { word: '哪里', pinyin: 'nali', english: 'where', level: 1, pos: 'pronoun' },
  { word: '哪儿', pinyin: 'nar', english: 'where', level: 1, pos: 'pronoun' },
  { word: '哪些', pinyin: 'naxie', english: 'which', level: 1, pos: 'pronoun' }, // Plural of 'which'.
  { word: '那', pinyin: 'na', english: 'that', level: 1, pos: 'pronoun' },
  { word: '那边', pinyin: 'nabian', english: 'there', level: 1, pos: 'noun' },
  { word: '那里', pinyin: 'nali', english: 'there', level: 1, pos: 'noun' }, // Place word.
  { word: '那儿', pinyin: 'nar', english: 'there', level: 1, pos: 'noun' }, // Place word.
  { word: '那些', pinyin: 'naxie', english: 'those', level: 1, pos: 'pronoun' },
  { word: '奶', pinyin: 'nai', english: 'milk', level: 1, pos: 'noun' },
  { word: '奶奶', pinyin: 'nainai', english: 'grandma', level: 1, pos: 'noun' },
  { word: '男', pinyin: 'nan', english: 'Man', level: 1, pos: 'noun' }, // Often adjective 'male'.
  { word: '男孩儿', pinyin: 'nanhair', english: 'boy', level: 1, pos: 'noun' },
  { word: '男朋友', pinyin: 'nanpengyou', english: 'boyfriend', level: 1, pos: 'noun' },
  { word: '男人', pinyin: 'nanren', english: 'man', level: 1, pos: 'noun' },
  { word: '男生', pinyin: 'nansheng', english: 'boy', level: 1, pos: 'noun' },
  { word: '南', pinyin: 'nan', english: 'south', level: 1, pos: 'noun' },
  { word: '南边', pinyin: 'nanbian', english: 'south; south side', level: 1, pos: 'noun' },
  { word: '难', pinyin: 'nan', english: 'hard, difficult', level: 1, pos: 'adjective' },
  { word: '呢', pinyin: 'ne', english: 'auxiliary word', level: 1, pos: 'interjection' }, // Particle, often for follow-up questions.
  { word: '能', pinyin: 'neng', english: 'can', level: 1, pos: 'verb' }, // Modal verb.
  { word: '你', pinyin: 'ni', english: 'you', level: 1, pos: 'pronoun' },
  { word: '你们', pinyin: 'nimen', english: 'you', level: 1, pos: 'pronoun' }, // Plural.
  { word: '年', pinyin: 'nian', english: 'year', level: 1, pos: 'noun' },
  { word: '您', pinyin: 'nin', english: 'you', level: 1, pos: 'pronoun' }, // Polite form.
  { word: '牛奶', pinyin: 'niunai', english: 'milk', level: 1, pos: 'noun' },
  { word: '女', pinyin: 'nü', english: 'woman', level: 1, pos: 'noun' }, // Often adjective 'female'. Pinyin 'nv' if no 'ü'.
  { word: '女儿', pinyin: 'nüer', english: 'daughter', level: 1, pos: 'noun' }, // Pinyin 'nver'.
  { word: '女孩儿', pinyin: 'nühair', english: 'girl', level: 1, pos: 'noun' }, // Pinyin 'nvhair'.
  { word: '女朋友', pinyin: 'nüpengyou', english: 'girlfriend', level: 1, pos: 'noun' }, // Pinyin 'nvpengyou'.
  { word: '女人', pinyin: 'nüren', english: 'woman', level: 1, pos: 'noun' }, // Pinyin 'nvren'.
  { word: '女生', pinyin: 'nüsheng', english: 'girl', level: 1, pos: 'noun' }, // Pinyin 'nvsheng'.
  { word: '旁边', pinyin: 'pangbian', english: 'Side', level: 1, pos: 'noun' },
  { word: '跑', pinyin: 'pao', english: 'run', level: 1, pos: 'verb' },
  { word: '朋友', pinyin: 'pengyou', english: 'Friend', level: 1, pos: 'noun' },
  { word: '票', pinyin: 'piao', english: 'ticket', level: 1, pos: 'noun' },
  { word: '七', pinyin: 'qi', english: 'Seven', level: 1, pos: 'noun' },
  { word: '起', pinyin: 'qi', english: 'get up; start; rise', level: 1, pos: 'verb' },
  { word: '起床', pinyin: 'qichuang', english: 'Get up', level: 1, pos: 'verb' },
  { word: '起来', pinyin: 'qilai', english: 'get up', level: 1, pos: 'verb' }, // Directional complement.
  { word: '汽车', pinyin: 'qiche', english: 'car', level: 1, pos: 'noun' },
  { word: '前', pinyin: 'qian', english: 'front', level: 1, pos: 'noun' }, // Often part of 前面.
  { word: '前边', pinyin: 'qianbian', english: 'in front', level: 1, pos: 'noun' },
  { word: '前天', pinyin: 'qiantian', english: 'the day before yesterday', level: 1, pos: 'noun' },
  { word: '钱', pinyin: 'qian', english: 'money', level: 1, pos: 'noun' },
  { word: '钱包', pinyin: 'qianbao', english: 'wallet', level: 1, pos: 'noun' },
  { word: '请', pinyin: 'qing', english: 'please', level: 1, pos: 'verb' }, // Also 'to invite', 'to treat'.
  { word: '请假', pinyin: 'qingjia', english: 'ask for leave', level: 1, pos: 'verb' },
  { word: '请进', pinyin: 'qingjin', english: 'please come in', level: 1, pos: 'verb' },
  { word: '请问', pinyin: 'qingwen', english: 'excuse me', level: 1, pos: 'verb' },
  { word: '请坐', pinyin: 'qingzuo', english: 'please have a seat', level: 1, pos: 'verb' },
  { word: '球', pinyin: 'qiu', english: 'ball', level: 1, pos: 'noun' },
  { word: '去', pinyin: 'qu', english: 'go', level: 1, pos: 'verb' },
  { word: '去年', pinyin: 'qunian', english: 'Last year', level: 1, pos: 'noun' },
  { word: '热', pinyin: 're', english: 'heat', level: 1, pos: 'adjective' }, // More commonly 'hot'.
  { word: '人', pinyin: 'ren', english: 'people', level: 1, pos: 'noun' },
  { word: '认识', pinyin: 'renshi', english: 'know', level: 1, pos: 'verb' }, // To be acquainted with.
  { word: '认真', pinyin: 'renzhen', english: 'earnest', level: 1, pos: 'adjective' },
  { word: '日', pinyin: 'ri', english: 'date', level: 1, pos: 'noun' }, // Also 'sun', 'day'.
  { word: '日期', pinyin: 'riqi', english: 'Date', level: 1, pos: 'noun' },
  { word: '肉', pinyin: 'rou', english: 'meat', level: 1, pos: 'noun' },
  { word: '三', pinyin: 'san', english: 'Three', level: 1, pos: 'noun' },
  { word: '山', pinyin: 'shan', english: 'mountain', level: 1, pos: 'noun' },
  { word: '商场', pinyin: 'shangchang', english: 'mall; shopping mall', level: 1, pos: 'noun' },
  { word: '商店', pinyin: 'shangdian', english: 'Shop', level: 1, pos: 'noun' },
  { word: '上', pinyin: 'shang', english: 'upper', level: 1, pos: 'noun' }, // Also verb 'to go up', 'to attend'.
  { word: '上班', pinyin: 'shangban', english: 'go to work', level: 1, pos: 'verb' },
  { word: '上边', pinyin: 'shangbian', english: 'above; on', level: 1, pos: 'noun' },
  { word: '上车', pinyin: 'shangche', english: 'get on', level: 1, pos: 'verb' },
  { word: '上次', pinyin: 'shangci', english: 'last time', level: 1, pos: 'noun' },
  { word: '上课', pinyin: 'shangke', english: 'attend class; have a class', level: 1, pos: 'verb' },
  { word: '上网', pinyin: 'shangwang', english: 'Surf the Internet', level: 1, pos: 'verb' },
  { word: '上午', pinyin: 'shangwu', english: 'morning', level: 1, pos: 'noun' },
  { word: '上学', pinyin: 'shangxue', english: 'go to school', level: 1, pos: 'verb' },
  { word: '少', pinyin: 'shao', english: 'less', level: 1, pos: 'adjective' }, // Can also be verb 'to lack'.
  { word: '谁', pinyin: 'shei', english: 'who', level: 1, pos: 'pronoun' }, // Also 'shui'.
  { word: '身上', pinyin: 'shenshang', english: 'body; on one\'s body', level: 1, pos: 'noun' },
  { word: '身体', pinyin: 'shenti', english: 'body', level: 1, pos: 'noun' },
  { word: '什么', pinyin: 'shenme', english: 'What', level: 1, pos: 'pronoun' },
  { word: '生病', pinyin: 'shengbing', english: 'Fall ill', level: 1, pos: 'verb' },
  { word: '生气', pinyin: 'shengqi', english: 'get angry', level: 1, pos: 'verb' },
  { word: '生日', pinyin: 'shengri', english: 'Birthday', level: 1, pos: 'noun' },
  { word: '十', pinyin: 'shi', english: 'Ten', level: 1, pos: 'noun' },
  { word: '时候', pinyin: 'shihou', english: 'time', level: 1, pos: 'noun' }, // (a point in) time.
  { word: '时间', pinyin: 'shijian', english: 'time', level: 1, pos: 'noun' }, // (duration of) time.
  { word: '事', pinyin: 'shi', english: 'thing', level: 1, pos: 'noun' }, // Matter, affair.
  { word: '试', pinyin: 'shi', english: 'try', level: 1, pos: 'verb' },
  { word: '是', pinyin: 'shi', english: 'yes', level: 1, pos: 'verb' }, // More commonly 'to be'.
  { word: '是不是', pinyin: 'shibushi', english: 'isn\'t it?', level: 1, pos: 'verb' }, // Verb phrase.
  { word: '手', pinyin: 'shou', english: 'hand', level: 1, pos: 'noun' },
  { word: '手机', pinyin: 'shouji', english: 'Mobile phone', level: 1, pos: 'noun' },
  { word: '书', pinyin: 'shu', english: 'book', level: 1, pos: 'noun' },
  { word: '书包', pinyin: 'shubao', english: 'school bag', level: 1, pos: 'noun' },
  { word: '书店', pinyin: 'shudian', english: 'bookstore', level: 1, pos: 'noun' },
  { word: '树', pinyin: 'shu', english: 'tree', level: 1, pos: 'noun' },
  { word: '水', pinyin: 'shui', english: 'water', level: 1, pos: 'noun' },
  { word: '水果', pinyin: 'shuiguo', english: 'Fruits', level: 1, pos: 'noun' },
  { word: '睡', pinyin: 'shui', english: 'sleep', level: 1, pos: 'verb' },
  { word: '睡觉', pinyin: 'shuijiao', english: 'sleep', level: 1, pos: 'verb' },
  { word: '说', pinyin: 'shuo', english: 'speak', level: 1, pos: 'verb' },
  { word: '说话', pinyin: 'shuohua', english: 'talk', level: 1, pos: 'verb' },
  { word: '四', pinyin: 'si', english: 'Four', level: 1, pos: 'noun' },
  { word: '送', pinyin: 'song', english: 'give', level: 1, pos: 'verb' }, // As a gift, also 'to see off'.
  { word: '岁', pinyin: 'sui', english: 'year, age', level: 1, pos: 'noun' }, // Measure word for age.
  { word: '他', pinyin: 'ta', english: 'he', level: 1, pos: 'pronoun' },
  { word: '他们', pinyin: 'tamen', english: 'they', level: 1, pos: 'pronoun' }, // Masculine or mixed.
  { word: '她', pinyin: 'ta', english: 'she', level: 1, pos: 'pronoun' },
  { word: '她们', pinyin: 'tamen', english: 'they', level: 1, pos: 'pronoun' }, // Feminine.
  { word: '太', pinyin: 'tai', english: 'too', level: 1, pos: 'adverb' },
  { word: '天', pinyin: 'tian', english: 'day', level: 1, pos: 'noun' }, // Also 'sky'.
  { word: '天气', pinyin: 'tianqi', english: 'weather', level: 1, pos: 'noun' },
  { word: '听', pinyin: 'ting', english: 'hear', level: 1, pos: 'verb' }, // Also 'to listen'.
  { word: '听到', pinyin: 'tingdao', english: 'hear', level: 1, pos: 'verb' },
  { word: '听见', pinyin: 'tingjian', english: 'hear', level: 1, pos: 'verb' },
  { word: '听写', pinyin: 'tingxie', english: 'dictation; dictate', level: 1, pos: 'verb' }, // Can also be noun.
  { word: '同学', pinyin: 'tongxue', english: 'Classmate', level: 1, pos: 'noun' },
  { word: '图书馆', pinyin: 'tushuguan', english: 'Library', level: 1, pos: 'noun' },
  { word: '外', pinyin: 'wai', english: 'abroad, outside', level: 1, pos: 'noun' },
  { word: '外边', pinyin: 'waibian', english: 'outside', level: 1, pos: 'noun' },
  { word: '外国', pinyin: 'waiguo', english: 'foreign country', level: 1, pos: 'noun' },
  { word: '外语', pinyin: 'waiyu', english: 'foreign language', level: 1, pos: 'noun' },
  { word: '玩儿', pinyin: 'wanr', english: 'play', level: 1, pos: 'verb' },
  { word: '晚', pinyin: 'wan', english: 'late', level: 1, pos: 'adjective' },
  { word: '晚饭', pinyin: 'wanfan', english: 'dinner', level: 1, pos: 'noun' },
  { word: '晚上', pinyin: 'wanshang', english: 'Night', level: 1, pos: 'noun' },
  { word: '网上', pinyin: 'wangshang', english: 'online', level: 1, pos: 'adverb' }, // Or noun phrase.
  { word: '网友', pinyin: 'wangyou', english: 'net friend', level: 1, pos: 'noun' },
  { word: '忘', pinyin: 'wang', english: 'forget', level: 1, pos: 'verb' },
  { word: '忘记', pinyin: 'wangji', english: 'forget', level: 1, pos: 'verb' },
  { word: '问', pinyin: 'wen', english: 'ask', level: 1, pos: 'verb' },
  { word: '我', pinyin: 'wo', english: 'I', level: 1, pos: 'pronoun' },
  { word: '我们', pinyin: 'women', english: 'We', level: 1, pos: 'pronoun' },
  { word: '五', pinyin: 'wu', english: 'Five', level: 1, pos: 'noun' },
  { word: '午饭', pinyin: 'wufan', english: 'lunch', level: 1, pos: 'noun' },
  { word: '西', pinyin: 'xi', english: 'west', level: 1, pos: 'noun' },
  { word: '西边', pinyin: 'xibian', english: 'west; west side', level: 1, pos: 'noun' },
  { word: '洗', pinyin: 'xi', english: 'wash', level: 1, pos: 'verb' },
  { word: '洗手间', pinyin: 'xishoujian', english: 'Restroom', level: 1, pos: 'noun' },
  { word: '喜欢', pinyin: 'xihuan', english: 'like', level: 1, pos: 'verb' },
  { word: '下', pinyin: 'xia', english: 'below; under; next; go down; get off', level: 1, pos: 'noun' }, // Also verb.
  { word: '下班', pinyin: 'xiaban', english: 'get off work', level: 1, pos: 'verb' },
  { word: '下边', pinyin: 'xiabian', english: 'below; under', level: 1, pos: 'noun' },
  { word: '下车', pinyin: 'xiache', english: 'get off', level: 1, pos: 'verb' },
  { word: '下次', pinyin: 'xiaci', english: 'next time', level: 1, pos: 'noun' },
  { word: '下课', pinyin: 'xiake', english: 'finish class', level: 1, pos: 'verb' },
  { word: '下午', pinyin: 'xiawu', english: 'Afternoon', level: 1, pos: 'noun' },
  { word: '下雨', pinyin: 'xiayu', english: 'rain', level: 1, pos: 'verb' }, // Verb-object phrase.
  { word: '先', pinyin: 'xian', english: 'before', level: 1, pos: 'adverb' }, // Also 'first'.
  { word: '先生', pinyin: 'xiansheng', english: 'Sir', level: 1, pos: 'noun' }, // Also 'Mr.', 'husband'.
  { word: '现在', pinyin: 'xianzai', english: 'Now', level: 1, pos: 'noun' }, // Time word.
  { word: '想', pinyin: 'xiang', english: 'think', level: 1, pos: 'verb' }, // Also 'to want to', 'to miss'.
  { word: '小', pinyin: 'xiao', english: 'Small', level: 1, pos: 'adjective' },
  { word: '小孩儿', pinyin: 'xiaohair', english: 'child; kid', level: 1, pos: 'noun' },
  { word: '小姐', pinyin: 'xiaojie', english: 'Miss', level: 1, pos: 'noun' },
  { word: '小朋友', pinyin: 'xiaopengyou', english: 'child; kid', level: 1, pos: 'noun' },
  { word: '小时', pinyin: 'xiaoshi', english: 'hour', level: 1, pos: 'noun' },
  { word: '小学', pinyin: 'xiaoxue', english: 'primary school; elementary school', level: 1, pos: 'noun' },
  { word: '小学生', pinyin: 'xiaoxuesheng', english: 'elementary school student', level: 1, pos: 'noun' },
  { word: '笑', pinyin: 'xiao', english: 'laugh', level: 1, pos: 'verb' },
  { word: '写', pinyin: 'xie', english: 'write', level: 1, pos: 'verb' },
  { word: '谢谢', pinyin: 'xiexie', english: 'Thank you', level: 1, pos: 'interjection' }, // Or verb.
  { word: '新', pinyin: 'xin', english: 'new', level: 1, pos: 'adjective' },
  { word: '新年', pinyin: 'xinnian', english: 'New Year', level: 1, pos: 'noun' },
  { word: '星期', pinyin: 'xingqi', english: 'week', level: 1, pos: 'noun' },
  { word: '星期日', pinyin: 'xingqiri', english: 'Sunday', level: 1, pos: 'noun' },
  { word: '星期天', pinyin: 'xingqitian', english: 'Sunday', level: 1, pos: 'noun' },
  { word: '行', pinyin: 'xing', english: 'That\'s ok', level: 1, pos: 'verb' }, // Also 'to walk', 'capable'.
  { word: '休息', pinyin: 'xiuxi', english: 'Rest', level: 1, pos: 'verb' },
  { word: '学', pinyin: 'xue', english: 'learn; study', level: 1, pos: 'verb' },
  { word: '学生', pinyin: 'xuesheng', english: 'Student', level: 1, pos: 'noun' },
  { word: '学习', pinyin: 'xuexi', english: 'Study', level: 1, pos: 'verb' },
  { word: '学校', pinyin: 'xuexiao', english: 'School', level: 1, pos: 'noun' },
  { word: '学院', pinyin: 'xueyuan', english: 'college; academy', level: 1, pos: 'noun' },
  { word: '要', pinyin: 'yao', english: 'want', level: 1, pos: 'verb' }, // Modal verb, also 'to need', 'will'.
  { word: '爷爷', pinyin: 'yeye', english: 'grandpa', level: 1, pos: 'noun' },
  { word: '也', pinyin: 'ye', english: 'also', level: 1, pos: 'adverb' },
  { word: '页', pinyin: 'ye', english: 'page', level: 1, pos: 'noun' }, // Measure word.
  { word: '一', pinyin: 'yi', english: 'One', level: 1, pos: 'noun' },
  { word: '衣服', pinyin: 'yifu', english: 'clothes', level: 1, pos: 'noun' },
  { word: '医生', pinyin: 'yisheng', english: 'Doctor', level: 1, pos: 'noun' },
  { word: '医院', pinyin: 'yiyuan', english: 'Hospital', level: 1, pos: 'noun' },
  { word: '一半', pinyin: 'yiban', english: 'half', level: 1, pos: 'noun' },
  { word: '一会儿', pinyin: 'yihuir', english: 'A little while', level: 1, pos: 'noun' },
  { word: '一块儿', pinyin: 'yikuair', english: 'together', level: 1, pos: 'adverb' }, // Also 'one piece'.
  { word: '一下儿', pinyin: 'yixiar', english: 'a little bit', level: 1, pos: 'adverb' }, // Indicates brief action.
  { word: '一样', pinyin: 'yiyang', english: 'equally', level: 1, pos: 'adverb' }, // More commonly adjective 'same'.
  { word: '一边', pinyin: 'yibian', english: 'One side', level: 1, pos: 'noun' }, // Used in structure '一边...一边...'.
  { word: '一点儿', pinyin: 'yidianr', english: 'a little bit', level: 1, pos: 'noun' }, // Quantity.
  { word: '一起', pinyin: 'yiqi', english: 'together', level: 1, pos: 'adverb' },
  { word: '一些', pinyin: 'yixie', english: 'some', level: 1, pos: 'noun' }, // Quantity.
  { word: '用', pinyin: 'yong', english: 'use', level: 1, pos: 'verb' },
  { word: '有', pinyin: 'you', english: 'have', level: 1, pos: 'verb' },
  { word: '有的', pinyin: 'youde', english: 'some', level: 1, pos: 'pronoun' },
  { word: '有名', pinyin: 'youming', english: 'Famous', level: 1, pos: 'adjective' },
  { word: '有时候', pinyin: 'youshihou', english: 'sometimes', level: 1, pos: 'adverb' },
  { word: '有(一)些', pinyin: 'youyixie', english: 'some', level: 1, pos: 'noun' }, // Quantity.
  { word: '有用', pinyin: 'youyong', english: 'useful', level: 1, pos: 'adjective' },
  { word: '右', pinyin: 'you', english: 'right', level: 1, pos: 'noun' }, // Direction.
  { word: '右边', pinyin: 'youbian', english: 'Right', level: 1, pos: 'noun' }, // Direction.
  { word: '雨', pinyin: 'yu', english: 'rain', level: 1, pos: 'noun' },
  { word: '元', pinyin: 'yuan', english: 'element; Yuan', level: 1, pos: 'noun' }, // Currency unit.
  { word: '远', pinyin: 'yuan', english: 'far', level: 1, pos: 'adjective' },
  { word: '月', pinyin: 'yue', english: 'month', level: 1, pos: 'noun' }, // Also 'moon'.
  { word: '再', pinyin: 'zai', english: 'again', level: 1, pos: 'adverb' },
  { word: '再见', pinyin: 'zaijian', english: 'Bye', level: 1, pos: 'interjection' }, // Or verb phrase.
  { word: '在', pinyin: 'zai', english: 'stay; in process of', level: 1, pos: 'verb' }, // Also preposition 'at/in/on'.
  { word: '在家', pinyin: 'zaijia', english: 'at home', level: 1, pos: 'adverb' }, // Or verb phrase.
  { word: '早', pinyin: 'zao', english: 'early', level: 1, pos: 'adjective' },
  { word: '早饭', pinyin: 'zaofan', english: 'breakfast', level: 1, pos: 'noun' },
  { word: '早上', pinyin: 'zaoshang', english: 'Morning', level: 1, pos: 'noun' },
  { word: '怎么', pinyin: 'zenme', english: 'How', level: 1, pos: 'pronoun' }, // Interrogative pronoun.
  { word: '站', pinyin: 'zhan', english: 'station', level: 1, pos: 'noun' }, // Can also be verb 'to stand'.
  { word: '找', pinyin: 'zhao', english: 'look for', level: 1, pos: 'verb' },
  { word: '找到', pinyin: 'zhaodao', english: 'find', level: 1, pos: 'verb' },
  { word: '这', pinyin: 'zhe', english: 'Here (here)', level: 1, pos: 'pronoun' }, // More commonly 'this'.
  { word: '这边', pinyin: 'zhebian', english: 'here', level: 1, pos: 'noun' }, // This side.
  { word: '这里', pinyin: 'zheli', english: 'here', level: 1, pos: 'noun' }, // Place word.
  { word: '这儿', pinyin: 'zher', english: 'here', level: 1, pos: 'noun' }, // Place word.
  { word: '这些', pinyin: 'zhexie', english: 'these', level: 1, pos: 'pronoun' },
  { word: '着', pinyin: 'zhe', english: 'in process of', level: 1, pos: 'adverb' }, // More accurately a particle indicating continuous aspect.
  { word: '真', pinyin: 'zhen', english: 'really', level: 1, pos: 'adverb' },
  { word: '真的', pinyin: 'zhende', english: 'really', level: 1, pos: 'adverb' }, // Can also be adjective.
  { word: '正', pinyin: 'zheng', english: 'just; exactly', level: 1, pos: 'adverb' },
  { word: '正在', pinyin: 'zhengzai', english: 'in process of', level: 1, pos: 'adverb' },
  { word: '知道', pinyin: 'zhidao', english: 'know', level: 1, pos: 'verb' },
  { word: '知识', pinyin: 'zhishi', english: 'knowledge', level: 1, pos: 'noun' },
  { word: '中', pinyin: 'zhong', english: 'middle; in', level: 1, pos: 'noun' },
  { word: '中国', pinyin: 'zhongguo', english: 'China', level: 1, pos: 'noun' },
  { word: '中间', pinyin: 'zhongjian', english: 'Middle', level: 1, pos: 'noun' },
  { word: '中文', pinyin: 'zhongwen', english: 'Chinese', level: 1, pos: 'noun' }, // Language.
  { word: '中午', pinyin: 'zhongwu', english: 'Noon', level: 1, pos: 'noun' },
  { word: '中学', pinyin: 'zhongxue', english: 'middle school', level: 1, pos: 'noun' },
  { word: '中学生', pinyin: 'zhongxuesheng', english: 'middle School student', level: 1, pos: 'noun' },
  { word: '重', pinyin: 'zhong', english: 'heavy', level: 1, pos: 'adjective' },
  { word: '重要', pinyin: 'zhongyao', english: 'important', level: 1, pos: 'adjective' },
  { word: '住', pinyin: 'zhu', english: 'live', level: 1, pos: 'verb' },
  { word: '准备', pinyin: 'zhunbei', english: 'Get ready', level: 1, pos: 'verb' }, // Also 'to prepare'.
  { word: '桌子', pinyin: 'zhuozi', english: 'Table', level: 1, pos: 'noun' },
  { word: '字', pinyin: 'zi', english: 'word, character', level: 1, pos: 'noun' },
  // { word: '子', pinyin: 'zi', english: 'noun suffix (table)', level: 1, pos: 'suffix' }, // Suffix, not a standalone word for typical vocab list object.
  { word: '走', pinyin: 'zou', english: 'go, walk', level: 1, pos: 'verb' },
  { word: '走路', pinyin: 'zoulu', english: 'walk', level: 1, pos: 'verb' },
  { word: '最', pinyin: 'zui', english: 'most', level: 1, pos: 'adverb' },
  { word: '最好', pinyin: 'zuihao', english: 'Best', level: 1, pos: 'adjective' }, // Also adverb 'had better'.
  { word: '最后', pinyin: 'zuihou', english: 'Last', level: 1, pos: 'adjective' }, // Or noun 'the end'.
  { word: '昨天', pinyin: 'zuotian', english: 'Yesterday', level: 1, pos: 'noun' },
  { word: '左', pinyin: 'zuo', english: 'left', level: 1, pos: 'noun' }, // Direction.
  { word: '左边', pinyin: 'zuobian', english: 'left', level: 1, pos: 'noun' }, // Direction.
  { word: '坐', pinyin: 'zuo', english: 'sit', level: 1, pos: 'verb' },
  { word: '坐下', pinyin: 'zuoxia', english: 'sit down', level: 1, pos: 'verb' },
  { word: '做', pinyin: 'zuo', english: 'do', level: 1, pos: 'verb' },

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
