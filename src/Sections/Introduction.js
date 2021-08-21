import Link from '../Components/Link'
import style from '../Styles/Introduction.module.css'

const Introduction = () => {
	return (
		<div className={style.container}>
			<h1 className={style.name}>Dearoz</h1>
			<h2 className={style.title}>Software Engineer</h2>
			<h3 className={style.intro}>Building Beautiful, Accessible & Responsive Websites</h3>
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
