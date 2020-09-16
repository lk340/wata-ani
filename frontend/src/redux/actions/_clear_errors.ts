import * as Types from "@/utils/types";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export function clearErrors(): Types.POJO {
	return {
		type: CLEAR_ERRORS,
	};
}
