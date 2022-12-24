import { useEffect } from "react"
const usePageScroller = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
	}, [])
}

export default usePageScroller
