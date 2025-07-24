import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

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
