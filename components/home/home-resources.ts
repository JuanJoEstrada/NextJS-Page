import PropTypes, { InferProps } from "prop-types"

export const proptypesPosts = {
	posts: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.shape({
				slug: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				excerpt: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
			}).isRequired
		).isRequired
	).isRequired,
}

export interface Posts {
	posts: {
		slug: string
		title: string
		image: string
		excerpt: string
		date: string
	}[]
}