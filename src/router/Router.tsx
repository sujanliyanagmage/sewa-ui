import React, {lazy} from 'react';
import {useRoutes} from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

const Home = lazy(()=>import('../pages/home/Home'));
const Login = lazy(()=>import('../pages/login/Login'));

function Router(){
	return useRoutes([
		{
			path:'',
			element:<DefaultLayout/>,
			children : [
				{
					path: '/',
					element: <Home/>,
				},
				{
					path: '/login',
					element: <Login/>,
				},
			]
		},
	]);
}export default Router;
