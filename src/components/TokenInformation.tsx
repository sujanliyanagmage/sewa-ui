import React, {FC} from 'react';
import { FormControl } from '@mui/base/FormControl';
import { Input } from '@mui/base/Input';
import { Button } from '@mui/base/Button';

const TokenInformation:FC = () =>{

	return <>
		<div className="">

			<div className="border rounded-md p-5">
				<h2 className="text-xl font-semibold">Ticket Information</h2>
				<FormControl className="mt-3" defaultValue="" required>
					<label>Token No</label>
					<Input  slotProps={{
						input: {
							className:
								'w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0',
						},
					}} />
				</FormControl>
				<FormControl className="mt-3" defaultValue="" required>
					<label>Category</label>
					<select className="block w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0" defaultValue={10} id="named-select" name="demo-select">
						<option value={10}>Ten</option>
						<option value={20}>Twenty</option>
						<option value={30}>Thirty</option>
					</select>
				</FormControl>
				<FormControl className="mt-3" defaultValue="" required>
					<label>Status</label>
					<select className="block w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0" defaultValue={10} id="named-select" name="demo-select">
						<option value={10}>Active</option>
						<option value={20}>Disable</option>
					</select>
				</FormControl>
				<FormControl className="mt-3" defaultValue="" required>
					<label>Description</label>
					<Input  slotProps={{
						input: {
							className:
								'w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0',
						},
					}} />
				</FormControl>
				<Button    className='mt-5 cursor-pointer transition text-sm font-sans font-semibold leading-normal bg-violet-500 text-white rounded-lg px-4 py-2 border border-solid border-violet-500 shadow-[0_2px_1px_rgb(45_45_60_/_0.2),_inset_0_1.5px_1px_#a78bfa,_inset_0_-2px_1px_#7c3aed] dark:shadow-[0_2px_1px_rgb(0_0_0/_0.5),_inset_0_1.5px_1px_#a78bfa,_inset_0_-2px_1px_#7c3aed] hover:bg-violet-600 active:bg-violet-700 active:shadow-none active:scale-[0.99] focus-visible:shadow-[0_0_0_4px_#ddd6fe] dark:focus-visible:shadow-[0_0_0_4px_#a78bfa] focus-visible:outline-none ui-disabled:text-slate-700 ui-disabled:dark:text-slate-200 ui-disabled:bg-slate-200 ui-disabled:dark:bg-slate-700 ui-disabled:cursor-default ui-disabled:shadow-none ui-disabled:dark:shadow-none ui-disabled:hover:bg-slate-200 ui-disabled:hover:dark:bg-slate-700 ui-disabled:border-none'>Submit</Button>

			</div>
		</div>
	</>;
};
export default TokenInformation;
