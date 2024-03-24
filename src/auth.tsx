import { auth } from "./firebase"











export function AuthForm() {





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
                <p>Forgot Password</p>
                <button type='submit' id="btnSignIn">Sign In</button>
                <button type='submit' id="btnSignUp">Sign Up</button>
            </form>
        </>

    )
}