const axios = require('axios');

const api = axios.create({
	baseURL: 'http://api.cup2022.ir/api/v1',
	headers: {
		'Authorization': `Bearer ${process.env.TOKEN}`,
		'Content-Type': 'application/json'
	}
});

module.exports = api;
