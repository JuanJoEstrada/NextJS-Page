import PropTypes, { InferProps } from "prop-types"

export const propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			slug: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			excerpt: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			isFeatured: PropTypes.bool.isRequired,
			content: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
}

export type Props = InferProps<typeof propTypes>
