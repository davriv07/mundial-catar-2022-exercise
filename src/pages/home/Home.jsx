import React, { useEffect, useState } from 'react';

//* Components
import api from '../../api/axiosConfig';
import { Container, Grid } from '@mui/material';

import DrawerAppBar from '../../components/appbar/Appbar';
import Card from '../../components/cards/Card';

function Home() {

	const [group, setGroup] = useState([]);

	const getGroup = async () => {
		try {
			let response = await api.get('/standings');
			await setGroup(response.data.data);
			console.log(response.data.data);
		}
		catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getGroup();
	}, []);

	return (
		<Container sx={{ width: '100%' }}>
			<DrawerAppBar />
			<Container sx={{ py: 8 }} maxWidth="md">
				{/* End hero unit */}
				<Grid container spacing={4}>
					{group.map((group) => (
						<Grid item key={group._id} xs={12} sm={6} md={4}>
							<Card group={group.group} teams={group.teams}/>
						</Grid>
					))}
				</Grid>
			</Container>
		</Container>
	);
}

export default Home;
