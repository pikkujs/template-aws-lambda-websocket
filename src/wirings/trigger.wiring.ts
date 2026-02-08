import { wireTrigger } from '../../pikku-gen/pikku-types.gen.js'
import { onTestEvent } from '../functions/trigger.functions.js'

wireTrigger({
  name: 'test-event',
  func: onTestEvent,
})
