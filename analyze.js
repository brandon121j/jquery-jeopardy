const fs = require('fs');

const rawData = fs.readFileSync('jeopardy.json');
let data = JSON.parse(rawData);

data = data.filter(question => question.showNumber === 5957);

console.log(data);
console.log(data.length);