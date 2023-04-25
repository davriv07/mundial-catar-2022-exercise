const { Router } = require('express');
const match_router = Router();

const api = require('../axios.config');

//* Get matches
match_router.get('/', async (req, res) => {

	api.get('/match').then((result) => {
		res.status(200);
		res.send(result.data);
	}).catch((err) => {
		res.status(400);
		res.send(err);
	});

});

//* Get match by team id
match_router.get('/:teamId', async (req, res) => {

	api.get('/match/:teamId').then((result) => {
		res.status(200);
		res.send(result.data);
	}).catch((err) => {
		res.status(400);
		res.send(err);
	});

});

//* (post) Get matches by date 
match_router.post('/bydate', async (req, res) => {

	let { date } = req.query;
	if(!date){
		res.status(400);
		res.send(false);
	}
	api.get('/match/bydate', { date: date }).then((result) => {
		res.status(200);
		res.send(result.data);
	}).catch((err) => {
		res.status(400);
		res.send(err);
	});

});

module.exports = match_router;
