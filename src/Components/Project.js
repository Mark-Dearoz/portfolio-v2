import Link from './Link'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import Image from '../Components/Image'
import style from '../Styles/Project.module.css'
import { useEffect } from 'react'

const headerVariant = {
	hidden: { opacity: 0 },
	enter: { opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
}
const imgVariant = {
	hidden: { opacity: 0, y: '-20%' },
	enter: {
		opacity: 1,
		y: ['-20%', '2%', '0%'],
		transition: {
			y: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
			opacity: { duration: 0.6, ease: 'easeInOut', delay: 0.3 },
		},
	},
}
const shadowVariant = {
	hidden: { opacity: 0, scale: '50%' },
	enter: {
		opacity: [0, 0.5, 0.4],
		scale: ['50%', '105%', '102%'],
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
	},
}
const textVariant = {
	hidden: { x: -550 },
	enter: ({ i }) => ({
		x: 0,
		transition: { duration: 0.75, ease: 'easeInOut', delay: 0.2 * i },
	}),
}
const Project = (props) => {
	const [containerRef, inView] = useInView({ threshold: 0.65, triggerOnce: true })
	const headerAnimation = useAnimation()
	const imgAnimation = useAnimation()
	const shadowAnimation = useAnimation()
	const textAnimation = useAnimation()

	const enterAnimation = () => {
		headerAnimation.start('enter')
		imgAnimation.start('enter')
		shadowAnimation.start('enter')
		textAnimation.start('enter')
	}
	useEffect(() => {
		if (inView) enterAnimation()
	})
	return (
		<div className={style.background} style={{ backgroundColor: props.backgroundColor }}>
			<div className={style.container} ref={containerRef}>
				<motion.h1
					className={style.number}
					style={{ color: props.color }}
					variants={headerVariant}
					initial="hidden"
					animate={headerAnimation}
				>
					{props.number}
				</motion.h1>
				<div className={style.detailsContainer}>
					<Image
						className={style.img}
						src={props.src}
						imgAnimation={imgAnimation}
						imgVariant={imgVariant}
						shadowAnimation={shadowAnimation}
						shadowVariant={shadowVariant}
					></Image>
					<div className={style.descriptionContainer}>
						<motion.h2
							className={style.title}
							style={{ color: props.color }}
							variants={textVariant}
							initial="hidden"
							custom={{ i: 1 }}
							animate={textAnimation}
						>
							{props.title}
						</motion.h2>
						<motion.p
							className={style.p}
							variants={textVariant}
							initial="hidden"
							custom={{ i: 2 }}
							animate={textAnimation}
						>
							{props.children}
						</motion.p>
						<Link
							className={style.link}
							color="#000000"
							instant={true}
							variants={textVariant}
							custom={{ i: 3 }}
							animation={textAnimation}
						>
							EXPLORE
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
