import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import Team from '../team/Team';

export default function groupCard(props) {

	const { group, teams } = props;
	console.log(props);

	return (
		<Card sx={{ height: 'auto', display: 'flex', flexDirection: 'column', borderRadius: '12% 24% 12% 24%' }} >
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant="h5" component="h2" textAlign='center' >
					GRUPO {group}
				</Typography>
				<Box>
					{
						teams.map(team =>(
							<Team key={team.team_id} image={team.flag} team={team.name_en} />
						))
          }  
				</Box>
			</CardContent>
		</Card>
	);

}