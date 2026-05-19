const fs = require('fs');

const data = ['故宫', '西湖', '长城'];
fs.writeFileSync('visited-spots.json', JSON.stringify(data, null, 2), { encoding: 'utf8' });
console.log('文件已写入');

const content = fs.readFileSync('visited-spots.json', { encoding: 'utf8' });
console.log('读取内容:', content);

const parsed = JSON.parse(content);
console.log('解析结果:', parsed);