import Head from "next/head"
import { Provider } from "next-auth/client"

import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/layout/layout"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		// To skip one call is already have session
		<Provider session={pageProps.session}>
			<Layout>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp
