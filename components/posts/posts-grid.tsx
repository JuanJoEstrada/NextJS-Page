import PropTypes, { InferProps } from "prop-types"

import PostItem from "./post-item"
import classes from "./posts-grid.module.css"

const proptypes = {
	posts: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				slug: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				excerpt: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
			}).isRequired
		).isRequired
	).isRequired,
}

type Props = InferProps<typeof proptypes>

const PostsGrid = (props: Props) => {
	const { posts } = props

	return (
		<ul className={classes.grid}>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</ul>
	)
}

PostsGrid.propTypes = proptypes

export default PostsGrid
