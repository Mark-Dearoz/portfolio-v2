import { motion } from 'framer-motion'
import style from '../Styles/About.module.css'
import useScrollTransform from '../hooks/useScrollTransform'
const About = () => {
	const [headerRef, x] = useScrollTransform([-4, -2, 0.2], ['-100%', '-40%', '0%'])
	const [pRef, opacity] = useScrollTransform([-1.8, -1.4, 0.8, 2], [0, 1, 1, 0])
	return (
		<div className={style.container}>
			<motion.h1 className={style.header} ref={headerRef} style={{ x }}>
				Who is this guy?
			</motion.h1>
			<motion.p className={style.p} ref={pRef} style={{ opacity }}>
				<span className={style.name}>MARK DEAROZ</span> is a software engineer based in New York,
				NY. He recieved his bachelors on Electrical and Computer Engineer and persued his masters on
				Computer Science. His passion is to create innovative and functional applications without a
				compromise on design and esthetic. Mark has knowledge on the bleeding edge technologies of
				front-end development. He also loves to learn all about the emerging technolgies in tech,
				and improve his skills as a software engineer.
			</motion.p>
		</div>
	)
}

export default About
