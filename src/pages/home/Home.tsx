import React, {FC, useState} from 'react';
import GetToken from '../../components/GetToken';
import TokenInformation from '../../components/TokenInformation';
import Tokens from '../../components/Tokens';


const Home:FC = () =>{

	return <>
		<div>
			<div className="container mx-auto grid place-items-center h-screen py-5">
				<GetToken/>
				<TokenInformation/>
				<Tokens/>
			</div>
		</div>
	</>;
};
export default Home;
