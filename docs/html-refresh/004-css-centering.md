Centering in css
================


inline or inline-* elements (like text or links)
------------------------------------------------

		.center-children {
		  text-align: center;
		}


block level element
-------------------

		.center-me {
		  margin: 0 auto;
		}


more than one block level element
---------------------------------

### in a row

		<main class="flex-center">
		  <div>siblings & I are block-like elements; we're centered in a row.</div>
		  <div>siblings & I are block-like elements; centered in a row. I have more content in me than my siblings do.</div>
		  <div>siblings & I are block-like elements; we're centered in a row.</div>
		</main>


### stacked on top of each other

main div {
  margin: 5px auto;
}
