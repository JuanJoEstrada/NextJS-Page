import PropTypes from "prop-types"

export const postItem_propTypes = {
	post: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		excerpt: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
	}).isRequired,
}

export interface PostItem_types {
	post: {
		slug: string
		title: string
		image: string
		excerpt: string
		date: string
	}
}
