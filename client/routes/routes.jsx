/**************************************************************************************************
*
*			Associates root notes with paths, and text on topbar
*
*/

import Home from '../components/Content/Home/Home.jsx';

import { LikeButton } from '../components/forms/like-button/LikeButton.jsx';
import { AffinityButton } from '../components/forms/like-button/AffinityButton.jsx';

console.log('routes.jsx:: TOP');

const routes = [
	{ path: '/',
		component: Home,
		title: 'Home', 
	},
	{ path: '/gallery',
		component: LikeButton,
		title: 'Gallery', 
	},
	{ path: '/about',
		component: AffinityButton,
		title: 'About', 
	},
];

export default routes;