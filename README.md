# 画师评价系统

一个基于AI的画师作品评价和话术生成系统。

## 功能特点

- 🎨 智能画师作品评价
- 💬 自动话术生成
- 📝 模板管理系统
- 🔧 配置管理界面
- 📱 响应式设计

## 技术栈

- HTML5 + CSS3 + JavaScript
- Tailwind CSS
- Font Awesome
- Coze AI API

## 部署

本项目支持部署到多个HTTPS平台：

- Netlify (推荐)
- Vercel
- GitHub Pages
- Cloudflare Pages

详细部署说明请参考 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 本地开发

1. 克隆项目
```bash
git clone <your-repo-url>
cd hp6
```

2. 安装依赖
```bash
npm install
```

3. 启动本地服务器
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .
```

4. 访问 http://localhost:8000

## 配置

在部署前，请在 `index.html` 中配置您的API信息：

```javascript
let API_CONFIG = {
    apiKey: 'your-coze-api-key-here',
    botId: 'your-bot-id-here'
};
```

## 许可证

ISC
