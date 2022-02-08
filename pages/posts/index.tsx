import type { InferGetStaticPropsType } from "next"
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"

const AllPostsPage = ({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <AllPosts posts={posts} />
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
