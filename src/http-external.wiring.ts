import { wireHTTP, external } from '../pikku-gen/pikku-types.gen.js'

wireHTTP({
  auth: false,
  method: 'get',
  route: '/external/hello',
  func: external('ext:hello'),
  tags: ['external'],
})
