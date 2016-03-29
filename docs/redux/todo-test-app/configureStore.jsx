/**************************************************************************************************
*
*			Initial configuration settings for the redux store (state-tree). Includes activation
*			of the app's debugging tools.
*
* 		TODO wire debugging tools to an environment variable
*
*/

import { createStore } from 'redux';
import todoApp from './controllers/reducers/index.jsx';

export default function configureStore(initialState) {
  const store = createStore(todoApp, initialState, 
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
};