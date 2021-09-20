import { useEffect, useState } from 'react'
import Loading from './Sections/Loading'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Introduction from './Sections/Introduction'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'

const App = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000)
	})
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Introduction />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</>
			)}
		</>
	)
}

export default App
