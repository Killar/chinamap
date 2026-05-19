const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'visited-spots.json');

const testData = ['故宫', '西湖', '长城'];

console.log('测试数据:', testData);

fs.writeFileSync(DATA_FILE, JSON.stringify(testData, null, 2), { encoding: 'utf8' });
console.log('数据已写入文件');

const readData = fs.readFileSync(DATA_FILE, { encoding: 'utf8' });
console.log('从文件读取的数据:', readData);

const parsedData = JSON.parse(readData);
console.log('解析后的数据:', parsedData);