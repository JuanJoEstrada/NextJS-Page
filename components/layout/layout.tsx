import { ReactChild, ReactFragment, ReactPortal } from "react"
import MainNavigation from "./main-navigation"

interface Props {
	children: ReactChild | ReactFragment | ReactPortal
}

const Layout = (props: Props) => {
	return (
		<>
			<MainNavigation />
			<main>{props.children}</main>
		</>
	)
}

export default Layout
