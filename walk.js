const fs = require('fs');
const path = require('path');
const src = require('./config').src;

/**
 * 遍历读取目录下的音频文件
 * @param  {string} path   音频目录
 * @return {array}         音频文件列表
 */
function walk(url) {
  let files = fs.readdirSync(url);
  let fileList = [];
  for (let i = 0; i < files.length; i++) {
    if (path.extname(files[i]) === '.mp3') {
      let name = path.basename(files[i], '.mp3');
      fileList.push({
        src: path.join(src, files[i]),
        name: name.split('-')[0],
        singer: name.split('-')[1]
      });
    }
  }
  return fileList;
}

module.exports = walk;