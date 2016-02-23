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
import { LoginBox } from '../components/forms/login-box/LoginBoxVanillaClass.jsx';
import AdminHome from '../components/admin/AdminHome.jsx';
import { GPlusLoginBox } from '../components/forms/login-box/LoginBoxGooglePlus.jsx';

const routes = [
	{ path: '/',						component: Home,						topbarText: 'Home' },
	{ path: '/comment',			component: CommentBox,			topbarText: 'Comments',},
	{ path: '/like',				component: LikeButton,			topbarText: 'Like' },
	{ path: '/affinity',		component: AffinityButton,	topbarText: 'Affinity' },
	{ path: '/login',				component: LoginBox,				topbarText: 'Login' }
	// { path: '/login', 			component: GPlusLoginBox,		topbarText: 'Login'}
];

export default routes;