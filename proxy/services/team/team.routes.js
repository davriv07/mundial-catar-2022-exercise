const { Router } = require('express');
const team_router = Router();

const api = require('../axios.config');

team_router.get('/', async (req, res)=>{
  
	api.get('/team').then((result) => {
		res.status(200);
		res.send(result.data);
	}).catch((err) => {
		res.status(400);
		res.send(err);
	});

});

team_router.get('/:id', async(req, res)=>{

	api.get('/team').then((result) => {
		res.status(200);
		res.send(result.data);
	}).catch((err) => {
		res.status(400);
		res.send(err);
	});

});

module.exports = team_router;
