import classes from "./all-posts.module.css"
import PostsGrid from "./posts-grid"
import { propTypes, Props } from "../home/home-resources"

const allPosts = (props: Props) => {
	return (
		<section className={classes.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={props.posts} />
		</section>
	)
}

allPosts.propTypes = propTypes

export default allPosts
