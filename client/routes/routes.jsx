/**************************************************************************************************
*
*			Associates root notes with paths, and text on topbar
*
*/

import Home from '../components/nav/navbar-test/NavbarTest.jsx';
import CommentBox from '../components/forms/comment-box/CommentBox.jsx';
import { LikeButton } from '../components/forms/like-button/LikeButton.jsx';
import { AffinityButton } from '../components/forms/like-button/AffinityButton.jsx';
import { FormBox } from '../components/sample-class-components/TestClassBasedComponent.jsx';
import LoginBox from '../components/forms/login-box/LoginBoxVanilla.jsx';

const routes = [
	{ topbarText: 'Home', route: '/', component: Home },
	{ topbarText: 'Comments', route: '/comment', component: CommentBox },
	{ topbarText: 'Like', route: '/like', component: LikeButton },
	{ topbarText: 'Affinity', route: '/affinity', component: AffinityButton },
	{ topbarText: 'Login', route: '/login', component: LoginBox }
];

export default routes;