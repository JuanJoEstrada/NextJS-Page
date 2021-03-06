import { useState } from "react"
import { signIn } from "next-auth/client"
import { useRouter } from "next/router"

import classes from "./auth-form.module.css"

const createUser = async (email: string, password: string) => {
	const response = await fetch("/api/auth", {
		method: "POST",
		body: JSON.stringify({ email, password }),
		headers: {
			"Content-Type": "application/json",
		},
	})

	const data = await response.json()
	if (!response.ok) {
		throw new Error(data.message || "Something went wrong!")
	}

	return data
}

const AuthForm = () => {
	const [emailInput, setEmailInput] = useState("")
	const [passwordInput, setPasswordInput] = useState("")
	const [isLogin, setIsLogin] = useState(true)

	const router = useRouter()

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState)
	}

	const submitHandler = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		if (isLogin) {
			const result = await signIn("credentials", {
				redirect: false,
				email: emailInput,
				password: passwordInput,
			})
			if (!result?.error) {
				router.replace("/profile")
			}
		} else {
			try {
				const result = await createUser(emailInput, passwordInput)
			} catch (error) {
				console.log("Error creating user:", error)
			}
		}
	}

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input
						type='email'
						id='email'
						value={emailInput}
						onChange={({ target }) => setEmailInput(target.value)}
						required
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						type='password'
						id='password'
						value={passwordInput}
						onChange={({ target }) => setPasswordInput(target.value)}
						required
					/>
				</div>
				<div className={classes.actions}>
					<button>{isLogin ? "Login" : "Create Account"}</button>
					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? "Create new account" : "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	)
}

export default AuthForm
