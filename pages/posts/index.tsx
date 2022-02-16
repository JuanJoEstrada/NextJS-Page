import type { InferGetStaticPropsType } from "next"
import Head from "next/head"
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"

const AllPostsPage = ({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta
					name='description'
					content='A list of all programming-related tutorials and posts.'
				/>
			</Head>
			<AllPosts posts={posts} />
		</>
	)
}

export const getStaticProps = async () => {
	const allPosts = getAllPosts()

	return {
		props: {
			posts: allPosts,
		},
	}
}

export default AllPostsPage
