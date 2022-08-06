import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: []
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	const addNewEntry = async (description: string) => {
		const { data } = await entriesApi.post<Entry>('/entries', {
			description
		});
		dispatch({ type: '[Entry] Add-Entry', payload: data });
	};

	const updateEntry = (entry: Entry) => {
		dispatch({ type: '[Entry] Entry-Updated', payload: entry });
	};

	const refreshEntries = async () => {
		const { data } = await entriesApi.get<Entry[]>('/entries');
		dispatch({ type: '[Entry] REFRESH-Data', payload: data });
	};

	useEffect(() => {
		refreshEntries();
	}, []);

	return (
		<EntriesContext.Provider
			value={{
				...state,

				// Methods
				addNewEntry,
				updateEntry
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
