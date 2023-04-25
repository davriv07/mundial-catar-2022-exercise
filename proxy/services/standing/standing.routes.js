const { Router } = require('express');
const standings_router = Router();

const api = require('../axios.config');

standings_router.get('/', async (req, res) => {

	api.get('/standings').then((result) => {
		res.status(200);
		res.send(result.data);
	}).catch((err) => {
		res.status(400);
		res.send(err);
	});

});

standings_router.get('/:group', async (req, res) => {

	api.get('/standings/:group').then((result) => {
		res.status(200);
		res.send(result.data);
	}).catch((err) => {
		res.status(400);
		res.send(err);
	});

});

module.exports = standings_router;
