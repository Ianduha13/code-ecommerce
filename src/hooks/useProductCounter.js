import { useSelector, useDispatch } from "react-redux"
import {
	addToCart,
	removeFromCart,
	onlineCart,
} from "../features/cart/cartSlice"

const useProductCounter = (product) => {
	const dispatch = useDispatch()
	const storeProduct = useSelector((state) => state.cart.cart[product?.id])
	const quantity = storeProduct?.quantity ?? 0
	const handleAddToCart = () => {
		// dispatch(onlineCart(product, 1, storeProduct))
		dispatch(addToCart(product))
	}
	const handleRemoveFromCart = () => {
		dispatch(removeFromCart(product?.id))
	}

	return { quantity, add: handleAddToCart, remove: handleRemoveFromCart }
}

export default useProductCounter
