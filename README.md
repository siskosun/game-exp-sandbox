# game-exp sandbox

这是一个专门用于 game-exp 新一轮测试的极简 H5 仓库。

## 原型

- 游戏：Tap Dot
- 技术：单页 HTML/CSS/JS + 零第三方依赖 Node 脚本
- 玩法：20 秒内不断点击随机移动的圆点，累计得分
- 资产：无外部素材
- 目的：把变量压到最低，方便测试 experiment / branch / Candidate / Review / Rehearsal / Archive / 跨 Harness 恢复

## 运行

直接打开 `index.html` 即可。

## 验证

```bash
npm ci
npm test
npm run build
```

构建产物为 `dist/index.html`，与 game-exp 当前 node-npm 项目策略兼容。

## 推荐的后续实验变量

一次只改一个主要变量，例如：

- 圆点尺寸
- 计时规则
- 连击奖励
- 错点惩罚
- 双目标选择

基础版本刻意不加入账号、存档、后端、素材管线或框架。
