import { Fragment, ReactChild, ReactFragment, ReactPortal } from "react"

import MainNavigation from "./main-navigation"

function Layout(props: {
	children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
}) {
	return (
		<Fragment>
			<MainNavigation />
			<main>{props.children}</main>
		</Fragment>
	)
}

export default Layout
