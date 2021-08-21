import MDSvg from '../Components/MDSvg'
import { motion, AnimatePresence } from 'framer-motion'
import style from '../Styles/Loading.module.css'
import { useEffect, useState } from 'react'

const svgVariant = {
	hidden: { pathLength: 0, strokeWidth: 10, opacity: 0 },
	show: {
		pathLength: 1,
		opacity: 1,
		transition: {
			pathLength: { delay: 0.2, duration: 1, ease: 'linear' },
			opacity: { delay: 0.2, duration: 0 },
		},
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ease: 'easeIn' },
	},
}

const Loading = () => {
	const [loading, setLoading] = useState(true)
	useEffect(() => setTimeout(() => setLoading(false), 1500))
	return (
		<AnimatePresence>
			{loading && (
				<motion.div className={style.container}>
					<MDSvg className={style.svg} variants={svgVariant} />
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Loading
