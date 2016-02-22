/**************************************************************************************************
*
*			Filter todo list items based on what filter is selected. 
*			E.g. show all, show active, show completed
*
*/

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
			case 'SET_VISIBILITY_FILTER':
				return action.filter;
				break;
			default:
				return state;
		}	
};

export default visibilityFilter;