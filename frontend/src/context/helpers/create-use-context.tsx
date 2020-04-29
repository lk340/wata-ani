import * as React from "react";

// 1. Initializes our context with {}.
// 2. Updates the initial value ({}) with our argument's return value (which should be an object)
// 3. Optionally sets React component built-in `displayName` property for debugging purposes.
// 4. Returns our consumer, with the Context itself and the Provider added to its proto.

function warnNoProvider() {
	console.warn("[constate] Missing Provider");
}

const canUseProxy =
	process.env.NODE_ENV === "development" && typeof Proxy !== "undefined";

// When in development, adds convenient debugging message.
// When in production, shouldn't have debugging message.
const defaultValue = canUseProxy
	? new Proxy({}, { get: warnNoProvider, apply: warnNoProvider })
	: {};

export function createUseContext<Props, Data = any>(useValue: (props: Props) => Data) {
	const Context = React.createContext(defaultValue as Data);

	const Provider: React.FC<Props> = (props) => {
		const value = useValue(props); // object of type `Data`
		return <Context.Provider value={value}>{props.children}</Context.Provider>;
	};

	if (useValue.name) {
		Context.displayName = `${useValue.name}.Context`;
		Provider.displayName = `${useValue.name}.Provider`;
	}

	const useContext = () => React.useContext(Context);
	useContext.Context = Context;
	useContext.Provider = Provider;
	return useContext;
}
