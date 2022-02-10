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

export const getPostFiles = () => fs.readdirSync(postsDirectory)

export const getPostData = (postIdentifier: string) => {
	// Remove the file extansion
	const postSlug = postIdentifier.replace(/\.md$/, "")
	const filePath = path.join(postsDirectory, `${postSlug}.md`)
	const fileContent = fs.readFileSync(filePath, "utf-8")
	const { data, content } = matter(fileContent)

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
	const postFiles = getPostFiles()

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
