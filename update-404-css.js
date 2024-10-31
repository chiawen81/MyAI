const fs = require('fs');
const path = require('path');

// 定義目標文件夾和 HTML 文件路徑
const distPath = path.join(__dirname, 'dist');           // 根目錄 dist
const userDistPath = path.join(distPath, 'user');        // dist/user 目錄
const htmlFilePaths = [
  path.join(distPath, '404.html'),                       // dist/404.html
  path.join(userDistPath, 'index.html')                  // dist/user/index.html
];

// 尋找生成的 CSS 檔案
const cssFile = fs.readdirSync(userDistPath).find(file => file.startsWith('styles') && file.endsWith('.css'));

if (cssFile) {
  // 讀取每個 HTML 文件並替換佔位符的 CSS 路徑
  htmlFilePaths.forEach(filePath => {
    // 檢查文件是否存在
    if (fs.existsSync(filePath)) {
      const htmlContent = fs.readFileSync(filePath, 'utf8');

      // 根據 HTML 文件的不同路徑設置相對路徑
      const relativeCssPath = path.relative(path.dirname(filePath), path.join(userDistPath, cssFile));

      const updatedHtml = htmlContent.replace(
        /<link rel="stylesheet" class="update-styles-scss">/,
        `<link rel="stylesheet" href="${relativeCssPath}">`
      );

      // 寫回更新後的 HTML 文件
      fs.writeFileSync(filePath, updatedHtml, 'utf8');
      console.log(`CSS file ${relativeCssPath} has been successfully replaced in ${filePath}`);
    } else {
      console.error(`File not found: ${filePath}`);
    }
  });
} else {
  console.error('CSS file not found in dist/user folder');
}
