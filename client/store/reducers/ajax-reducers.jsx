var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { 
	ReactRouter, Link, Router,
	hashHistory, Route
} from 'react-router';
import { combineReducers } from 'redux';

import Radium from 'radium';

import { 
	SELECT_CONTENT_TYPE, INVALIDATE_CONTENT,
	REQUEST_CONTENT,		 RECEIVE_CONTENT
} from '../actions/actions';

function selectContentType(state = 'reactjs', action) {
	switch (action.type) {
		case SELECT_CONTENT_TYPE:
			return action.contentType;
		default:
			return state;
	}
}

/**
 * All content handlers in here: invalidate content,
 * request content, receive content
 */
function content(state = {
	isFetching: false,
	didInvalidate: false,
	items: []
}, action) {
	switch (action.type) {
		case INVALIDATE_CONTENT:
			return Object.assign({}, state, {
				didInvalidate: true
			});
		case REQUEST_CONTENT:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case RECEIVE_CONTENT:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.content,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}

/**
 * Add key to state for the content type fetched. E.g. if designs
 * is fetched, add designs key to the state
 *
 * @param  {Object} state [description]
 * @param  {[type]} action [description]
 * @return {[type]} [description]
 */
function contentByType(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_CONTENT:
    case RECEIVE_CONTENT:
    case REQUEST_CONTENT:
      return Object.assign({}, state, {
        [action.contentType]: content(state[action.contentType], action)
      })
    default:
      return state
  }
}

const ajaxReducers = {
	contentByType,
	selectContentType
};

export default ajaxReducers;