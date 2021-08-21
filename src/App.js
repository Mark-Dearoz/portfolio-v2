import { useEffect, useState } from 'react'
import Loading from './Sections/Loading'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Introduction from './Sections/Introduction'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
import Alert from './Components/Alert'

const App = () => {
	const [loading, setLoading] = useState(true)
	const [alert, setAlert] = useState(false)

	const showAlert = () => {
		setAlert(true)
		setTimeout(() => setAlert(false), 750)
	}

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000)
	})
	return (
		<>
			<Alert alert={alert}>copied!</Alert>
			{loading ? (
				<Loading />
			) : (
				<>
					<Introduction alert={showAlert} />
					<About />
					<Skills />
					<Projects />
					<Contact alert={showAlert} />
				</>
			)}
		</>
	)
}

export default App
