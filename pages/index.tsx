import type { NextPage, GetStaticProps } from "next"

import FeaturedPosts from "../components/home/featured-posts"
import Hero from "../components/home/hero"
import { getFeaturedPosts } from "../lib/posts-util"
import { Props } from "../components/home/home-resources";

const Home: NextPage = ({posts}) => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const featuredPosts = getFeaturedPosts()

	return {
		props: {
			posts: featuredPosts,
		},
	}
}

export default Home
