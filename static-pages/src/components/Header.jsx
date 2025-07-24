export default function Header() {
  return (
    <header className='header'>
      <img src="./assets/reac-logo.png" alt="React logo" className='nav-logo' />
      <nav>
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}