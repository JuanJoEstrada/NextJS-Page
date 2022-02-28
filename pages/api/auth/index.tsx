import { connectToDatabase } from "../../../lib/db"
import type { NextApiRequest, NextApiResponse } from "next"
import { hashPassword } from "../../../lib/auth-util"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const data = req.body
		const { email, password } = data
		if (
			!email ||
			!email.includes("@") ||
			!password ||
			password.trim().length < 7
		) {
			res.status(422).json({
				message:
					"Invalid input - password should also be at least 7 characters long",
			})
			return
		}

		const client = await connectToDatabase()

		const db = client.db()

		const hashedPassword = hashPassword(password)

		const result = await db.collection("users").insertOne({
			email,
			// Do not store plain passwords in DB
			password: hashedPassword,
		})

		res.status(201).json({ message: "Created User!" })
	}
}

export default handler
