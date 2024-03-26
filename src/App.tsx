import { useState } from 'react'

import './App.css'
import ShoppingList from './shopping-list'


import { auth } from './firebase'
import { AuthForm } from './auth'

import { onAuthStateChanged } from 'firebase/auth'


export default function App() {

  return (
    <>
        <UI />
    </>
  )
}

export function UI() {
    return (
        <>
            <NavBar />
            <MainContent />
            <Footer />
        </>

    )
}

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
            <AuthForm />
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