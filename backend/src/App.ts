import express from 'express'

class App {
  private express: express.Application

  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  public getExpressApp() {
    return this.express
  }

  private middlewares() {
    this.express.use(express.json())
  }

  private routes() {
    this.express.get('/health', (_, res) => res.status(200).json({ message: 'Service is running' }))
  }

  public run(port: number) {
    this.express.listen(port, () => console.log(`Listening on ${port}`))
  }
}

export default App
