let fs = require('fs');
const reqWords = require('./words')
let textContent = './Optimism_and_your_health.txt'
function readFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  function count(text, words){
    const counter = {};
  
    for (let group in words) {
        counter[group] = 0;
    }
  
    for (let layer in words) {
        const synonymsRegex = new RegExp(`(${words[layer].join('|')})`, 'gi');
        counter[layer] += (text.match(synonymsRegex) || []).length;
    }
  return counter;
}
let write = function (filePath){
    readFile(filePath).then(data => {
        const countedWords = count(data, reqWords)
        fs.writeFile('result.txt', JSON.stringify(countedWords), () => {console.log("Success")})
    })
    .catch (err => {
        console.log("Fail " + err)
    })
}
write(textContent)
