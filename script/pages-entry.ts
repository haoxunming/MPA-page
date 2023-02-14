/* eslint-disable */
const glob = require('glob')
const baseChunk = ['chunk-vendors', 'chunk-common']


function getEntry() {
  const pages = {}
  const entries = glob.sync('src/pages/*/index.ts')
  entries.forEach(item => {
    const match = item.match(/src\/pages\/(.*)\/index\.ts/)
      pages[match[1]] = {
        entry: item,
        template: `public/${match[1]}.html`,
        chunks: ['chunk-vendors', 'chunk-common', match[1]],
      }
  })
  return pages
}

function pageAddChunks(baseChunk, chunkConfig, page) {
  const chunks = [...baseChunk]
  // 将分离出来的chunk添加到相应的页面
  Object.keys(chunkConfig).forEach((chunk) => {
    if (chunkConfig[chunk].includes(page)) {
      chunks.push(chunk)
    }
  })

  return chunks
}

module.exports = {
  pages: getEntry(),
}
