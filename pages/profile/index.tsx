import { getSession } from "next-auth/client"

import UserProfile from "../../components/profile/user-profile"

const ProfilePage = () => {
	return <UserProfile />
}

export const getServerSideProps = async (context: { req: any }) => {
	const session = await getSession({
		req: context.req,
	})

	if (!session) {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		}
	}

	return {
		props: {
			// For _app.tsx
			session,
		},
	}
}

export default ProfilePage
