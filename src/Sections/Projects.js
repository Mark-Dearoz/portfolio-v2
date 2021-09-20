import { motion } from 'framer-motion'
import Project from '../Components/Project'
import style from '../Styles/Projects.module.css'
import ftracker from '../img/FitnessTracker.png'
import portfolio from '../img/Portfolio.png'
import gallery from '../img/Gallery.png'
import useScrollTransform from '../hooks/useScrollTransform'

const Projects = () => {
	const [headerRef, scale] = useScrollTransform([-1.8, -0.65, -0.3, 1.5, 8], [0, 0.5, 1, 1.02, 1])

	return (
		<div>
			<motion.h1 className={style.header} ref={headerRef} style={{ scale }}>
				Oh Yeah? Prove it.
			</motion.h1>
			<Project
				title="Porfolio"
				number="01"
				src={portfolio}
				color="#000000"
				backgroundColor="#ffffff"
				href="https://www.markdearoz.com"
			>
				This portfolio website is an introduction of my software development background. The
				objective of this project was to create a simple and attractive website to showcase my
				skills and experience. This means using graphic design principles to create striking
				typography and micro animations to enhance user feedback.
			</Project>
			<Project
				title="Gallery"
				number="02"
				src={gallery}
				color="#AF5603"
				backgroundColor="#ffffff"
				href="https://www.gallery.markdearoz.com"
			>
				This gallery website shows a curated pictures that I have taken throughout the years. This
				allows me to show my creativity and share a part of my life through images. The objective of
				this project is to create a website that focuses on the users experience. This includes fast
				loading pages and images, and animations that enhances the users experience.
			</Project>
			<Project
				title="Fitness Tracker"
				number="03"
				src={ftracker}
				color="#C30B0B"
				backgroundColor="#ffffff"
				href="https://everything-fitness-tracker.netlify.app"
			>
				The Fitness Tracker app allows users to track their daily workout, and it is also a social
				media outlet for discovering new workout routine and sharing your personal achievement with
				like minded people. The goal of this website is to build a community that shares their
				knowledge about fitness and encourage people to work harder and smarter to achieve their
				goal.
			</Project>
		</div>
	)
}

export default Projects
