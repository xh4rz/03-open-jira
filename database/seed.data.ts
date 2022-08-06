interface SeedData {
	entries: SeedEntry[];
}

interface SeedEntry {
	description: string;
	status: string;
	createdAt: number;
}

export const seedData: SeedData = {
	entries: [
		{
			description: 'Pendiente: Descripción 1',
			status: 'pending',
			createdAt: Date.now()
		},
		{
			description: 'En-progreso: Descripción 2',
			status: 'in-progress',
			createdAt: Date.now() - 1000000
		},
		{
			description: 'Terminadas: Descripción 3',
			status: 'finished',
			createdAt: Date.now() - 100000
		}
	]
};
