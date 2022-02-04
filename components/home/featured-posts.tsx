import PropTypes, { InferProps } from "prop-types"

import PostsGrid from "../posts/posts-grid"
import classes from "./featured-posts.module.css"

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

const FeaturedPosts = (props: Props) => {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={props.posts} />
		</section>
	)
}

FeaturedPosts.propTypes = proptypes

export default FeaturedPosts
