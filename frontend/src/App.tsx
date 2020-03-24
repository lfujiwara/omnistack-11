import React from 'react'
import './App.css'

const rockeseatLogo = 'https://rocketseat.com.br/static/images/logo-rocketseat.svg'

function App(): React.ReactElement {
  const today = new Date()
  const omnistackWeekEnding = new Date('2020-03-30T00:00:00-03:00')
  console.log(today, omnistackWeekEnding)

  return (
    <div className="App">
      <header className="App-header">
        <img src={rockeseatLogo} width="300" className="App-logo" alt="logo" />
        <p>Hello, Omnistack 11.0</p>
        {(today < omnistackWeekEnding && (
          <a
            className="App-link"
            href="https://rocketseat.com.br/week/aulas/11.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aulas
          </a>
        )) || (
          <a className="App-link" href="https://rocketseat.com.br" target="_blank" rel="noopener noreferrer">
            Aguarde a próxima semana
          </a>
        )}
      </header>
    </div>
  )
}

export default App
