import Link from "next/link"
import Image from "next/image"
import PropTypes, { InferProps } from "prop-types"

import classes from "./post-item.module.css"

const propTypes = {
	post: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		excerpt: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
	}).isRequired,
}

type Props = InferProps<typeof propTypes>

const PostItem = (props: Props) => {
	const { title, image, excerpt, date, slug } = props.post

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})

	const imagePath = `/images/posts/${slug}/${image}`
	const linkPath = `/posts/${slug}`

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

PostItem.propTypes = propTypes

export default PostItem
