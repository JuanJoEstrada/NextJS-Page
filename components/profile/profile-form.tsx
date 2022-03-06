import { useState } from "react"

import classes from "./profile-form.module.css"

function ProfileForm({ onChangePassword }: { onChangePassword: Function }) {
	const [oldPassword, setOldPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")

	const submitHanlder = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		onChangePassword({
			oldPassword,
			newPassword,
		})
	}

	return (
		<form className={classes.form} onSubmit={submitHanlder}>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input
					type='password'
					id='new-password'
					value={newPassword}
					onChange={({ target }) => setNewPassword(target.value)}
				/>
			</div>
			<div className={classes.control}>
				<label htmlFor='old-password'>Old Password</label>
				<input
					type='password'
					id='old-password'
					value={oldPassword}
					onChange={({ target }) => setOldPassword(target.value)}
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	)
}

export default ProfileForm
