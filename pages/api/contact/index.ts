import type { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

interface NewMessage {
	email: string
	name: string
	message: string
	id: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const { email, name, message } = req.body

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() == ""
		) {
			res.status(422).json({ message: "Inavalid input" })
			return
		}

		// Store in DB
		const newMessage: NewMessage = {
			email,
			name,
			message,
			id: 0,
		}

		let client
		try {
			client = await MongoClient.connect(
				`${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mhulh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
			)
		} catch (e) {
			res.status(500).json({ message: "Could not connect to database." })
			return
		}

		const db = client.db()

		try {
			const result = await db.collection("messages").insertOne(newMessage)
			newMessage.id = result.insertedId
		} catch (e) {
			client.close()
			res.status(500).json({ message: "Storing message failed!" })
			return
		}

		client.close()

		res
			.status(201)
			.json({ message: "Successfully stored message.", content: newMessage })
	}
}

export default handler
