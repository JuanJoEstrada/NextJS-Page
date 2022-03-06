import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/client"

import { connectToDatabase } from "./../../../lib/db"
import { hashPassword, veryfyPasword } from "./../../../lib/auth-util"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "PATCH") {
		return
	}

	const session = await getSession({
		req: req,
	})

	if (!session) {
		res.status(401).json({ message: "Not authenticated!" })
		return
	}

	const userEmail = session.user?.email
	const oldPassword = req.body.oldPassword
	const newPassword = req.body.newPassword

	const client = await connectToDatabase()

	const usersCollection = client.db().collection("users")

	const user = await usersCollection.findOne({ email: userEmail })

	if (!user) {
		res.status(404).json({ message: "User not found." })
		client.close()
		return
	}

	const currentPassword = user.password
	const validPassword = await veryfyPasword(oldPassword, currentPassword)

	if (!validPassword) {
		res.status(403).json({ message: "Invalid credential." })
		client.close()
		return
	}

	const hashedNewPassword = await hashPassword(newPassword)

	await usersCollection.updateOne(
		{ email: userEmail },
		{ $set: { password: hashedNewPassword } }
	)

	client.close()
	res.status(200).json({ message: "Password updated." })
}

export default handler
