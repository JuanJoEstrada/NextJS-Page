import PropTypes, { InferProps } from "prop-types"

import PostsGrid from "../posts/posts-grid"
import classes from "./featured-posts.module.css"

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

const FeaturedPosts = (props: Props) => {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={props.posts} />
		</section>
	)
}

FeaturedPosts.proptypes = proptypes

export default FeaturedPosts
