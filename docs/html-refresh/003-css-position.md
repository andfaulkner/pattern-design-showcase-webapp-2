position property
=================

static
------

*   default

		.static {
		  position: static;
		}

relative
--------
*   behaves the same as static unless you add extra properties
*   Setting the top, right, bottom, & left properties of a relatively-positioned
    element will cause it to be adjusted away from its normal position
*   Other content will not be adjusted to fit into any gap left by the element

		.relative1 {
		  position: relative;
		}
		.relative2 {
		  position: relative;
		  top: -20px;
		  left: 20px;
		  background-color: white;
		  width: 500px;
		}

fixed
-----

*   positioned relative to viewport: i.e. always stays in same place even if page is scrolled

		.fixed {
		  position: fixed;
		  bottom: 0;
		  right: 0;
		  width: 200px;
		  background-color: white;
		}

absolute
--------

*   behaves like fixed except...
    *   positioned relative to the *nearest __positioned__ ancestor*
        *   instead of relative to the viewport
    *    if an absolutely-positioned element has no positioned ancestors...
        *   it uses the document body, and still moves along with page scrolling
    *   a "positioned" element is one whose position is anything except static

				.relative {
				  position: relative;
				  width: 600px;
				  height: 400px;
				}
				.absolute {
				  position: absolute;
				  top: 120px;
				  right: 0;
				  width: 300px;
				  height: 200px;
				}
