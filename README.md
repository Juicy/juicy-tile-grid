# &lt;juicy-tile-grid&gt;

> Masonry-like Custom Element for sortable tiles that packs efficiently without changing HTML structure (changes CSS only), and adapts it to CSS Grid Layout.
> So you will get (bin-packed) gap-less layout, with responsive, and adaptive features, handled natively by browser.
> Extended renderer for [`juicy-tile-list`](https://github.com/Juicy/juicy-tile-list).

## Features

[`juicy-tile-list` features](https://github.com/Juicy/juicy-tile-list#features), plus
 - CSS Grid Layout,
 - adapting to dynamic changes of the element, parent container, and tile's content, without need to repack.

## Demo

[Check it live!](http://Juicy.github.io/juicy-tile-grid)

### Rationale

`<juicy-tile-grid>` is layer on top of [`<juicy-tile-list>`](https://github.com/Juicy/juicy-tile-list) that renders packed items using [CSS Grid Layout](http://www.w3.org/TR/2014/WD-css-grid-1-20140513/), so it leverages native way to handle tiles' overflow, and gives more structured CSS which can be styled according to design needs.

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install juicy-tile-grid --save
```

Or [download as ZIP](https://github.com/Juicy/juicy-tile-grid/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-tile-grid/juicy-tile-grid.html">
    ```

3. Start using it!

    ```html
    <juicy-tile-grid></juicy-tile-grid>
    ```

## Requirements
This element is using [CSS Grid Layout](http://www.w3.org/TR/2014/WD-css-grid-1-20140513/), so if your environment does not support it, you may need to [enable it](http://igalia.github.io/css-grid-layout/enable.html) or use shim.

## Options

All [`juicy-tile-list` options](https://github.com/Juicy/juicy-tile-list#options), plus

Attribute                       | Options   | Default | Description
---                             | ---       | ---     | ---
`setup.items[.].heightFlexible` | *Boolean* | `false` | Let the tile's row adapt to the element/parent HTML element resize - grow/shrink proportionally, without a need to repack items.
`setup.items[.].widthFlexible`  | *Boolean* | `false` | Let the tile's column adapt to the element/parent HTML element resize - grow/shrink proportionally, without a need to repack items.
`setup.items[.].heightDynamic`  | *Boolean* | `false` | Let the tile's row adapt to the tile HTML element resize - grow/shrink accordingly, without a need to repack items.
`setup.items[.].widthDynamic`   | *Boolean* | `false` | Let the tile's column adapt to the tile HTML element resize - grow/shrink accordingly, without a need to repack items.

## [Properties](https://github.com/Juicy/juicy-tile-list#properties)

## [Methods](https://github.com/Juicy/juicy-tile-list#methods)

## [Events](https://github.com/Juicy/juicy-tile-list#events)

## [Tile ids](https://github.com/Juicy/juicy-tile-list#tile-ids)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/juicy-tile-grid/releases).

## License

MIT
