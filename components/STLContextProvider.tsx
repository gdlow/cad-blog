import { createContext, Context, FC, useState } from "react";

const DEFAULT_SELECTION = 0;

interface STLContextValue {
	current: number,
	setCurrent: (_: number) => void;
}

export const stlContext: Context<STLContextValue> = createContext({
	current: DEFAULT_SELECTION,
	setCurrent(_: number) {},
});

const STLContextProvider: FC<{}> = ({ children }) => {
	const [current, setCurrent] = useState(DEFAULT_SELECTION);
	return (
		<stlContext.Provider value={{ current, setCurrent }}>
			{children}
		</stlContext.Provider>
	);
};

export default STLContextProvider;