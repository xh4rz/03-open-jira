import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
	sidemenuOpen: boolean;
	isAddingEntry: boolean;
}

const Name_INITIAL_STATE: UIState = {
	sidemenuOpen: false,
	isAddingEntry: false
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, Name_INITIAL_STATE);

	const openSideMenu = () => {
		dispatch({ type: 'UI - Open Sidebar' });
	};

	const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

	const setIsAddingEntry = (isAdding: boolean) => {
		dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });
	};

	return (
		<UIContext.Provider
			value={{
				...state,

				// Methods
				openSideMenu,
				closeSideMenu,
				setIsAddingEntry
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
