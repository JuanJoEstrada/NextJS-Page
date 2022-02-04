import { proptypesPosts, Posts } from "./home-resources"
import PostsGrid from "../posts/posts-grid"
import classes from "./featured-posts.module.css"

const FeaturedPosts = (props: Posts) => {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={props.posts} />
		</section>
	)
}

FeaturedPosts.propTypes = proptypesPosts

export default FeaturedPosts
