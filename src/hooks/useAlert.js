import { enqueueSnackbar } from "notistack"
const useAlert = (message, variant) => {
	enqueueSnackbar(`${message}`, {
		variant: `${variant}`,
	})
}
export default useAlert
