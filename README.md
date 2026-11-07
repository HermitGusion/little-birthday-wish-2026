# happy · 生日祝福网页

零依赖的静态网页：准备好了吗 → 蜡烛 3、2、1 → 48 张进一步放大的纸卡沿轮廓一张接一张出现，软糖体祝福字同步放大，直接拼成心形，不用实线描边；纸卡落稳后中央生日卡显现。之后便利签从心形位置绽放铺满屏幕 → 线描生日蛋糕。五幕统一采用奶油粉与暖玫瑰色系。心形页的“生日快乐 / Happy Birthday”背景字共同居中，中央卡片也有英文生日祝福；纸卡绽放采用 WAAPI 的 transform 动画，底图祝福句铺满视口，标题末尾的比心图标参照本地 `比心.jpg` 绘制为与页面协调的暖玫瑰色红心与桃色捏指手势。节奏和配色参考同目录两个视频，心形位置沿用了提供的 Python 爱心参数方程。原始视频没有上传；页面使用的角色肖像来自下方列出的腾讯官方页面。

## 打开与分享

双击 `index.html` 可以本地预览。跨网络分享请使用 GitHub Pages 的公开地址 <https://hermitgusion.github.io/happy/>（仓库：<https://github.com/HermitGusion/happy>）；不能把 `file://` 或 `localhost` 地址发给别的手机。

链接支持可选参数，例如 `?name=小雨&wish=愿你每天都闪闪发光`。不要在公开链接里填写私人信息。也可以直接修改 `script.js` 顶部的 `defaultWish` 和 `wishes`，以及 `index.html` 的默认称呼。

打开页面停留在“准备好了吗？”，点击下方按钮才开始蜡烛倒数及后续动画，不再自动开始；蛋糕页的重播按钮会返回首页，等待再次点击。便签阶段点击任意一张会暂停自动翻页，并在心形中央阅读完整祝福；再点圆形箭头按钮进入绽放铺屏，随后进入蛋糕，不点击则自动前进。继续与重播均为纯图标按钮，并保留无障碍名称；页面不显示复制链接按钮。祝福文字使用随页嵌入的站酷快乐体子集，授权为 SIL Open Font License 1.1，完整版权与授权文本位于 cartoon-font.css 文件头。新增手写体与软萌展示体同样随页嵌入，授权文本位于 scene-fonts.css 文件头。系统开启“减少动态效果”时保留五个场景、减少移动效果。页面没有第三方 JS、图片或音频请求，离线预览也可运行。

首页展示少司缘官方角色肖像，蛋糕页以统一圆形相框展示少司缘、朵莉亚、瑶三人的官方角色肖像。三张 `*-official.webp` 是从王者荣耀官网公开的官方立绘中裁切并压缩的本地图片，并非官方 Q 版图或官方授权的独立素材。原画与角色相关权利归腾讯及原权利人；这是非商业生日祝福展示，请勿单独转载或商用，如需对外长期使用请先确认授权。原始页面：[少司缘](https://pvp.qq.com/ingame/all/tobe/newheros/0810shaosiyuan.html)、[朵莉亚](https://pvp.qq.com/ingame/all/tobe/newheros/1103duoliya.html)、[瑶](https://pvp.qq.com/zlkdatasys/ip/hero/505.html)。

## 部署

GitHub 仓库 Settings → Pages → Build and deployment → Deploy from a branch，选择 `main` 和 `/ (root)`。部署后等候公开地址出现，再用手机的移动网络打开该 HTTPS 地址验证。
