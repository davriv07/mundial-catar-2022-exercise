const axios = require('axios');

const api = axios.create({
	baseURL: 'http://api.cup2022.ir/api/v1',
	headers: {
		'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2ZmFjYTRkZjc2OTcxNzU4MDBjZWYiLCJpYXQiOjE2ODIzNzM3NTAsImV4cCI6MTY4MjQ2MDE1MH0.fAHXUzqxWYV3BRaAGO4ofD5PqRbM8iD0mANTNeV2NJs',
		'Content-Type': 'application/json'
	}
});

module.exports = api;
