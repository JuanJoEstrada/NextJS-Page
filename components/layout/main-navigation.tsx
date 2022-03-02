import Link from "next/link"
import { useSession } from "next-auth/client"

import Logo from "./logo"
import classes from "./main-navigation.module.css"

const MainNavigation = () => {
	const [session, loading] = useSession()

	return (
		<header className={classes.header}>
			<Link href='/'>
				{/* You need to wrap in <a></a> because you are puttin a component inside */}
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href='/posts'>Posts</Link>
					</li>
					{session && (
						<li>
							<Link href='/profile'>Profile</Link>
						</li>
					)}
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
					{!session && !loading && (
						<li>
							<Link href='/auth'>Log In</Link>
						</li>
					)}
					{session && (
						<li>
							<Link href='/'>Log out</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
