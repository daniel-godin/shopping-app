import { auth } from "./firebase"

import {
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';

if (window.location.hostname === '127.0.0.1') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    console.log('connectAuthEmulator triggered'); // Keep this for now.  Good reminder.
}

onAuthStateChanged(auth, function (user) {
    if (user) {
        // User is signed in.
        console.log("User:", user);
        const signInStatus = document.getElementById('signInStatus');
        const signInButton = document.getElementById('btnSignIn');
        const displayName = user.displayName;
        const email = user.email;
        // const emailVerified = user.emailVerified;
        const uid = user.uid;
        // const providerData = user.providerData;
        signInStatus.textContent = 'Signed In:  ' + displayName;
        signInButton.textContent = "Success!  Signed In!"
        signInButton.textContent = 'Sign Out';
    } else {
        signInStatus.textContent = 'Signed Out';
    }
    // signInButton.disabled = false;
})


// const passwordResetButton = document.getElementById('btnPasswordReset');


export function Auth() {


}

export function AuthForm() {

    // Handles the sign in button press.
    function handleSignUp(e) {
        e.preventDefault();
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const signUpButton = document.getElementById('btnSignUp');
        
        const email = emailInput.value;
        const password = passwordInput.value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 6) {
          alert('Please enter a password.');
          return;
        }
        // Create user with email and pass.
        createUserWithEmailAndPassword(auth, email, password).catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }

    // Handles the sign up button press.
    function toggleSignIn(e) {
        e.preventDefault();

        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const signInButton = document.getElementById('btnSignIn');

        if (auth.currentUser) {
        signOut(auth);
        } else {
        const email = emailInput.value;
        const password = passwordInput.value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        signInWithEmailAndPassword(auth, email, password).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
            } else {
            alert(errorMessage);
            }
            console.log(error);
            signInButton.disabled = false;
        });
        }
        signInButton.disabled = true;
    }


    return (
        <>
            <h2>Please Sign In or Sign Up To Use This App:</h2>
            <form id="authForm">
                <label for='email'>Enter Your Email:
                    <input type="email" name="email" id="email"></input>
                </label>
                <label for='password'>Enter Your Password:
                    <input type="password" name="password" id="password"></input>
                </label>
                <button onClick={toggleSignIn}  type='button' id="btnSignIn">Sign In</button>
                <button onClick={handleSignUp} type='button' id="btnSignUp">Sign Up</button>
                <p id='signInStatusForm'></p>
            </form>
        </>

    )
}




// verifyEmailButton.addEventListener('click', sendVerificationEmailToUser, false);
// passwordResetButton.addEventListener('click', sendPasswordReset, false);
