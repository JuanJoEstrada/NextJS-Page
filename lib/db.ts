import { MongoClient } from "mongodb"

export const connectToDatabase = async () => {
	const client = await MongoClient.connect(
		`${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mhulh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
	)
	return client
}
