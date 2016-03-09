
var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

export const styles = {
	navBarContainerOuter: {
		'display': 'block'
	},
	navBarContainer: {
		listStyleType: 'none',
		marginTop: '0px',
		paddingTop: '0px',
		overflow: 'hidden',
		backgroundColor: '#333',
	  display: 'block',
		cursor: 'auto'
	},
	topLevelMenuItem: {
		float: 'left',
		boxSizing: 'border-box',
		display: 'list-item',
		listStyleType: 'none',
		backgroundColor: 'black',
    // ':hover': {
    // 	borderBottomStyle: 'solid',
    // 	color: 'black'
    // 	// border-bottom: border-width border-style border-color
    //  //  // backgroundColor: 'red'
    // }
	},
	navbarLinkStyles: {
		display: 'inline-block',
		color: 'white',
		textAlign: 'center',
		padding: '10px 10px',
		textDecoration: 'none',
		fontSize: '11px'
	}
}


// <div class="dropdown dropdown2">
//   <button class="dropbtn">Dropdown Menu</button>
//   <div class="dropdown-content">
//     <a href="javascript:void(0)">Link 1</a>
//     <a href="javascript:void(0)">Link 2</a>
//     <a href="javascript:void(0)">Link 3</a>
//   </div>
// </div>

// <div class="container">
//   <ul>
//     <li class="one"><a href="#">Uno</a></li><!--
//  --><li class="two"><a href="#">Dos</a></li><!--
//  --><li class="three"><a href="#">Tres</a></li><!--
//  --><li class="four"><a href="#">Quatro</a></li>
//     <hr />
//   </ul>
// </div>


// * {
//   box-sizing: border-box;
// }

// body {
//   font: 300 100% 'Helvetica Neue', Helvetica, Arial;
// }

// .container {
//   width: 50%;
//   margin: 0 auto;
// }

// ul li {
//   display: inline;
//   text-align: center;
// }

// a {
//   display: inline-block;
//   width: 25%;
//   padding: .75rem 0;
//   margin: 0;
//   text-decoration: none;
//   color: #333;
// }

// .two:hover ~ hr {
//   margin-left: 25%;
// }

// .three:hover ~ hr {
//   margin-left: 50%;
// }

// .four:hover ~ hr {
//   margin-left: 75%;
// }

// hr {
//   height: .25rem;
//   width: 25%;
//   margin: 0;
//   background: tomato;
//   border: none;
//   transition: .3s ease-in-out;
// }