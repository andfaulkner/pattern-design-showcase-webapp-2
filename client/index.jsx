/**************************************************************************************************
*
*			Renders root node. All routes rendered in from here. 
*
*/
// REACT
var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');

// HELPER LIBS (ROUTING, STYLING)
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import routes from './routes/routes.jsx';
import Radium from 'radium';

// COMPONENTS
import Common from './components/Common/Common.jsx';

// REDUX
import { Provider } from 'react-redux';
import { store } from './store/configure-store';
import { RootNode } from './components/RootNode';

// Outermost class - wraps UI in redux store
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<RootNode />
			</Provider>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('content'));