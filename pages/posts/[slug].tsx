import { InferGetStaticPropsType } from "next"

import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostFiles } from "../../lib/posts-util"

const PostDetailPage = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	return <PostContent post={props.post} />
}

export const getStaticProps = (context: { params: { slug: string } }) => {
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

export const getStaticPaths = () => {
	const postFileNames = getPostFiles()
	const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""))
	const paths = slugs.map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}

export default PostDetailPage
