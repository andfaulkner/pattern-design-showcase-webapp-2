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
import TransferringProps from '../components/experiments/TransferringProps.jsx';
import CompositionExample from '../components/experiments/composition/CompositionExample.jsx';
import ChildrenExample from '../components/experiments/composition/ChildrenExample.jsx';

const routes = [
	{ path: '/',							component: Home,								topbarText: 'Home' },
	{ path: '/comment',				component: CommentBox,					topbarText: 'Cmnts',},
	{ path: '/like',					component: LikeButton,					topbarText: 'Like' },
	{ path: '/affinity',			component: AffinityButton,			topbarText: 'Affinity' },
	{ path: '/login',					component: LoginBox,						topbarText: 'Login' },
	{ path: '/transferprops', component: TransferringProps,		topbarText: '*TransfProps'},
	{ path: '/children', 			component: ChildrenExample,			topbarText: '*Kids' },
	{ path: '/composition', 	component: CompositionExample,	topbarText: '*Composition' }
	// { path: '/login', 			component: GPlusLoginBox,		topbarText: 'Login'}
];

export default routes;