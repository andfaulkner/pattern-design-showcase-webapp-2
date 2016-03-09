var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

// components
import AdminHome from './components/admin/AdminHome.jsx';

ReactDOM.render(
	<AdminHome />,
	document.getElementById('content')
);
