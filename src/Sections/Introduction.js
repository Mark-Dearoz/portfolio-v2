import Link from '../Components/Link'
import { motion } from 'framer-motion'
import style from '../Styles/Introduction.module.css'

const opacityVariant = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: 'easeIn' } },
}
const Introduction = () => {
	return (
		<div className={style.container}>
			<motion.h1
				className={style.name}
				variants={opacityVariant}
				initial="hidden"
				animate="visible"
			>
				Dearoz
			</motion.h1>
			<motion.h2
				className={style.title}
				variants={opacityVariant}
				initial="hidden"
				animate="visible"
			>
				Software Engineer
			</motion.h2>
			<motion.h3
				className={style.intro}
				variants={opacityVariant}
				initial="hidden"
				animate="visible"
			>
				Building Beautiful, Accessible & Responsive Websites
			</motion.h3>
			<div className={style.links}>
				<Link className={style.link} color="#000000" index={1}>
					email
				</Link>
				<Link className={style.link} color="#000000" index={2}>
					resume
				</Link>
				<Link
					className={style.link}
					color="#000000"
					index={3}
					href={'https://www.linkedin.com/in/mark-joseph-dearoz'}
				>
					linkedin
				</Link>
				<Link
					className={style.link}
					color="#000000"
					index={4}
					href={'https://www.github.com/Mark-Dearoz'}
				>
					github
				</Link>
			</div>
		</div>
	)
}

export default Introduction
