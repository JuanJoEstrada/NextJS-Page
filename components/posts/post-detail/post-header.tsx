import Image from "next/image"
import PropTypes, { InferProps } from "prop-types"

import classes from "./post-header.module.css"

const propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

type Props = InferProps<typeof propTypes>

const PostHeader = ({ title, image }: Props) => {
	return (
		<header className={classes.header}>
			<h1>{title}</h1>
			<Image src={image} alt={title} width={200} height={150} />
		</header>
	)
}

PostHeader.propTypes = propTypes

export default PostHeader
