import Link from "next/link"
import Image from "next/image"

import { postItem_propTypes, PostItem_types } from "./posts-resources"
import classes from "./post-item.module.css"

const PostItem = (props: PostItem_types) => {
	const { title, image, excerpt, date, slug } = props.post

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})

	const imagePath = `/images/posts/${slug}/${image}`
	const linkPath = `/posts/${slug}`

	console.log(imagePath)

	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<a>
					<div className={classes.image}>
						<Image
							src={imagePath}
							alt={title}
							width={300}
							height={200}
							layout='fixed'
						/>
					</div>
					<div className={classes.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	)
}

PostItem.propTypes = postItem_propTypes

export default PostItem
