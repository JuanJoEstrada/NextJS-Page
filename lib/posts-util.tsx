import fs from "fs"
import path from "path"
import matter from "gray-matter"

interface Data {
	[key: string]: string
}

interface PostData extends Data {
	slug: string
	content: string
}

const postsDirectory = path.join(process.cwd(), "posts")

const getPostData = (fileName: string) => {
	const filePath = path.join(postsDirectory, fileName)
	const fileContent = fs.readFileSync(filePath, "utf-8")
	const { content } = matter(fileContent)
	const data: Data = matter(fileContent).data

	console.log("data:", data)

	// Remove the file extansion
	const postSlug = fileName.replace(/\.md$/, "")

	const postData: PostData = {
		slug: postSlug,
		...data,
		content,
	}

	return postData
}

export const getAllPosts = () => {
	const postFiles = fs.readdirSync(postsDirectory)

	console.log("postFiles:", postFiles)

	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile)
	})

	const sortedPosts = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	)

	return sortedPosts
}

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts()
	const featuredPosts = allPosts.filter((post) => post.isFeatured)
	return featuredPosts
}
