// 祝福内容可直接在这里修改；也支持分享链接中的 ?name=名字&wish=祝福。
const defaultWish = '愿新的一岁，心有所爱，眼里有光，所有好事都如约而至。';
const wishes = [
  '永远开心', '自在生长', '闪闪发光', '勇敢去爱', '被爱包围',
  '满载快乐', '梦想成真', '平安喜乐', '热烈自由', '好事发生',
  '甜蜜满分', '日日有光', '所有期待', '都能实现', '万事胜意'
];

const scenes = {
  candles: document.getElementById('scene-candles'),
  notes: document.getElementById('scene-notes'),
  cake: document.getElementById('scene-cake')
};
const noteContainer = document.getElementById('notes-container');
const heartBoard = document.getElementById('heart-board');
const countdownStatus = document.getElementById('countdown-status');
const startButton = document.getElementById('start-button');
const replayButton = document.getElementById('replay-button');
const shareButton = document.getElementById('share-button');
const skipButton = document.getElementById('skip-button');
const progressLabel = document.getElementById('progress-label');
const shareFeedback = document.getElementById('share-feedback');
const candles = [...document.querySelectorAll('.number-candle')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let timers = [];
let playId = 0;

function schedule(callback, delay) {
  const id = playId;
  timers.push(window.setTimeout(() => { if (id === playId) callback(); }, delay));
}

function cancelTimeline() {
  playId += 1;
  timers.forEach(window.clearTimeout);
  timers = [];
}

function showScene(name) {
  Object.entries(scenes).forEach(([key, scene]) => {
    const active = name === key;
    scene.classList.toggle('is-active', active);
    scene.toggleAttribute('inert', !active);
    if (active) scene.removeAttribute('aria-hidden');
    else scene.setAttribute('aria-hidden', 'true');
  });
  progressLabel.textContent = {
    candles: '01 / 03 · 点亮愿望',
    notes: '02 / 03 · 把祝福拼成心',
    cake: '03 / 03 · 生日快乐'
  }[name];
  skipButton.hidden = name === 'cake' || name === 'candles' && !startButton.hidden;
}

// 沿用文件夹里“跳动的爱心”代码的经典心形参数方程，
// 但把点转换为便签位置，避免在手机上运行高密度 canvas 粒子。
function heartPoint(t) {
  const x = 16 * Math.sin(t) ** 3;
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  return { x: x / 16 * .40, y: (y - 1) / 17 * .42 };
}

function positionNotes() {
  const width = heartBoard.clientWidth;
  [...noteContainer.children].forEach((note, i) => {
    const t = (i + .45) / wishes.length * Math.PI * 2;
    const point = heartPoint(t);
    note.style.setProperty('--dx', `${Math.round(point.x * width)}px`);
    note.style.setProperty('--dy', `${Math.round(point.y * width)}px`);
  });
}

const colors = ['#ffe4d2', '#ffeac4', '#f9d7db', '#fce3e7', '#e6ddec', '#e9e8cc'];
wishes.forEach((wish, i) => {
  const note = document.createElement('span');
  note.className = 'note';
  note.textContent = wish;
  note.style.setProperty('--note-bg', colors[i % colors.length]);
  note.style.setProperty('--rotate', `${[-11, 7, -4, 9, -7, 5][i % 6]}deg`);
  note.style.setProperty('--delay', `${i * 155}ms`);
  noteContainer.appendChild(note);
});
positionNotes();
if ('ResizeObserver' in window) new ResizeObserver(positionNotes).observe(heartBoard);
else window.addEventListener('resize', positionNotes);

function makeConfetti() {
  const target = document.getElementById('confetti');
  target.replaceChildren();
  if (prefersReducedMotion.matches) return;
  const colors = ['#f38299', '#ffcb72', '#b4a6db', '#a6c5a0', '#f7baa6'];
  for (let i = 0; i < 24; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti__piece';
    piece.style.setProperty('--x', `${(i * 47 + 17) % 100}%`);
    piece.style.setProperty('--drift', `${(i % 2 ? -1 : 1) * (18 + (i * 11) % 48)}px`);
    piece.style.setProperty('--color', colors[i % colors.length]);
    piece.style.setProperty('--delay', `${(i % 6) * 90}ms`);
    piece.style.setProperty('--duration', `${1500 + (i % 4) * 170}ms`);
    target.appendChild(piece);
  }
}

function finish() {
  cancelTimeline();
  showScene('cake');
  makeConfetti();
}

function play() {
  cancelTimeline();
  candles.forEach(candle => candle.classList.remove('is-out', 'is-current'));
  countdownStatus.textContent = '';
  startButton.hidden = true;
  showScene('candles');
  skipButton.hidden = false;
  shareFeedback.textContent = '把这份快乐，也送给你喜欢的人';

  if (prefersReducedMotion.matches) {
    finish();
    return;
  }

  candles[0].classList.add('is-current');
  countdownStatus.textContent = '倒数三';
  schedule(() => {
    candles[0].classList.remove('is-current');
    candles[0].classList.add('is-out');
    candles[1].classList.add('is-current');
    countdownStatus.textContent = '倒数二';
  }, 1100);
  schedule(() => {
    candles[1].classList.remove('is-current');
    candles[1].classList.add('is-out');
    candles[2].classList.add('is-current');
    countdownStatus.textContent = '倒数一';
  }, 2200);
  schedule(() => {
    candles[2].classList.remove('is-current');
    candles[2].classList.add('is-out');
    countdownStatus.textContent = '愿望已经收到';
  }, 3300);
  schedule(() => {
    showScene('notes');
    countdownStatus.textContent = '';
  }, 4000);
  schedule(finish, 9200);
}

const params = new URLSearchParams(window.location.search);
const name = params.get('name')?.trim().slice(0, 12);
const wish = params.get('wish')?.trim().slice(0, 72);
if (name) document.getElementById('recipient').textContent = name;
if (wish) document.getElementById('final-wish').textContent = wish;
else document.getElementById('final-wish').textContent = defaultWish;

startButton.addEventListener('click', play);
// 无音频限制：打开链接后自动开始；仍可提前点按钮立即播放。
window.setTimeout(() => { if (!startButton.hidden) play(); }, 1500);
replayButton.addEventListener('click', play);
skipButton.addEventListener('click', finish);
shareButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    shareFeedback.textContent = '链接已复制，快发给 TA 吧 ♡';
  } catch {
    shareFeedback.textContent = '请长按浏览器地址栏，复制这份祝福的链接';
  }
});
