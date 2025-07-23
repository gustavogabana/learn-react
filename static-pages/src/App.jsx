import './App.css'

function TemporaryName() {
    return (
      <main>
        <header>
          <img src="./assets/reac-logo.png" alt="React logo" width="40px" />
        </header>
        <h1>
          Reasons why I'm excited to learn React
        </h1>
        <ol>
          <li>React is a popular library, so I will be able to fit in with all the coolest devs out there!</li>
          <li>I am more likely to get a job as a front end developer if I know React.</li>
        </ol>
        <footer>
          © 2025 Maximize development. All rights reserved.
        </footer>
      </main>
    )
}

function App() {
  return (
    <TemporaryName/>
  )
}

export default App
