// components
import CommentBox from './components/forms/comment-box/CommentBox.jsx';
import { LikeButton } from './components/forms/like-button/LikeButton.jsx';
import { AffinityButton } from './components/forms/like-button/AffinityButton.jsx';
import NavbarTest from './components/nav/navbar-test/NavbarTest.jsx';
import { Router, Route, hashHistory, Link } from 'react-router';
import { FormBox } from './components/sample-class-components/TestClassBasedComponent.jsx';
import LoginBox from './components/forms/login-box/LoginBoxVanilla.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={NavbarTest} />
		<Route path="/comment" component={CommentBox} />
		<Route path="/like" component={LikeButton} />
		<Route path="/affinity" component={AffinityButton} />
		<Route path="/login" component={LoginBox} />
	</Router>,
	document.getElementById('content')
);