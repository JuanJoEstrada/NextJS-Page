import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { veryfyPasword } from "../../../lib/auth-util"
import { connectToDatabase } from "../../../lib/db"

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		Providers.Credentials({
			async authorize(credentials: { email: string; password: string }) {
				const client = await connectToDatabase()

				const usersCollection = client.db().collection("users")

				const user = await usersCollection.findOne({ email: credentials.email })

				if (!user) {
					client.close()
					throw new Error("No user found!")
				}

				const isValid = await veryfyPasword(credentials.password, user.password)

				if (!isValid) {
					client.close()
					throw new Error("Wrong credentials!")
				}

				client.close()

				return { email: user.email }
			},
		}),
	],
})
