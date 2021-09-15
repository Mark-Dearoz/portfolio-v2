import Link from '../Components/Link'
import copy from 'copy-to-clipboard'
import style from '../Styles/Contact.module.css'
import resume from '../img/Mark_Dearoz_Resume.pdf'

const Contact = (props) => {
	const copyText = () => {
		copy('mark@markdearoz.com')
		props.alert()
	}
	return (
		<div className={style.background}>
			<div className={style.container}>
				<div className={style.headerContainer}>
					<h1 className={style.header}>Wow!</h1>
					<h1 className={style.header}>Let's work together!</h1>
				</div>
				<div className={style.contactsContainer}>
					<h2 className={style.email} onClick={copyText}>
						mark@markdearoz.com
					</h2>
					<div className={style.linksContainer}>
						<Link className={style.link} color="#ffffff" href={resume} download={true}>
							resume
						</Link>
						<Link
							className={style.link}
							color="#ffffff"
							href={'https://www.linkedin.com/in/mark-joseph-dearoz'}
						>
							linkedin
						</Link>
						<Link
							className={style.link}
							color="#ffffff"
							href={'https://www.github.com/Mark-Dearoz'}
						>
							github
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
