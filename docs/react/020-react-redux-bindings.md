See https://github.com/reactjs/react-redux/blob/master/docs/api.md

<Provider store>
================
*   Makes Redux store available to connect() calls in components within

Props
-----
*   store: The single Redux store in your app				{ReduxStore}
*   children: The root of your component hierarchy	{ReactElement}

Examples
--------

### Basic example

		ReactDOM.render(
			<Provider store={store}>
				<MyRootComponent />
			</Provider>,
			rootEl
		)

### Example with React Router

		ReactDOM.render(
			<Provider store={store}>
				<Router history={history}>...</Router>
			</Provider>,
			targetEl
		)

connect
-------

		import {connect} from 'react-redux';

    connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [opts])

*   Connects a React component to a Redux store. Doesn't modify component class
    passed to it; instead returns a new, connected component class for you to use.



needs to be invoked two times