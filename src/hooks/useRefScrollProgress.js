import { useState, useLayoutEffect, useRef } from 'react'

const useRefScrollProgress = () => {
	const ref = useRef()
	const [start, setStart] = useState(null)
	const [end, setEnd] = useState(null)
	useLayoutEffect(() => {
		if (!ref.current) {
			return
		}
		const rect = ref.current.getBoundingClientRect()
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		const offsetTop = rect.top + scrollTop
		setStart(offsetTop / document.body.clientHeight)
		setEnd((offsetTop + rect.height) / document.body.clientHeight)
	}, [setStart, setEnd, ref])
	return { ref, start, end }
}

export default useRefScrollProgress
