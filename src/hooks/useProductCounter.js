import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../features/cartSlice"

const useProductCounter = (product) => {
	const dispatch = useDispatch()
	const storeProduct = useSelector((state) => state.cart.cart[product?.id])
	const quantity = storeProduct?.quantity ?? 0
	const handleAddToCart = () => {
		dispatch(addToCart(product))
	}
	const handleRemoveFromCart = () => {
		dispatch(removeFromCart(product?.id))
	}

	return { quantity, add: handleAddToCart, remove: handleRemoveFromCart }
}

export default useProductCounter
