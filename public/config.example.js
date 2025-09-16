// API配置文件模板
// 使用说明：
// 1. 复制此文件并重命名为 config.js
// 2. 填写您的实际API密钥和机器人ID
// 3. config.js 文件不会被提交到Git仓库（已在.gitignore中排除）

// Coze API配置
const API_CONFIG = {
    // 在这里填写您的扣子API密钥（以pat_开头）
    // 示例：'pat_SnrkhHeuv5zIVqz7DLC2sGhfO0z5SxJdAmHuIPoGudo0FbEwwAI6lQnlr9M5bSFX'
    apiKey: '',
    
    // 在这里填写您的机器人ID（纯数字）
    // 示例：'7548722284312772647'
    botId: ''
};

// 导出配置（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
}

// 全局变量（用于浏览器环境）
if (typeof window !== 'undefined') {
    window.API_CONFIG = API_CONFIG;
}