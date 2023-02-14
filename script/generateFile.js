
const path = require('path')
const fs = require('fs')
var __dirname = path.resolve()
const child = require('child_process')
const colors = require('colors-console')

const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(colors('cyan', `${message}`))
const successLog = message => console.log(colors('green', `${message}`))
const errorLog = error => console.log(colors('red', `${error}`))

// 导入模板
const {
  vueTemplate,
  entryTemplate,
  htmlTemplate
} = require('./template') 
// 生成文件
const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
// log('请输入要生成的页面组件名称、会生成在 views/目录下')
let componentName = ''
successLog(`请输入文件名和标题 eg: test:page`)
process.stdin.on('data', async chunk => {
  // 组件名称
  const inputName = String(chunk).trim().toString().split(':')[0]
  const TitleName = String(chunk).trim().toString().split(':')[1]
  
  // Vue页面组件路径
  const pagePath = resolve(__dirname + '/src/pages', inputName)
  const htmlPath = resolve(__dirname + '/public')
  // vue文件
  const vueFile = resolve(pagePath, 'index.vue')
  // 入口文件
  const entryFile = resolve(pagePath, 'index.ts')
  // html文件
  const htmlFile = resolve(htmlPath, inputName + '.html')
  // 判断文件夹是否存在
  const hasComponentExists = fs.existsSync(pagePath)
  if (hasComponentExists) {
    errorLog(`${inputName}页面已存在，请重新输入`)
    return
  } else {
    log(`正在生成 pages 目录 ${pagePath}`)
    await dotExistDirectoryCreate(pagePath)
  }
  try {
    // 获取组件名
    if (inputName.includes('/')) {
      const inputArr = inputName.split('/')
      componentName = inputArr[inputArr.length - 1]
    } else {
      componentName = inputName
    }
    log(`正在生成 vue 文件 ${vueFile}`)
    await generateFile(vueFile, vueTemplate(componentName))
    log(`正在生成 index 文件 ${entryFile}`)
    await generateFile(entryFile, entryTemplate(componentName))
    log(`正在生成 html 文件 ${htmlFile}`)
    await generateFile(htmlFile, htmlTemplate(componentName, TitleName))
    successLog('生成成功')
    
  } catch (e) {
    errorLog(e.message)
  }
  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
  // child.exec('node vue-cli-service serve', () => {
  //   process.exit()
  // })
  
})
function dotExistDirectoryCreate(directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function() {
      resolve(true)
    })
  })
}
// 递归创建目录
function mkdirs(directory, callback) {
  const exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function() {
      fs.mkdirSync(directory)
      callback()
    })
  }
}