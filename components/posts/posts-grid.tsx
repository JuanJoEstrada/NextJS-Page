import PostItem from "./post-item"
import classes from "./posts-grid.module.css"

const PostsGrid = (props: { posts: any }) => {
	const { posts } = props

	return (
		<ul className={classes.grid}>
			{posts.map((post: { slug: any; title: any; image: any; excerpt: any; date: any }) => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	)
}

export default PostsGrid
