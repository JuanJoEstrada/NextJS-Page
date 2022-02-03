import PropTypes, { InferProps } from "prop-types"

import PostItem from "./post-item"
import classes from "./posts-grid.module.css"

const proptypes = {
	posts: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.shape({
				slug: PropTypes.string,
				title: PropTypes.string,
				image: PropTypes.string,
				excerpt: PropTypes.string,
				date: PropTypes.string,
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
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	)
}

PostsGrid.proptypes = proptypes

export default PostsGrid
