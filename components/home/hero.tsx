import Image from "next/image"

import classes from "./hero.module.css"

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/juan.jpg'
					alt='Image of Juan'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I&apos;m Juan</h1>
			<p>
				I blog about web development - especially frontend tools like Redux, NextJS,
				React, Tailwindcss, etc.
			</p>
		</section>
	)
}

export default Hero
