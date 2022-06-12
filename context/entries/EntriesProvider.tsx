import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
	entries: Entry[];
	children?: React.ReactNode;
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: 'Descripción 1',
			status: 'pending',
			createdAt: Date.now()
		},
		{
			_id: uuidv4(),
			description: 'Descripción 2',
			status: 'in-progress',
			createdAt: Date.now() - 1000000
		},
		{
			_id: uuidv4(),
			description: 'Descripción 3',
			status: 'finished',
			createdAt: Date.now() - 100000
		}
	]
};

export const EntriesProvider: FC<EntriesState> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	return (
		<EntriesContext.Provider value={{ ...state }}>
			{children}
		</EntriesContext.Provider>
	);
};
