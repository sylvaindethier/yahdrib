yahdrib
=======

**Y**et  **A**nother  **H**TML5   **D**evice   **R**esolution  **I**ndependent  **B**oilerplate

An (almost) ready to use responsive design that fits for all current and future devices.

It merges and uses the following codes:

* [html5-boilerplate](https://github.com/h5bp/html5-boilerplate), actually [v3.0.1](https://github.com/h5bp/html5-boilerplate/zipball/v3.0.1)
* [Modernizr](http://www.modernizr.com) actually 2.5.2 html5-boilerplate build
* [Respond](https://github.com/scottjehl/Respond) actually [1.1.0](https://github.com/scottjehl/Respond/blob/c82ab674098de89ca5a144ea236a5697011b807c/respond.min.js)
* Enhanced [normalize.css from Nicolas Gallagher](https://github.com/necolas/normalize.css), actually the [Feb 07, 2012 release](https://github.com/necolas/normalize.css/commit/5e5496c026a0211ac2fdfd62cb59e25455dced55)
* Custom Resolution Independent Design

The logic of this responsive design is that mobiles and narrow medias doesn't need the CSS rules made for bigger ones, less to download them.

So there is two files:

* One that is shared and contains noramlization, default yahdrib theme and your custom mobile theme.
* And an other one with the CSS for the wider screens.

The shared CSS is the base of all, and is splitted into three files (not to be used in production).
So that it's much more understandable, readable, and easy to customize.
But remember, it's made for mobile, so keep it stupidly simple (*KISS*).

Once your done don't forget to compile and minify them in the shared CSS file !