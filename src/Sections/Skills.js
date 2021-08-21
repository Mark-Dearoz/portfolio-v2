import useScrollTransform from '../hooks/useScrollTransform'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import style from '../Styles/Skills.module.css'
import { useEffect } from 'react'

const pVariant = {
	initial: {
		opacity: 0,
		y: -5,
	},
	enter: ({ i }) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.15 * i, duration: 0.2, ease: 'easeOut' },
	}),
	exit: ({ i }) => ({
		opacity: 0,
		y: -5,
		transition: { delay: 0.15 * i, duration: 0.2, ease: 'easeIn' },
	}),
}

const subVariant = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
	exit: { opacity: 0 },
}
const Skills = () => {
	const subAnimation = useAnimation()
	const pAnimation = useAnimation()
	const [headerRef, y] = useScrollTransform([-3, -2, 0.2], ['-100%', '-90%', '0%'])

	const [containerRef, inView] = useInView({
		rootMargin: '35% 0% 0% 0%',
		threshold: 0.9,
	})
	const enterAnimation = async () => {
		await subAnimation.start('enter')
		pAnimation.start('enter')
	}
	const exitAnimation = async () => {
		await pAnimation.start('exit')
		subAnimation.start('exit')
	}
	useEffect(() => {
		inView ? enterAnimation() : exitAnimation()
	})
	return (
		<div className={style.background}>
			<div className={style.container} ref={containerRef}>
				<div className={style.header}>
					<motion.h1 className={style.header} ref={headerRef} style={{ y }}>
						Ok. What can he do?
					</motion.h1>
				</div>
				<motion.h2
					className={style.sub}
					variants={subVariant}
					intital="initial"
					animate={subAnimation}
				>
					HE CAN
				</motion.h2>
				<div className={style.pContainer}>
					<motion.span
						className={style.p}
						variants={pVariant}
						custom={{ i: 0 }}
						initial="initial"
						animate={pAnimation}
					>
						<span className={style.word}>speak</span>
						<pre>{' Javascript  |  Typescript  |  Java  |  CSS  |  HTML'}</pre>
					</motion.span>
					<motion.span
						className={style.p}
						variants={pVariant}
						custom={{ i: 1 }}
						initial="initial"
						animate={pAnimation}
					>
						<span className={style.word}>see</span>
						<pre>{' Figma  |  Adobe Suite  |  Affinity Suite'}</pre>
					</motion.span>
					<motion.span
						className={style.p}
						variants={pVariant}
						custom={{ i: 2 }}
						initial="initial"
						animate={pAnimation}
					>
						<span className={style.word}>stand on</span>
						<pre>{' React'}</pre>
					</motion.span>
				</div>
			</div>
		</div>
	)
}

export default Skills
