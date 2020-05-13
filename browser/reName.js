var fs = require('fs');

var path=require('path');

const pathName = `${__dirname}/src`

function reName(dir) {
  return fs.readdir(dir, function(err, files) {
    if (err) {
      console.log('ERROR:', err)
    }
    const len = files.length
    for (let i = 0; i < len; i++) {
      if (typeof files[i] !== 'undefined') {
        const file = files[i]
        const pathString = `${dir}/${file}`
        if (isDir(pathString)) {
          reName(pathString)
        } else if (file[0].toLowerCase() !== file[0]) {
          const extname = path.extname(file)
          let name = file.substring(0, file.length - extname.length)
          name = name.replace(/ccb/g,'')
          fs.renameSync(pathString, `${dir}/${name[0].toLowerCase()}${name.substr(1)}${extname}`)
        }

        console.log(`${file} >> ${file.toLowerCase()}`)
      }
    }
  })
}

//判断文件路径是否存在
function exists(path) {
  return fs.existsSync(path)
}

//判断是否文件
function isFile(path) {
  return exists(path) && fs.statSync(path).isFile()
}

//判断是否是文件夹
function isDir(path) {
  return exists(path) && fs.statSync(path).isDirectory()
}

reName(pathName)
