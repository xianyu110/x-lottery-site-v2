# X 平台抽奖网站 - 本地运行指南

## 1. 安装依赖
在项目根目录下运行：
```bash
npm install
```

## 2. 配置环境 (可选)
如果需要真实的 X 校验，请在 `.env` 中填写你的开发者凭据。
复制 `.env.example` 并重命名为 `.env`。

## 3. 运行项目
执行以下命令启动本地服务器：
```bash
node server.js
```
访问：`http://localhost:3000` 即可开始测试。

## 4. 管理奖品
打开 `prizes.json`：
*   你可以在这里手动添加月卡兑换码。
*   `status` 为 `available` 表示可领取，`assigned` 表示已发出。
