import ChildrenExample from './ChildrenExample.jsx';

export default class CompositionExample extends React.Component {
	render() {
		//	#1	:: prop pagename 1st passed in here
		return (
			<div>
				<Avatar pagename="Engineering" />
				<ChildrenExample />
			</div>
		);
	}
};

class Avatar extends React.Component {
	render() {
		//	#2	:: prop pagename carries down from CompositionExample
		return (
			<div>
				{/* Avatar 'owns' PagePic & PageLink */}
				<PagePic pagename={this.props.pagename} />
				<PageLink pagename={this.props.pagename} />
			</div>
		);
	}
};

class PagePic extends React.Component {
	render() {
		//	#3a	:: 	prop pagename went from CompositionExample-->Avatar-->PagePic by passing
		//					into child DOM node @ an attr at each step
		return (
			<img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
		);
	}
};

class PageLink extends React.Component {
	render() {
		//	#3b	:: 	CompositionExample-->Avatar-->PageLink; same deal as PagePic (3a)
		return (
			<a href={'https://www.facebook.com/' + this.props.pagename}>
				{this.props.pagename}
			</a>
		);
	}
};