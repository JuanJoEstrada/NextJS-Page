import type { NextPage } from "next"
import FeaturedPosts from "../components/home/featured-posts"
import Hero from "../components/home/hero"

const DUMMY_POSTS = [
	{
		slug: "getting-started-with-nextjs",
		title: "Getting Started with NextJS",
		image: "getting-started-nextjs.png",
		excerpt:
			"NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs2",
		title: "Getting Started with NextJS",
		image: "getting-started-nextjs.png",
		excerpt:
			"NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs3",
		title: "Getting Started with NextJS",
		image: "getting-started-nextjs.png",
		excerpt:
			"NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs4",
		title: "Getting Started with NextJS",
		image: "getting-started-nextjs.png",
		excerpt:
			"NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
		date: "2022-02-10",
	},
]

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	)
}

export default Home
