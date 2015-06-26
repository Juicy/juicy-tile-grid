Grid building algorithm
========

Here is how we build CSS grid for given set of (bin-)packed tiles.

We will process below for both axis - horizontal and vertical, according to the given direction.

1. Draw a grid line for each beginning and end of a tile.
2. Iterate over lines (`0-n`):
 1. For the first line (`l=0`) (this set is exactly equal to the third one, separated for readability)
   1. Add all titles that begins at `0` to the **opened tiles** list, set their CSS `grid-row-start/grid-column-start` property to `1`, and set other properties accordingly (`width`, `height`, etc.)
 2. For the second line (`l=1`) at position `` (this set is exactly equal to the third one, separated for readability)
    1. create new track,
    2. set track width
      - if all _opened tiles_ are fixed size, set track width to `x_1 px`,
      - if all _opened tiles_ are flex size, set track width to `minmax(min-content, x_1 fr)`,
      - otherwise, set track width to `minmax(x_1 px, x_1 fr)`, 
        (fixed tiles that interests this track, will not get "squeezed", but may get more space around)
    3. Remove all titles that ends at `x_1` from the **opened tiles** list, set their CSS `grid-row-end/grid-column-end` property to `1`, and set other properties accordingly (`width`, `height`, etc.)
    4. For all tiles that ends at `x_1`, and their parent gutter value into **opened gutters** list,
    5. Add all titles that begins at `x_1` to the **opened tiles** list, and set their CSS `grid-row-start/grid-column-start` property to `2`
 3. For each line `l` at position `x_l`
    1. create new track,
    2. let the `s` denote the distance between this and previous line - `(x_l - x_{l-1})`,
    2. remove all gutters from _opened gutters_ that are strictly lower that `s`,
    3. set track width, 
      - if there is still _opened gutter_, set track width to `s px`,
        (gutter forces fixed size of a column, that may cause loose of proportion of intersecting elements, but would keep the size of the gutter)
      - if all _opened tiles_ are fixed size, set track width to `s px`,
      - if all _opened tiles_ are flex size, set track width to `minmax(min-content, s fr)`,
      - otherwise, set track width to `minmax(s px, s fr)`, 
        (fixed tiles that interests this track, will not get "squeezed", but may get more space around)
    4. Remove all titles that ends at `x_l` from the **opened tiles** list, and set their CSS `grid-row-end/grid-column-end` property to `l`,
    5. For all tiles that ends at `x_l`, and their parent gutter value into **opened gutters** list,
    6. Add all titles that begins at `x_l` to the **opened tiles** list, set their CSS `grid-row-start/grid-column-start` property to `l+1`, and set other properties accordingly (`width`, `height`, etc.)
 4. If the last line does not reach the given end of the container, if `x_n` is less than container width, and container width is less than `Infinity`/`auto`.
    1. create new track,
    2. set track width to `s fr`, where `s` denotes the distance between last line and end of the container.
