import React,{Suspense } from 'react';
import {persistor} from './store/store.js';
import {PersistGate} from 'redux-persist/lib/integration/react';
import LoadingPage from './components/LoadingPage.jsx';
import Router from './router/Router';
function App() {


	return (
		<PersistGate loading={<LoadingPage/>} persistor={persistor}>
			<Suspense fallback={<LoadingPage/>}>
				<Router/>
			</Suspense>
		</PersistGate>


	);
}

export default App;
