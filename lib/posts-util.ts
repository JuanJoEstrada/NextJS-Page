import fs from "fs"
import path from "path"
import matter from "gray-matter"

interface PostData {
	content: string
	slug: string
	title: string
	date: string
	image: string
	excerpt: string
	isFeatured: boolean
}

const postsDirectory = path.join(process.cwd(), "posts")

const getPostData = (fileName: string) => {
	const filePath = path.join(postsDirectory, fileName)
	const fileContent = fs.readFileSync(filePath, "utf-8")
	const { data, content } = matter(fileContent)

	// Remove the file extansion
	const postSlug = fileName.replace(/\.md$/, "")

	const postData: PostData = {
		content,
		slug: postSlug,
		// ...data,
		title: data.title,
		date: data.date,
		image: data.image,
		excerpt: data.excerpt,
		isFeatured: data.isFeatured,
	}

	return postData
}

export const getAllPosts = () => {
	const postFiles = fs.readdirSync(postsDirectory)

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
