export type State = StateCopy | [];

export type StateCopy = string | Errors;

export type ActionErrors = {
	[key: string]: any;
};

export type Errors = [string, string][];
export type Error = [string, [string]];
