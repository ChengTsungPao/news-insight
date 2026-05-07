const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

// 1x1 transparent PNG
const b = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
['icon.png', 'splash.png', 'adaptive-icon.png', 'favicon.png'].forEach(f => {
    fs.writeFileSync(path.join(dir, f), b);
});
console.log('Assets created successfully!');
