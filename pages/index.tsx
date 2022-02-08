import type { InferGetStaticPropsType } from "next"

import FeaturedPosts from "../components/home/featured-posts"
import Hero from "../components/home/hero"
import { getFeaturedPosts } from "../lib/posts-util"

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	)
}

export const getStaticProps = async () => {
	const featuredPosts = getFeaturedPosts()

	return {
		props: {
			posts: featuredPosts,
		},
	}
}

export default Home
