//* Require module and use it 
const { Router } = require('express');
const router = Router();

const team_router = require('../services/team/team.routes.js');
const standings_router = require('../services/standing/standing.routes.js');
const match_router = require('../services/match/match.routes.js');

//* Default route handler
router.get('/', (req, res) => {
	//* Need to redirect to frontend main page
	res.send('Load main view...');
});

router.use('/team', team_router);
router.use('/standings', standings_router);
router.use('/match', match_router);

module.exports = { router };
