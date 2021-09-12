import { motion } from 'framer-motion'
import Project from '../Components/Project'
import style from '../Styles/Projects.module.css'
import ftracker from '../img/FitnessTracker.png'
import portfolio from '../img/Portfolio.png'
import useScrollTransform from '../hooks/useScrollTransform'

const Projects = () => {
	const [headerRef, scale] = useScrollTransform([-1.8, -0.65, -0.3, 1.5, 8], [0, 0.5, 1, 1.02, 1])

	return (
		<div>
			<motion.h1 className={style.header} ref={headerRef} style={{ scale }}>
				Oh Yeah? Prove it.
			</motion.h1>
			<Project
				title="Fitness Tracker"
				number="01"
				src={ftracker}
				color="#C30B0B"
				backgroundColor="#00000"
				href="https://everything-fitness-tracker.netlify.app"
			>
				This website allows users to track their daily workout, and it is also a social media outlet
				for discovering new workout routine and sharing your personal achievement with like minded
				people. The goal of this website is to build a comminity that shares their knowledge about
				fitness and encourage people to work harder and smarter to achieve their goal.
			</Project>
			<Project
				title="Porfolio"
				number="02"
				src={portfolio}
				color="#000000"
				backgroundColor="#f3eee3"
			>
				This website allows users to track their daily workout, and it is also a social media outlet
				for discovering new workout routine and sharing your personal achievement with like minded
				people. The goal of this website is to build a comminity that shares their knowledge about
				fitness and encourage people to work harder and smarter to achieve their goal.
			</Project>
		</div>
	)
}

export default Projects
