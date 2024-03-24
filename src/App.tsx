import './App.css'
import './shopping-list'
import ShoppingList from './shopping-list'

export default function App() {

  return (
    <>
      <NavBar />
      <MainContent />
      <Footer />
    </>
  )
}

// export default App
export function NavBar() {
  return (
    <nav id='navBar'>
      <p>Link 1</p>
      <p>Link 2</p>
      <p>Link 3</p>
      <p>Link 4</p>
      <p>Link 5</p>
    </nav>
  )
}

export function MainContent() {
  return (
    <main>
      <ShoppingList />
    </main>
  )
}

export function Footer() {
  return (
    <>
      <footer>
        <p>FOOTER LINK 1</p>
        <p>FOOTER LINK 2</p>
        <p>FOOTER LINK </p>
      </footer>
    </>
  )
}