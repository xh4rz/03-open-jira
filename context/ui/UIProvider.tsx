import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
	sidemenuOpen: boolean;
	children?: React.ReactNode;
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false
};

export const UIProvider: FC<UIState> = ({ children }) => {
	const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

	return (
		<UIContext.Provider value={{ sidemenuOpen: false }}>
			{children}
		</UIContext.Provider>
	);
};
