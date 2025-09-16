# 画师评价系统部署指南

## 项目概述
这是一个画师评价系统的静态Web应用，已经配置好了用于Vercel部署的所有必要文件。

## 部署步骤

### 1. 安装Git（如果尚未安装）
- 访问 [Git官网](https://git-scm.com/) 下载并安装Git
- 或者使用 [GitHub Desktop](https://desktop.github.com/) 图形界面工具

### 2. 初始化Git仓库
```bash
cd e:\CODE\app\hp6
git init
git add .
git commit -m "Initial commit: Artist Review System"
```

### 3. 创建GitHub仓库
1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称建议：`artist-review-system`
4. 设置为Public（公开）
5. 不要初始化README、.gitignore或license（我们已经有了）
6. 点击 "Create repository"

### 4. 推送代码到GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/artist-review-system.git
git branch -M main
git push -u origin main
```

### 5. 部署到Vercel
1. 访问 [Vercel](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择刚才创建的GitHub仓库 `artist-review-system`
5. Vercel会自动检测到这是一个静态网站项目
6. 保持默认设置，点击 "Deploy"
7. 等待部署完成，获得HTTPS域名

## 项目文件说明

### 核心文件
- `index(5).html` - 主应用文件
- `package.json` - 项目配置和依赖
- `vercel.json` - Vercel部署配置
- `.gitignore` - Git忽略文件配置

### 功能文件
- `config-in-file.html` - 配置管理页面
- `debug-test.html` - 调试测试页面
- `function-test.html` - 功能测试页面
- `check-config.html` - 配置检查页面
- `test-config.html` - 配置测试页面

## 环境变量配置

如果需要配置API密钥等敏感信息：

1. 在Vercel项目设置中添加环境变量：
   - `COZE_API_KEY` - 扣子API密钥
   - `COZE_BOT_ID` - 机器人ID

2. 修改 `index(5).html` 中的API_CONFIG配置：
```javascript
let API_CONFIG = {
    apiKey: process.env.COZE_API_KEY || '', 
    botId: process.env.COZE_BOT_ID || ''
};
```

## 部署后验证

1. 访问Vercel提供的域名
2. 检查所有功能是否正常工作
3. 测试API连接（如果已配置）
4. 验证HTTPS证书是否正常

## 自定义域名（可选）

1. 在Vercel项目设置中点击 "Domains"
2. 添加您的自定义域名
3. 按照提示配置DNS记录
4. 等待SSL证书自动配置完成

## 故障排除

### 常见问题
1. **部署失败** - 检查vercel.json配置是否正确
2. **页面404** - 确认路由配置指向正确的HTML文件
3. **API不工作** - 检查环境变量配置和API密钥

### 日志查看
- 在Vercel项目面板中查看部署日志
- 使用浏览器开发者工具检查控制台错误

## 更新部署

每次代码更新后：
```bash
git add .
git commit -m "Update: 描述更新内容"
git push
```

Vercel会自动检测到推送并重新部署。

---

**注意**: 确保在生产环境中不要暴露API密钥等敏感信息。使用环境变量来管理这些配置。