WTF is it?
==========

*   a component

				render(<Router/>, document.getElementById('app'))

*   example:

				render(
					<Router history={hashHistory}>
						<Route path="/" component={App}/>
					</Router>,
					document.getElementById('app')
				);

		*   will render crap into url: http://localhost:8080/#/?_k=k587go - due to hashHistory

hashHistory
-----------

*   manages routing history with hash portion of url
*   crap to shim some behavior the browser has natively when using real urls


Adding routes
-------------

	render(
		<Router history={hashHistory}>
			<Route path="/" component={App} />
			<Route path="/repos" component={Repos} />
			<Route path="/about" component={About} />
		</Router>,
		document.getElementById('app')
	);

*   ...where Repos and About are components
*   Repos and About will now be visitable at '/#/repos' and '/#/about', respectively

Links
-----

		import { Link } from 'react-router';
		export default React.createClass({
		  render() {
				return (
					<div><ul role="nav">
						<li><Link to="/about">About</Link></li>
						<li><Link to="/repos">Repos</Link></li>
					</ul></div>
				);
			}
		})

*   Link alters the route the app is pointing to when clicked