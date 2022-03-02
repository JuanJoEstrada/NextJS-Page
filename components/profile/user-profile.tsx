import ProfileForm from "./profile-form"
import classes from "./user-profile.module.css"

function UserProfile() {
	// const [isLoading, setIsLoading] = useState(true)

	// useEffect(() => {
	// 	getSession().then((session) => {
	// 		if (!session) {
	//Reset the entire application
	// 			window.location.href = "/auth"
	// 		} else {
	// 			setIsLoading(false)
	// 		}
	// 	})
	// }, [])

	// if (isLoading) {
	// 	return <p className={classes.profile}>Loading...</p>
	// }

	return (
		<section className={classes.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm />
		</section>
	)
}

export default UserProfile
