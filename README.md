# &lt;juicy-tile-grid&gt;

> Masonry-like Polymer Element for sortable tiles that packs efficiently without changing HTML structure (changes CSS only), and adapts it to CSS Grid Layout.
> Extended renderer for [`juicy-tile-list`](Juicy/juicy-tile-list).

## Demo

[Check it live!](http://Juicy.github.io/juicy-tile-grid)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install juicy-tile-grid --save
```

Or [download as ZIP](https://github.com/Juicy/juicy-tile-grid/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-tile-grid/dist/juicy-tile-grid.html">
    ```

3. Start using it!

    ```html
    <juicy-tile-grid></juicy-tile-grid>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`foo`         | *string*    | `bar`        | Lorem ipsum dolor.

## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`unicorn()`   | None.        | Nothing.    | Magic stuff appears.

## Events

Event         | Description
---           | ---
`onsomething` | Triggers when something happens.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/juicy-tile-grid/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
