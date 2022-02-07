import { NextPage } from "next"
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"


const AllPostsPage: NextPage = (props) => {
	return <AllPosts posts={props.posts} />
}

export const getStaticProps = async () => {
	const allPosts = getAllPosts()

	return {
		props: {
			posts: allPosts
		}
	}
}

export default AllPostsPage
