import style from '../Styles/Alert.module.css'
import { motion } from 'framer-motion'
const Alert = (props) => {
	return (
		<motion.div
			className={style.container}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
		>
			<h4 className={style.text}>{props.children}</h4>
		</motion.div>
	)
}

export default Alert
