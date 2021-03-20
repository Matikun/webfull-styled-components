import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signin" component={SignInPage} />
			</Switch>
		</Router>
	);
}

export default App;
