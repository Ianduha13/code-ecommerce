import { useSelector } from "react-redux"
import { getTotalItems } from "../features/cart/cartSlice"

const BubbleCounter = () => {
	const value = useSelector(getTotalItems)
	const getNumber = (n) => {
		if (!n) {
			return "0"
		} else {
			return n > 9 ? "9+" : n
		}
	}
	return (
		<span className='absolute top-1 right-32 rounded-full bg-orange-500 py-1 px-2 text-center text-xs font-bold text-white'>
			{getNumber(value)}
		</span>
	)
}
export default BubbleCounter
