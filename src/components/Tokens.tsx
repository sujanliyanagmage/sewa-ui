import React, {FC} from 'react';
import { FormControl } from '@mui/base/FormControl';


const Login:FC = () =>{

	return <>
		<div className="">

			<div className="border rounded-md p-5">
				<h2 className="text-xl font-semibold">Available Tokens</h2>
				<FormControl className="mt-3" defaultValue="" required>
					<label>Category</label>
					<select className="block w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0" defaultValue={10} id="named-select" name="demo-select">
						<option value={10}>Ten</option>
						<option value={20}>Twenty</option>
						<option value={30}>Thirty</option>
					</select>
				</FormControl>

				<div className="mt-5">

					{
						[1,2,3,4,5,6].map(i=>(<div key={i} className="shadow border p-2 cursor-pointer mb-2">
							item	{i}
						</div>))
					}
				</div>

			</div>
		</div>
	</>;
};
export default Login;
