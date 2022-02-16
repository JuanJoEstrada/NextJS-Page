import { NextPage } from "next"
import Head from "next/head"
import ContactForm from "../../components/contact/contactForm"

const ContactPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta name='description' content='Store your message.' />
			</Head>
			<ContactForm />
		</>
	)
}

export default ContactPage
