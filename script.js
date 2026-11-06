// 每一张便利贴：正面短句 + 点开后可阅读的完整祝福。
// 分享链接也支持 ?name=名字&wish=自定义祝福，文字只以 textContent 写入页面。
const wishes = [
  ['平安喜乐', '愿你在新的一岁里，走过的路都有风景，遇见的人都带着善意，日日平安，时时欢喜。'],
  ['自在生长', '愿你有按照自己节奏生活的勇气，不慌不忙地长大，也永远保留热爱世界的好奇。'],
  ['闪闪发光', '愿你走到哪里都能带着自己的光，不必成为谁的样子，做独一无二的自己就很好。'],
  ['心想事成', '愿你认真许下的心愿，经过时间的浇灌，一件一件开花，一件一件实现。'],
  ['被爱包围', '愿你身边始终有人懂得你的沉默，也有人听见你的欢笑，让爱成为生活的底色。'],
  ['一路有光', '愿每次向前迈步的时候，都有光落在肩头；即使遇见雨天，也能看见彩虹。'],
  ['勇敢做梦', '愿你一直拥有做梦的勇气，去奔赴山海，去遇见那些曾经只敢想象的美好。'],
  ['甜蜜满分', '愿平凡的日子里总有小小惊喜，像蛋糕上的奶油一样甜，像今天的笑容一样暖。'],
  ['四季有爱', '愿春有花、夏有风、秋有收获、冬有暖意，四季轮回里始终有人与你分享喜悦。'],
  ['所愿皆得', '愿那些放在心里很久很久的愿望，都能在新的一岁找到属于自己的答案。'],
  ['前途明亮', '愿你前行的道路越走越宽，心中的热爱越来越清晰，所到之处都能发光。'],
  ['每天开心', '愿你每天起床都有期待，睡前都有满足，让开心不是偶尔的礼物，而是生活的常客。'],
  ['永远热烈', '愿你永远保有热烈的心，对喜欢的事认真，对爱的人真诚，对生活充满期待。'],
  ['好运常伴', '愿好运总在刚刚好的时刻出现，帮你推开每一扇期待已久的门。'],
  ['温柔坚定', '愿你温柔却有力量，坚定却不失柔软，在自己的世界里活得坦荡而明亮。'],
  ['岁岁无忧', '愿烦恼随风远去，愿疲惫有处安放，愿新的一岁比上一岁更加轻松自在。'],
  ['见山见海', '愿你有机会去看更远的山、更蓝的海，也记得珍惜此刻身边细小的幸福。'],
  ['有人懂你', '愿你说出口的话有人听，没说出口的心事有人懂，喜悦有人分享，难过有人拥抱。'],
  ['充满勇气', '愿你有勇气开始，也有耐心等待；无论结果如何，都为努力的自己感到骄傲。'],
  ['美梦成真', '愿夜里的美梦在白天慢慢变成现实，愿你每次努力都能得到温柔的回响。'],
  ['一路生花', '愿你走过的每一段路都开满小花，经历的每一次成长都成为值得珍藏的故事。'],
  ['事事顺心', '愿你处理的事情顺顺利利，想见的人如期而至，想说的话都能被认真听见。'],
  ['笑容常在', '愿今天的快乐不只停在今天，明天、后天和更远的日子里，都有真心的笑容。'],
  ['万事胜意', '愿未来所有的经历都比想象中更精彩，想要的美好一件接着一件来到身边。'],
  ['心有暖阳', '愿心里一直住着温暖的太阳，照亮自己的小世界，也照亮爱你的人。'],
  ['自由自在', '愿你能够自由选择喜欢的路，勇敢拒绝不适合的事，舒舒服服地成为自己。'],
  ['收获热爱', '愿你总能遇到值得投入时间的事，努力有收获，热爱有回应，快乐有回声。'],
  ['如约而至', '愿所有期待的好事都不缺席，所有等待都有意义，所有相遇都恰逢其时。'],
  ['身体健康', '愿你吃饭香、睡得安、身体棒，拥有照顾自己的从容，也拥有拥抱世界的力气。'],
  ['日日可爱', '愿日常里常有值得开心的小事：好天气、好朋友、好消息，还有一份好心情。'],
  ['心怀希望', '愿你在不确定的时候依然相信明天，向前走，总会有新的风景与你相遇。'],
  ['遇见惊喜', '愿下一岁的转角藏着惊喜，平平无奇的日子也会忽然因为一件小事闪闪发亮。'],
  ['从容坚定', '愿你遇事不慌，得意不忘，失意不怕，在属于自己的节奏里好好生活。'],
  ['朋友常伴', '愿你和喜欢的人保持联系，和合拍的人一起大笑，把平凡时光过得有声有色。'],
  ['目光清澈', '愿你的眼睛始终明亮，对未知充满期待，对过去温柔告别，对此刻认真拥抱。'],
  ['岁月温柔', '愿时间温柔待你，把难过变成经验，把欢喜变成回忆，把现在变成更好的未来。'],
  ['所有期待', '愿你期待的每件小事都能收到回应，热爱的每段旅程都能拥有好天气。'],
  ['世界拥抱', '愿世界给你足够的善意，也愿你永远记得：你值得被珍惜、被看见、被爱。'],
  ['心愿清单', '愿你把自己的心愿一项项写下来，再慢慢划掉；那是你努力生活的闪亮证据。'],
  ['明天更好', '愿明天的你比今天更轻松一点、更勇敢一点、更爱自己一点。生日快乐！'],
  ['好事发生', '愿那些你曾悄悄期盼的好事，在某个寻常午后突然敲门，告诉你值得。'],
  ['快乐无限', '愿快乐的理由多到数不清，即使偶尔失落，也总有一盏灯为你亮着。'],
  ['长久陪伴', '愿爱你的人陪你走过许多个生日，你想留住的温暖都能被时间好好收藏。'],
  ['未来可期', '愿未来的每一页都有你喜欢的故事，愿你始终是自己人生里最勇敢的主角。'],
  ['光芒万丈', '愿你的努力终有回响，才华被看见，善良被珍惜，梦想被温柔地托起。'],
  ['一生明朗', '愿你这一岁心里有答案，眼里有星光，脚下有方向，身边有同行的人。'],
  ['甜甜生日', '愿今天的蛋糕甜，收到的祝福真，许下的心愿被认真听见；生日快乐！'],
  ['永远被爱', '愿你无论走到哪一站，都知道有人惦记你，也要记得先好好爱自己。']
];
const defaultWish = '愿你在新的一岁里，能去见想见的人，去做想做的事。忙的时候记得休息，开心的时候尽情笑。今天这块蛋糕，先替我把祝福送到你面前。';
const scenes = { candles: document.getElementById('scene-candles'), notes: document.getElementById('scene-notes'), cake: document.getElementById('scene-cake') };
const app = document.getElementById('app');
const heartBoard = document.getElementById('heart-board');
const noteContainer = document.getElementById('notes-container');
const readerLabel = document.getElementById('note-reader-label');
const readerText = document.getElementById('note-reader-text');
const countdownStatus = document.getElementById('countdown-status');
const startButton = document.getElementById('start-button');
const skipButton = document.getElementById('skip-button');
const replayButton = document.getElementById('replay-button');
const shareButton = document.getElementById('share-button');
const shareFeedback = document.getElementById('share-feedback');
const progressLabel = document.getElementById('progress-label');
const candles = [...document.querySelectorAll('.number-candle')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let timers = [];
let playId = 0;

function schedule(callback, delay) {
  const token = playId;
  timers.push(window.setTimeout(() => { if (token === playId) callback(); }, delay));
}
function cancelTimeline() {
  playId += 1;
  timers.forEach(window.clearTimeout);
  timers = [];
}
function showScene(name) {
  Object.entries(scenes).forEach(([key, scene]) => {
    const active = key === name;
    scene.classList.toggle('is-active', active);
    scene.toggleAttribute('inert', !active);
    if (active) scene.removeAttribute('aria-hidden');
    else scene.setAttribute('aria-hidden', 'true');
  });
  app.classList.toggle('is-finale', name === 'cake');
  app.classList.toggle('is-notes', name === 'notes');
  document.querySelector('meta[name="theme-color"]').content = name === 'notes' ? '#f8e5e0' : '#171b24';
  document.querySelectorAll('.scene.is-exiting').forEach(scene => scene.classList.remove('is-exiting'));
  if (name === 'notes') requestAnimationFrame(() => requestAnimationFrame(() => {
    if (scenes.notes.classList.contains('is-active')) scenes.notes.classList.add('is-building');
  }));
  progressLabel.textContent = { candles: '倒数 · ' + (document.querySelector('.number-candle.is-current')?.dataset.number || '3'), notes: '祝福正在抵达', cake: '生日快乐' }[name];
  skipButton.hidden = name === 'cake' || name === 'candles' && !startButton.hidden;
}
function setCandle(index) {
  candles.forEach((candle, i) => candle.classList.toggle('is-current', i === index));
  countdownStatus.textContent = index < 0 ? '愿望已收到' : `倒数${['三', '二', '一'][index]}`;
  if (index >= 0) progressLabel.textContent = `倒数 · ${candles[index].dataset.number}`;
}

// 等弧长取样：40 多张便利贴连起来就是心形轮廓，完全不借助心形线条。
function heartPoint(t) {
  const x = 16 * Math.sin(t) ** 3 / 16 * .405;
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  return { x, y: (y - 1) / 17 * .425 };
}
function evenlySpacedHeart(count) {
  const samples = Array.from({ length: 1601 }, (_, i) => heartPoint(i / 1600 * Math.PI * 2));
  const distances = [0];
  for (let i = 1; i < samples.length; i++) {
    const dx = samples[i].x - samples[i - 1].x;
    const dy = samples[i].y - samples[i - 1].y;
    distances.push(distances[i - 1] + Math.hypot(dx, dy));
  }
  const total = distances.at(-1);
  return Array.from({ length: count }, (_, i) => {
    const target = total * (i + .28) / count;
    let lo = 0, hi = distances.length - 1;
    while (hi - lo > 1) {
      const mid = (hi + lo) >> 1;
      if (distances[mid] < target) lo = mid; else hi = mid;
    }
    return samples[hi];
  });
}
const positions = evenlySpacedHeart(wishes.length);
const colors = ['#fff0ce', '#f8d9e2', '#dfe9e5', '#e8dcf4', '#ffe2d0', '#f6e4bd'];
wishes.forEach(([label, fullWish], i) => {
  const note = document.createElement('button');
  note.type = 'button';
  note.className = 'note';
  const bar = document.createElement('span');
  bar.className = 'note__bar';
  bar.textContent = `✦   祝福 ${String(i + 1).padStart(2, '0')}                         ×`;
  const body = document.createElement('span');
  body.className = 'note__body';
  body.textContent = label;
  note.append(bar, body);
  note.setAttribute('aria-label', `祝福${i + 1}：${fullWish}`);
  note.style.setProperty('--note-bg', colors[i % colors.length]);
  note.style.setProperty('--rotate', `${[-4, 2, 0, 3, -2, 1][i % 6]}deg`);
  note.style.setProperty('--delay', `${i * 72}ms`);
  note.style.zIndex = String(i + 1);
  note.addEventListener('click', () => {
    cancelTimeline(); // 阅读便利贴时暂停自动翻页。
    scenes.notes.classList.add('is-reading', 'is-assembled');
    document.querySelector('.note.is-selected')?.classList.remove('is-selected');
    note.classList.add('is-selected');
    readerLabel.textContent = `第 ${i + 1} 张祝福 · ${label}`;
    readerText.textContent = fullWish;
  });
  noteContainer.append(note);
});
function positionNotes() {
  const width = heartBoard.clientWidth;
  [...noteContainer.children].forEach((note, i) => {
    const point = positions[i];
    note.style.setProperty('--dx', `${Math.round(point.x * width)}px`);
    note.style.setProperty('--dy', `${Math.round(point.y * width)}px`);
    const previous = positions[(i + positions.length - 1) % positions.length];
    note.style.setProperty('--from-x', `${Math.round(previous.x * width)}px`);
    note.style.setProperty('--from-y', `${Math.round(previous.y * width - 9)}px`);
  });
}
positionNotes();
if ('ResizeObserver' in window) new ResizeObserver(positionNotes).observe(heartBoard);
else window.addEventListener('resize', positionNotes);

// 祝福文字本身构成蛋糕的整块底图；只构建一次，重播不叠加 DOM。
const blessingField = document.getElementById('blessing-field');
for (let i = 0; i < 192; i++) {
  const line = document.createElement('span');
  line.textContent = i % 7 === 0 ? wishes[i % wishes.length][1] : wishes[(i * 17 + Math.floor(i / 9)) % wishes.length][0] + ' · ' + wishes[(i * 11 + 3) % wishes.length][0];
  line.style.setProperty('--field-delay', `${(i % 15) * 78}ms`);
  line.style.setProperty('--field-color', ['#ffe1ed', '#d6c5ff', '#ffdeb1', '#cce6db'][i % 4]);
  blessingField.append(line);
}
function makeConfetti() {
  const target = document.getElementById('confetti');
  target.replaceChildren();
  if (reducedMotion.matches) return;
  for (let i = 0; i < 16; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti__piece';
    piece.style.setProperty('--x', `${(i * 47 + 17) % 100}%`);
    piece.style.setProperty('--drift', `${(i % 2 ? -1 : 1) * (18 + (i * 11) % 48)}px`);
    piece.style.setProperty('--color', ['#f38299', '#ffcb72', '#b4a6db', '#a6c5a0'][i % 4]);
    piece.style.setProperty('--delay', `${(i % 6) * 90}ms`);
    piece.style.setProperty('--duration', `${1500 + (i % 4) * 170}ms`);
    target.append(piece);
  }
}
function finish() {
  cancelTimeline();
  showScene('cake');
  if (!reducedMotion.matches) schedule(makeConfetti, 3350);
}
function fadeToScene(name) {
  if (reducedMotion.matches) { showScene(name); return; }
  document.querySelector('.scene.is-active')?.classList.add('is-exiting');
  schedule(() => showScene(name), 230);
}
function play() {
  cancelTimeline();
  startButton.hidden = true;
  scenes.candles.classList.add('has-started');
  scenes.notes.classList.remove('is-reading', 'is-assembled', 'is-building');
  document.getElementById('confetti').replaceChildren();
  shareFeedback.textContent = '愿你喜欢这份小小的礼物';
  document.querySelector('.note.is-selected')?.classList.remove('is-selected');
  readerLabel.textContent = '第一张祝福 · 写给你';
  readerText.textContent = wishes[0][1];
  showScene('candles');
  skipButton.hidden = false;
  setCandle(0);
  if (reducedMotion.matches) {
    schedule(() => { showScene('notes'); scenes.notes.classList.add('is-assembled'); }, 900);
    schedule(finish, 4300);
    return;
  }
  schedule(() => setCandle(1), 1080);
  schedule(() => setCandle(2), 2160);
  schedule(() => fadeToScene('notes'), 3240);
  schedule(() => scenes.notes.classList.add('is-assembled'), 7400);
  schedule(() => fadeToScene('cake'), 10600);
  schedule(makeConfetti, 14300);
}
const params = new URLSearchParams(window.location.search);
const name = params.get('name')?.trim().slice(0, 12);
const wish = params.get('wish')?.trim().slice(0, 120);
if (name) document.getElementById('recipient').textContent = name;
document.getElementById('final-wish').textContent = wish || defaultWish;
startButton.addEventListener('click', play);
window.setTimeout(() => { if (!startButton.hidden) play(); }, 1500);
replayButton.addEventListener('click', play);
document.getElementById('next-button').addEventListener('click', finish);
skipButton.addEventListener('click', finish);
shareButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    shareFeedback.textContent = '链接已复制，快发给 TA 吧 ♡';
  } catch {
    shareFeedback.textContent = '请长按浏览器地址栏，复制这份祝福的链接';
  }
});
