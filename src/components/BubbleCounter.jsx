const BubbleCounter = ({ value }) => {
	const getNumber = (n) => {
		if (!n) {
			return "0"
		} else {
			return n > 9 ? "9+" : n
		}
	}
	return <span className='nav-basketCount'>{getNumber(value)}</span>
}
export default BubbleCounter
