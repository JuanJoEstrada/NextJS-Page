import { useState, useEffect } from "react"
import classes from "./contact-form.module.css"
import Notification from "../ui/notification"

interface ContactDetails {
	email: string
	name: string
	message: string
}

const sendContactData = async (contactDetails: ContactDetails) => {
	const response = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetails),
		headers: {
			"Content-Type": "application/json",
		},
	})
	const data = await response.json()

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong!")
	}
}

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState("")
	const [enteredName, setEnteredName] = useState("")
	const [enteredMessage, setEnteredMessage] = useState("")
	const [requestStatus, setRequestStatus] = useState("") // 'pending', "success", "error"
	const [requestError, setRequestError] = useState("")

	useEffect(() => {
		let timer: NodeJS.Timeout
		if (requestStatus === "success" || requestStatus === "error") {
			timer = setTimeout(() => {
				setRequestStatus("")
				setRequestError("")
			}, 3000)
		}

		return () => {
			clearTimeout(timer)
		}
	}, [requestStatus])

	const sendMessageHandler = async (e: { preventDefault: () => void }) => {
		e.preventDefault()

		setRequestStatus("pending")

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			})
			setRequestStatus("success")
			setEnteredEmail("")
			setEnteredMessage("")
			setEnteredName("")
		} catch (error: any) {
			setRequestError(error.message)
			setRequestStatus("error")
		}
	}

	let notification

	if (requestStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending message...",
			message: "Your message is on its way!",
		}
	}
	if (requestStatus === "success") {
		notification = {
			status: "success",
			title: "Success!",
			message: "Message sent successfully!",
		}
	}
	if (requestStatus === "error") {
		notification = {
			status: "error",
			title: "Error!",
			message: requestError,
		}
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
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	)
}

export default ContactForm
