import { useState } from "react"
import classes from "./contact-form.module.css"

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState("")
	const [enteredName, setEnteredName] = useState("")
	const [enteredMessage, setEnteredMessage] = useState("")

	console.log("enteredEmail:", enteredEmail)
	console.log("enteredName:", enteredName)
	console.log("enteredMessage:", enteredMessage)

	const sendMessageHandler = (e: { preventDefault: () => void }) => {
		e.preventDefault()

		fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Your Email</label>
						<input
							id='email'
							type='email'
							value={enteredEmail}
							onChange={({ target }) => setEnteredEmail(target.value)}
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							id='name'
							type='text'
							value={enteredName}
							onChange={({ target }) => setEnteredName(target.value)}
							required
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						id='message'
						rows={5}
						value={enteredMessage}
						onChange={({ target }) => setEnteredMessage(target.value)}
						required
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	)
}

export default ContactForm
