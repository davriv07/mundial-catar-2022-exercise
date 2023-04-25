import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(()=> import('../pages/home/Home'));
const Results = lazy(()=> import('../pages/results/Results'));

function Router(){
	return(
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/:id' element={<Results />}></Route>
		</Routes>
	);
}

export default Router;