import { propTypes, Props } from "../home/home-resources"
import PostItem from "./post-item"
import classes from "./posts-grid.module.css"

const PostsGrid = (props: Props) => {
	const { posts } = props

	return (
		<ul className={classes.grid}>
			{posts.map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	)
}

PostsGrid.propTypes = propTypes

export default PostsGrid
