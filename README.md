# UNMAINTENED - yahdrib

**Y**et **A**nother **H**TML5 **D**evice **R**esolution **I**ndependent **B**oilerplate

A boilerplate for a **responsive design** that fits **all** current and future **devices**.

## See the [page](http://sylvaindethier.github.io/yahdrib/), or the awesome [demo](http://sylvaindethier.github.io/yahdrib/demo/)


## Purpose

The logic of this responsive design is that we don't want, neither have the time,
to create CSS for all current and future devices and resolutions.

Moreover mobiles and narrow medias doesn't need the CSS rules made for wider ones,
less to download them.


So the deal is that there is 3 files:

1. One that is shared and contains normalization, boilerplate, default yahdrib
theme and your custom mobile theme.

    The `shared.min.css` is the base of all: normalization, base of theme,
and mobile styles. In developement, there is 3 separated files (_css/dev_).
So that it's much more understandable, readable, and easy to customize.

    But remember, it's made for mobile, so keep it stupidly simple (*KISS*).

2. An other one with the CSS for the wider screens.
    
    The `wider.min.css` contains rules for large and intermediate screens.
Here, CSS are more for enhanced page layout, theme, etc.

3. At least, the `helpers-print.min.css` is a final tiny one for the helpers,
non semantic stuff, and print rules.

---

## What's inside

**yahdrib** uses the following librairy:

> [html5-boilerplate](https://github.com/h5bp/html5-boilerplate) | [v3.0.2](https://github.com/h5bp/html5-boilerplate/zipball/v3.0.1)

> [Modernizr](http://www.modernizr.com) | 2.5.3 html5-boilerplate build

> [Respond](https://github.com/scottjehl/Respond) | [1.2.0](https://github.com/scottjehl/Respond/blob/b21c5785e8442cca651f532ce72e6e515817ad3d/respond.min.js)

> Enhanced [normalize.css from Nicolas Gallagher](https://github.com/necolas/normalize.css) | [Mar 03, 2012 release](https://github.com/necolas/normalize.css/blob/03575299fc8cba752a51fece7c35343085d6ed09/normalize.css)

> A custom resolution independent design

---

### Get ready, and customize

* index.html

    Replace / customize / fill in the `<head>` section such as the title,
description, keywords, author, Google Webmaster site verification ID, sitemap,
feeds (Atom / RSS), etc.
    
    Of course customize the different `<body>` text contents. And at least,
the JavaScript, jQuery, and Google Analytics ID if needed.
    
    Remove unnecessary code and comments for production environment.

* humans.txt

    Fill in the `/* TEAM */`, `/* THANKS */`,  and `/* SITE */` sections.
    See http://humanstxt.org/ for more information about it.

* CSS files

    Customize values, or remove unchanged, from `css/dev/01-yahdrib-theme.css` file.
    
    Add your own custom CSS for mobiles to `css/dev/02-yahdrib-mobile.css` file.
    
    Add your custom CSS for wider media to `css/dev/wider.css` file.
    
    For production environment, merge and minify the follwing files into one single `css/shared.min.css` file.

  1. `css/dev/00-normalize-h5bp-yahdrib.css`
  2. `css/dev/01-yahdrib-theme.css`
  3. `css/dev/02-yahdrib-mobile.css`

    
    Also minify `css/dev/wider.css` into `css/wider.min.css`.

* Extra, but well appreciated

    Clone, fork, give some feedback, comment, or whatever. Talk about how you like it !
