import type { InferGetStaticPropsType } from "next"
import Head from "next/head"

import FeaturedPosts from "../components/home/featured-posts"
import Hero from "../components/home/hero"
import { getFeaturedPosts } from "../lib/posts-util"

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>Juan' Blog</title>
				<meta
					name='description'
					content='I post about programming and web development.'
				/>
			</Head>
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
