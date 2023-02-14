import '@/common/page-setting/rem'
import '@/common/scss/reset.scss'
if (process.env.NODE_ENV === 'development') {
  const vconsole = require('vconsole')
  new vconsole()
}
