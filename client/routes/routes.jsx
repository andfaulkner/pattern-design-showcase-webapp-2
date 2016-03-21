/**************************************************************************************************
*
*			Associates root notes with paths, and text on topbar
*
*/

import Home from '../components/Content/Home/Home.jsx';

import { LikeButton } from '../components/forms/like-button/LikeButton.jsx';
import { AffinityButton } from '../components/forms/like-button/AffinityButton.jsx';
import { GalleryPage } from '../components/Content/GalleryPage/GalleryPage.jsx';
import { DesignsPage } from '../components/Content/DesignsPage/DesignsPage.jsx';
import { UpdatesPage } from '../components/Content/UpdatesPage/UpdatesPage.jsx';

console.log('routes.jsx:: TOP');

const routes = [
	{ path: '/',
		component: Home,
		title: 'Home', 
	},
	{ path: '/gallery',
		component: GalleryPage,
		title: 'Gallery', 
	},
	{ path: '/designs',
		component: DesignsPage,
		title: 'Designs', 
	},
	{ path: '/updates',
		component: UpdatesPage,
		title: 'Updates',
	},
	{ path: '/about',
		component: AffinityButton,
		title: 'About', 
	},
];

export default routes;