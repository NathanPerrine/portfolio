* [x] steps - component, doesn't seem complete
* [x] update about me
* [x] remove watch video button
* [x] contact button in header
* to top button
  * [x] can't be clicked on after about section starts
  * [x] z-index doesn't show over all other buttons
    * after setting z-index of parent div, button shows over all other items now
    * [x] go to -> button under projects
      * remvoing with the 'position: relative' on the go to buttons let them fall down the z-index again
        * can't remove relative or div doesn't work as expected
    * [x] about me entire section
    * [x] want to know more section
  * [x] disappears on wider resolutions
    * had to set max-w same as rest of layout.svelte, expanding the width of the window expanded up to 1400px, but the full width div kept increasing in size and moving out of view

## Project section
* add buttons to sort projects based on category
  * [x] add buttons
  * [x] buttons filter projects
* transitions
  * [x] in/out transitions
* layout
  * had to add a container div, layout isn't as even
    * [x] make divs same size
  * [x] set fixed height for section
  * [x] description overflow
    * new div on <p> tag for description, set overflow
    * large screens: line clamp default to 11 lines, hover removed line clamping