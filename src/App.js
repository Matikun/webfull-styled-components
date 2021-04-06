import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import './App.css';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Switch location={location} key={location.pathname}>
				<Route exact path="/" component={Home} />
				<Route path="/signin" component={SignInPage} />
			</Switch>
		</AnimatePresence>
	);
}

export default App;
