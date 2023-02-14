import { App } from 'vue'
import loading from '@/components/Loading/loading'
import tost from '@/components/Tost/tost'

const componentsUse = (app: App):void => {
  app.use(loading)
  app.use(tost)
}
export {
  componentsUse
}