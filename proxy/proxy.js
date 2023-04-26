//* Validate if it's int production or local(development)
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3230;

const { router } = require('./routes/routes.js'); 

//* config.application.cors.server 
app.use(cors({
	origin: ['http://localhost:5173'],
	credentials: true
}));

app.use(express.json());

app.get('/', (req, res)=>{
	res.send('Cors are working!');
});

//* Using express router
app.use(router);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});