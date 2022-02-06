import { NextPage } from "next"
import AllPosts from "../../components/posts/all-posts"

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

const AllPostsPage: NextPage = () => {
	return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
