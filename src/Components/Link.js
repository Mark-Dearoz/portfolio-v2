import style from '../Styles/Link.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const lineVariant = {
	initial: {
		left: '-100%',
		transition: { duration: 0 },
	},
	hover: {
		left: '0%',
		transition: { duration: 0.3, ease: 'easeOut' },
	},
	unhover: {
		left: '100%',
		transition: { duration: 0.3, ease: 'easeIn' },
	},
}
const textVariant = {
	initial: ({ instant }) => ({
		opacity: instant ? '70%' : '0%',
		left: instant ? '0%' : '-100%',
	}),
	enter: ({ index, instant }) => ({
		left: '0%',
		opacity: '70%',
		transition: { duration: instant ? 0 : 0.4, ease: 'easeOut', delay: 0.2 * index },
	}),
	hover: {
		opacity: '100%',
	},
	unhover: {
		opacity: '70%',
	},
}
const Link = (props) => {
	const lineAnimation = useAnimation()
	const textAnimation = useAnimation()

	const hover = () => {
		lineAnimation.start('hover')
		textAnimation.start('hover')
	}
	const unhover = async () => {
		textAnimation.start('unhover')
		await lineAnimation.start('unhover')
		lineAnimation.start('initial')
	}

	useEffect(() => {
		textAnimation.start('enter')
	})

	return (
		<a href={props.href} className={style.anchor} onClick={props.onClick} download={props.download}>
			<motion.div
				className={`${style.container} ${props.className}`}
				onMouseEnter={hover}
				onMouseLeave={unhover}
				variants={props.variants}
				initial="hidden"
				custom={props.custom}
				animate={props.animation}
			>
				<motion.h4
					className={style.text}
					variants={textVariant}
					custom={{ index: props.index, instant: props.instant }}
					initial="initial"
					animate={textAnimation}
				>
					{props.children}
				</motion.h4>
				<motion.div
					className={style.line}
					variants={lineVariant}
					animate={lineAnimation}
					initial="initial"
					style={{ backgroundColor: props.color }}
				></motion.div>
			</motion.div>
		</a>
	)
}

Link.defaultProps = {
	index: 0,
	instant: false,
	download: false,
}

export default Link
