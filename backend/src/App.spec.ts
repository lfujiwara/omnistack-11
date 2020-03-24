import App from './App'
import * as request from 'supertest'

const application = new App().getExpressApp()
const agent = request.agent(application)

describe('App startup', () => {
  it('Respond to health check', () => agent.get('/health').then((res) => expect(res.status).toBe(200)))
})
