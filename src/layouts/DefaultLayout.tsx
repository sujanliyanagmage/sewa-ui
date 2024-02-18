import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';

const DefaultLayout:FC = () =>{
	return <>
		<div>
			<Outlet/>
		</div>
	</>;
};
export default DefaultLayout;
