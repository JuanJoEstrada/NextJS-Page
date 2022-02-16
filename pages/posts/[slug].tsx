import { InferGetStaticPropsType } from "next"
import Head from "next/head"

import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostFiles } from "../../lib/posts-util"

interface Context {
	params: { slug: string }
}

const PostDetailPage = ({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name='description' content={post.excerpt} />
			</Head>
			<PostContent post={post} />
		</>
	)
}

export const getStaticProps = async (context: Context) => {
	const { params } = context
	const { slug } = params
	const postData = getPostData(slug)

	return {
		props: {
			post: postData,
		},
		// Rebuild the page after 10min (600s) if there is a new request
		revalidate: 600, // In seconds
	}
}

export const getStaticPaths = async () => {
	const postFileNames = getPostFiles()
	const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""))
	const paths = slugs.map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}

export default PostDetailPage
