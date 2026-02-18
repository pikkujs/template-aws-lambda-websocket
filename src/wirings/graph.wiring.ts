import { graphStart } from '../../pikku-gen/workflow/pikku-workflow-types.gen.js'
import { wireHTTP } from '../../pikku-gen/pikku-types.gen.js'

wireHTTP({
  auth: false,
  method: 'post',
  route: '/workflow/review',
  func: graphStart('todoReviewWorkflow', 'fetchOverdue'),
})
