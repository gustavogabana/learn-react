import './App.css'

function Header() {
  return (
    <header>
      <img src="./assets/reac-logo.png" alt="React logo" width="40px" />
    </header>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Reasons why I'm excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there!</li>
        <li>I am more likely to get a job as a front end developer if I know React.</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2025 Maximize development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
    return (
      <>
        <Header />
        <MainContent />
        <Footer />
      </>
    )
}

function App() {
  return (
    <Page />
  )
}

export default App
