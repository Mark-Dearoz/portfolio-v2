import { motion } from 'framer-motion'

const MDSvg = (props) => {
	return (
		<motion.svg
			width="129"
			height="75"
			viewBox="0 0 129 75"
			className={props.className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.path
				d="M5 69.5V13L31 39L57 13V69.5H71.5V6H84C140.5 6 127.5 69.5 102.5 69.5"
				stroke="black"
				variants={props.variants}
				initial="hidden"
				animate="show"
				exit="exit"
			/>
		</motion.svg>
	)
}

export default MDSvg
