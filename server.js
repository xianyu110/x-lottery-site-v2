const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// 奖品管理 (简单模拟)
const getAvailablePrize = () => {
    const data = JSON.parse(fs.readFileSync('prizes.json', 'utf8'));
    const available = data.prizes.find(p => p.status === 'available');
    if (available) {
        available.status = 'assigned';
        fs.writeFileSync('prizes.json', JSON.stringify(data, null, 2));
        return available.code;
    }
    return null;
};

// 模拟 X 校验接口
app.post('/api/check-follow', async (req, res) => {
    const { x_username } = req.body;
    console.log(`[API] 收到校验请求：用户 ${x_username}`);

    // 这里通常是调用 X API 的地方。
    // 如果你在 .env 中填了 TWITTER_API_KEY，可以进行真实校验。
    // 目前默认模拟成功：
    
    const prize = getAvailablePrize();
    
    if (prize) {
        res.json({
            isFollowing: true,
            prizeCode: prize
        });
    } else {
        res.status(404).json({
            error: "奖品已领完",
            isFollowing: true
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 抽奖网站已在本地运行：http://localhost:${PORT}`);
    console.log(`💡 提示：修改 prizes.json 可以管理奖品库。`);
});
