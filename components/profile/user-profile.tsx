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

	const changePasswordHandler = async (passwordData: {
		newPassword: string
		oldPassword: string
	}) => {
		const respnse = await fetch("/api/user/change-password", {
			method: "PATCH",
			body: JSON.stringify(passwordData),
			headers: {
				"Content-Type": "application/json",
			},
		})

		const data = await respnse.json()
		console.log("data:", data)
	}
	return (
		<section className={classes.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm onChangePassword={changePasswordHandler} />
		</section>
	)
}

export default UserProfile
