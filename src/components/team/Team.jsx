import React, { Suspense, lazy } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const StyledPaper = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	maxWidth: 400,
	color: theme.palette.text.primary,
}));

export default function Team(props) {

	const { img, team } = props;

	const LazyImg = lazy(()=>import('../Image/Image'));

	const Image = () => {
		return(
			<>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyImg src={img} alt={team} style={{ width: '50px', height: '50px' }}/>
				</Suspense>
			</>
		);
	};
	return (
		<Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1 }}>
			<StyledPaper sx={{ my: 1, mx: 'auto', p: 2, }} >
				<Grid container wrap="nowrap" spacing={2}>
					<Grid item>
						<Image />
					</Grid>
					<Grid item xs>
						<Typography>{team}</Typography>
					</Grid>
				</Grid>
			</StyledPaper>
		</Box>
	);
}

Team.propTypes = {
	img: PropTypes.string,
	team: PropTypes.object
};
