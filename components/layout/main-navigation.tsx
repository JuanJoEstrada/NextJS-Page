import Link from "next/link"
import { useSession, signOut } from "next-auth/client"

import Logo from "./logo"
import classes from "./main-navigation.module.css"

const MainNavigation = () => {
	const [session, loading] = useSession()

	const logOutHandler = () => {
		signOut()
	}

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
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
					{session && (
						<li>
							<Link href='/profile'>Profile</Link>
						</li>
					)}
					{!session && !loading && (
						<li>
							<Link href='/auth'>Log In</Link>
						</li>
					)}
					{session && (
						<li>
							<button onClick={logOutHandler}>Log Out</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
