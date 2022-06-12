import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
	sidemenuOpen: boolean;
	children?: React.ReactNode;
}

const Name_INITIAL_STATE: UIState = {
	sidemenuOpen: false
};

export const UIProvider: FC<UIState> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, Name_INITIAL_STATE);

	const openSideMenu = () => {
		dispatch({ type: 'UI - Open Sidebar' });
	};

	return (
		<UIContext.Provider
			value={{
				...state,

				// Methods
				openSideMenu
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
