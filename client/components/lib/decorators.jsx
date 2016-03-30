/**************************************************************************************************
*
*			Set of higher-order functions for convenience. Most importantly: getContent binds
*			redux connect functions to a class for you, when wrapped around another class,
*			and provides a convenience function to grab the data required by the function
*
*/

var React = React || require('react');
import { setCurrentPage, selectContentType, fetchContentIfNeeded } from '../../store/actions/actions.jsx';
import { connect } from 'react-redux';

/**
 * Calls connect for you, for the requested REST API route. Binds addtional getContent function
 * to class, which calls Redux for you to get the current app state, & load data at given route
 *
 * @param  {String} route - api route to call to get the data of the desired route
 * @param  {Function} mapStateToPropsInput - function that determines what parts of current state
 *         to return. A sane default is used automatically if none given. It covers most cases. 
 * @return {Class} Decorated class
 */
export const getContent = (mapStateToPropsInput) => (type) => (Target) => {

	const mapStateToProps = (mapStateToPropsInput)
		? mapStateToPropsInput.bind(this)
		: (state => ({
					...state,
					currentPage: state.setCurrentPage.currentPage,
					content: state.content
				}));

	@connect(mapStateToProps)
	class getContentDecorated extends React.Component {

		getContent = (route = type) => {
			this.props.dispatch(selectContentType(route));
			this.props.dispatch(fetchContentIfNeeded(route)).then(() => {
				console.info('decorators.jsx:: getContent for ' + route + ' sucessful!');
			});
		}

		componentWillMount = () => {
			console.log('decorators.jsx:: getContent: componentWillUnmount:: this:', this);
			console.log(type);
			this.props.dispatch(setCurrentPage(type));
		}

		render() {
			return <Target getContent={this.getContent} {...this.props}/>;
		}
	}
	return getContentDecorated;
};
