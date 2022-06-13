import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Typography
} from '@mui/material';

export const EntryCard = () => {
	return (
		<Card
			sx={{ marginBottom: 1 }}
			// Eventos de drag
		>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>
						Esto es la descripción
					</Typography>
				</CardContent>
				<CardActions
					sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
				>
					<Typography variant="body2">hace 30 minutos</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
