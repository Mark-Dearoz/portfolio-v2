import { useViewportScroll, useTransform } from 'framer-motion'
import useRefScrollProgress from './useRefScrollProgress'

const useScrollTransform = (keyframesInput, keyframesOutput) => {
	const { scrollYProgress } = useViewportScroll()
	const { ref, start, end } = useRefScrollProgress()

	const keyframesTrigger = keyframesInput.map((percentage) => start + (end - start) * percentage)

	const motionValue = useTransform(scrollYProgress, keyframesTrigger, keyframesOutput)

	return [ref, motionValue]
}

export default useScrollTransform
