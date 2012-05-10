yahdrib
=======

__Y__et  __A__nother  __H__TML5   __D__evice   __R__esolution  __I__ndependent  __B__oilerplate

An (almost) ready to use responsive design that fits all current and future devices.


### Purpose

The logic of this responsive design is that we don't want, neither have the time and money,
to create CSS for all current and future devices and resolutions.

Moreover mobiles and narrow medias doesn't need the CSS rules made for wider ones, less to download them.


So the deal is that there is 3 files:

* One that is shared and contains normalization, boilerplate, default yahdrib theme and your custom mobile theme.
* An other one with the CSS for the wider screens.
* At least, a final one for the helpers, non semantic stuff, and print rules.

The shared CSS (1st one) is the base of all, and is splitted into three files (not to be used in production).
So that it's much more understandable, readable, and easy to customize.
But remember, it's made for mobile, so keep it stupidly simple (*KISS*).

Once your done don't forget to compile and minify them in the shared CSS file !


### What's inside

YAHDRIB merges and uses the following codes:

* [html5-boilerplate](https://github.com/h5bp/html5-boilerplate), actually [v3.0.1](https://github.com/h5bp/html5-boilerplate/zipball/v3.0.1)
* [Modernizr](http://www.modernizr.com) actually 2.5.2 html5-boilerplate build
* [Respond](https://github.com/scottjehl/Respond) actually [1.1.0](https://github.com/scottjehl/Respond/blob/c82ab674098de89ca5a144ea236a5697011b807c/respond.min.js)
* Enhanced [normalize.css from Nicolas Gallagher](https://github.com/necolas/normalize.css), actually the [Feb 07, 2012 release](https://github.com/necolas/normalize.css/commit/5e5496c026a0211ac2fdfd62cb59e25455dced55)
* Custom Resolution Independent Design


### Todo, and customization

* `index.html`

Replace / customize / fill in the `<head>` section such as the title, description, keywords, author, Google Webmaster site verification ID, sitemap, feeds (Atom / RSS), etc.

Of course customize the differents `<body>` text content. And at least, the JavaScript, jQuery, and Google Analytics ID if needed.

* `humans.txt`

Fill in the `/* TEAM */`, `/* THANKS */`,  and `/* SITE */` sections. See http://humanstxt.org/ for more information about it.

* CSS files

Customize values, or remove unchanged, from `css/01-yahdrib-theme.css`.

Add your custom CSS for mobiles to `css/02-yahdrib-mobile.css` file. Add your custom CSS for wider media to `wider.css` file.

Compile and minify files for production environment.

* Extra, but appreciated

Give some feedback, comments, or whatever. Talk about how you like it !
