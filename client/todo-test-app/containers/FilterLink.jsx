import { connect } from 'react-redux';
import { setVisibilityFilter } from '../controllers/actions.jsx';
import Link from '../components/Link.jsx';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	}
};

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);


export default FilterLink;