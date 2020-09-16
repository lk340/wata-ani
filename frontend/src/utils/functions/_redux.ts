import * as Types from "@/utils/types";
import { clearErrors } from "@/redux/actions/_clear_errors";

export function handleResponse(
	dispatch: Function,
	response: any,
	actionCreator: Function,
	errorActionCreator: Function,
	errors: Types.ActionCreatorErrors,
) {
	// Success
	if (response.status < 400) {
		dispatch(actionCreator(response.data));
		if (errors.length > 0) dispatch(clearErrors());
	}
	// Failure
	else {
		console.log(response);

		dispatch(errorActionCreator(response.data));
	}
}
