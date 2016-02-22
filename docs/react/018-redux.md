store
=====
*   holds the whole state tree of your application
*   only way to change the state inside a store is to dispatch an action on it

API - Global
============

createStore(reducer, [initialState], [enhancer])
------------------------------------------------
*   creates & returns a Redux store.
*   get via:
        import { createStore } from 'redux'

### Arguments:

*   reducer {Function}
    *   reducing function that ret the next state tree, given current state tree + action to handle

API - Store
===========

getState()
----------
*   returns current state tree of app

dispatch(action)
----------------
*   dispatch an action, to trigger a state change

subscribe(listener)
-------------------
*   add change listener, called any time action is dispatched.