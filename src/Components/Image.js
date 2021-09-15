import { motion } from 'framer-motion'
import style from '../Styles/Image.module.css'
const Image = (props) => {
	return (
		<div className={style.container}>
			<motion.img
				className={props.className}
				src={props.src}
				variants={props.imgVariant}
				initial="hidden"
				animate={props.imgAnimation}
			></motion.img>
			<motion.div
				className={style.shadow}
				variants={props.shadowVariant}
				initial="hidden"
				animate={props.shadowAnimation}
			></motion.div>
		</div>
	)
}

export default Image
