import { useState } from 'react'

import './App.css'
import ShoppingList from './shopping-list'


import { auth } from './firebase'
import { AuthForm } from './auth'

import { onAuthStateChanged } from 'firebase/auth'


export default function App() {
    onAuthStateChanged(auth, (user => {
        if (user) {
            const uid = user.uid;
            console.log('user logged in, triggered from App()');
        } else {
            console.log('user not logged in, triggered from App()');
        }
    }))

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
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const signInStatus = document.getElementById('signInStatus');
            signInStatus.textContent = `Signed In:  ${user.displayName}`;
        } else {
            signInStatus.textContent = `Signed Out`;
        }
    })

    return (
        <nav id='navBar'>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
        <p id='signInStatus'></p>
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