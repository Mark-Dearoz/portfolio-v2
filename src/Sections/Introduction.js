import Link from '../Components/Link'
import Alert from '../Components/Alert'
import copy from 'copy-to-clipboard'
import { AnimatePresence, motion } from 'framer-motion'
import style from '../Styles/Introduction.module.css'
import resume from '../img/Resume.pdf'
import { useState } from 'react'

const opacityVariant = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: 'easeIn' } },
}

const Introduction = () => {
	const [alert, setAlert] = useState(false)
	const clickHandler = () => {
		copy('mark@markdearoz.com')
		setAlert(true)
		setTimeout(() => setAlert(false), 750)
	}
	return (
		<>
			<AnimatePresence>{alert && <Alert>copied!</Alert>}</AnimatePresence>
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
					Software Developer
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
					<Link className={style.link} color="#000000" index={1} onClick={clickHandler}>
						email
					</Link>
					<Link className={style.link} color="#000000" index={2} href={resume} download={true}>
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
		</>
	)
}

export default Introduction
