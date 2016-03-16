

#bindActionCreators
-   Turns object whose vals are action creators into 1 with the same keys, but w/
		every action creator wrapped into a dispatch call so they may be invoked directly


#dispatch
-   should be called directly on an instance of Store
-   also provided by React-Redux

#store.getState()
-   return the current state tree in the store

#Action
-    plain object that represents an intention to change the state
-    e.g. 

		{
			type: 'SET_CURRENT_PAGE',
			page: 'HOME'
		}

-   only way to get data into the Store
-   all data, whether from UI events, callbacks etc must eventually be dispatched as actions
-   must have a type field holding the 'command'

Store
=====
-   get it with:

				import { createStore } from 'redux'

##API
-   dispatch(action): 					 the base dispatch function described above.
																 The only way to trigger a state change
-   getState():									 returns the current state of the store.
-   subscribe(listener):				 registers a function to be called on state changes.
-   replaceReducer(nextReducer): can be used to set up hot reloading, code splitting. Rarely used
