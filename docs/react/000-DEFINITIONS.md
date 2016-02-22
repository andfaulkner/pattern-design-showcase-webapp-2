## Action (redux)
*   plain object that represents an intention to change the (redux) state tree.
*   only way to get data into the store
*   must have a type field that indicates the type of action being performed
*   use strings for type
*   see https://github.com/acdlite/flux-standard-action for best practices for action creation.
*   Example:
				{ type: 'ADD_TODO', payload: new Error(), error: true }


## Action Creator (redux)
*   type ActionCreator = (...args: any) => Action | AsyncAction
*   a function that creates an action.
*   Action: data payload. Action Creator: factory to create action
*   Calling an action creator only produces an action, but does not dispatch it. To dispatch it,
    store's dispatch function must be called.


## Attack surface
*   number of ways "into" an object. Almost synonymous with "encapsulation".


## connect (react-redux)

    connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [opts])

*   Connects a React component to a Redux store. Doesn't modify component class
    passed to it; instead returns a new, connected component class for you to use.


## Container
*   (component type): concerned with how things look. Can contain presentational & Container
    components. Allow containment via this.props.children. No dependencies on rest of app.
    Doesn't specify how data loads or mutates. Receives data & callbacks ONLY via props.
    Has little state (always UI state if there's state at all, rather than data). 


## Data propagation
*   


## Dispatching Function
*   function that accepts an action or async action; it then may or may not dispatch
    one or more actions to the store


## HashHistory (react-router)
*   manages routing history with hash portion of url. part of react-router.


## Mixins
*   basically just bundles of methods that can be inserted into React components.
  			*   included in a component via the 'mixin' property (in array). e.g.
		        		mixins: [MyFirstMixin],
		    *   PURPOSE: only for cross-cutting concerns


## Props (react)
*   static characteristics of a component - they don't change


## Pure functions
*   functions that return the exact same output for given inputs.


## Reducer / Reducing function (redux)
*   functions to calculate a new state given the previous state and an action
*   type Reducer<S, A> = (state: S, action: A) => S
*   must be pure functions, & should be free of side-effects.

*   function that accepts an accumulation and a value and returns a new accumulation
*   accumulated value is the state object, and the values being accumulated are actions
*   Note: Do not put API calls into reducers


## State / state tree (redux)
*   dynamic aspects of a component. E.g. is the item starred?
*   refers to single state value that is managed by the store & returned by getState()
*   represents the entire state of a Redux app - often a deeply nested object
    *   no-nos for state: don't include:
        *   other react components
        *   computed data - do computation inside render!
        *   duplications of data from props (srsly, props should be a SSOT)


## Store (redux)
*   holds the whole state tree of your application
*   only way to change the state inside a store is to dispatch an action on it

		createStore()				<<< creates a Redux store. (loose - not a method on store)
    getState()   				<<< returns current state tree of app
    dispatch(action)		<<< dispatch an action, to trigger a state change
    subscribe(listener)	<<< add change listener, called any time action is dispatched.