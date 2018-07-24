Grand Format
============

Grand Format is a tiny CSS library to facilitate the creation of storytelling articles that use big size pictures. 
This library defines some useful rules to create articles similar to the New York Times storytelling format 
(e.g. [Climate Change Is Killing the Cedars of Lebanon](https://www.nytimes.com/interactive/2018/07/18/climate/lebanon-climate-change-environment-cedars.html)).

A [demo](https://www.antoinebeland.com/grand-format) of the library is available on my personal website.

Quick Start
-----------
To use the library, you have several options:

- Use the latest [version](https://raw.githubusercontent.com/antoinebeland/grand-format/master/dist/grand-format.css) 
of the master branch (see `dist` folder)
- Clone the repo: `git clone https://github.com/antoinebeland/grand-format.git`

Be sure to include `grand-format.css` file in your HTML file before to start.

Documentation
-------------
Before to use the rules define by the library, you have to define a `main` element in your HTML file, like in the code
snippet below.

```html
<body>
  <main> 
    The main content of the page...
  </main>
</body>
```

Once the `main` element is defined, you can take a look at the next subsections to know how to use classes in your
HTML file. **Be sure to define your elements into the `main` tag.**

### `full-page`
This class is used to make an image or a video appears the size of the viewport. It is possible to add an overlay caption
with the class `caption`. Take a look at the following examples:

```html
<!-- A full page image -->
<div class="full-page">
  <img alt="Moraine Lake" 
    src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg">
</div>

<!-- A full page image with a caption -->
<div class="full-page">
  <img alt="Moraine Lake" 
    src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg">
  <div class="caption">
    <h1>Moraine Lake</h1>
    <p>Lake Louise, AB</p>
  </div>
</div>

<!-- A full page video -->
<div class="full-page">
  <video id="video" autoplay loop muted>
    <source src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Vrabchanski_waterfall_video.webm" 
      type="video/webm">
    Your browser does not support the video tag.
  </video>
</div>
```

### `media-wrapper`
This class is used to display one or more images/videos on a single line. The element that uses `media-wrapper` class 
appears 150% larger than a paragraph length. This creates a nice effect to emphasize on the media elements.

When you use the `media-wrapper` class, you must use `media` class as direct children. Take a look at the following 
examples:

```html
<!-- A single image in a media wrapper -->
<div class="media-wrapper">
  <div class="media">
    <img alt="Moraine Lake" 
      src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg">
  </div>
</div>

<!-- A single image in a media wrapper with a caption -->
<div class="media-wrapper">
  <figure class="media">
    <img alt="Moraine Lake" 
      src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg">
    <figcaption>Moraine Lake</figcaption>
  </figure>
</div>

<!-- Two images in a media wrapper with captions -->
<div class="media-wrapper">
  <figure class="media">
    <img alt="Moraine Lake" 
      src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg">
    <figcaption>Moraine Lake</figcaption>
  </figure>
  <figure class="media">
    <img alt="Moraine Lake" 
      src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Moraine_Lake-Banff_NP.JPG">
    <figcaption>Moraine Lake</figcaption>
  </figure>
</div>
```

Source Code
-----------
The source code is located in the `scss` folder. The stylesheets are written is [SCSS](https://sass-lang.com/) language. 
There are only two files in the projet:

- `constants.scss`: define the constants used in the `main.scss` file (e.g. colors, dimensions, fonts, margins, etc.)
- `main.scss`: define the style rules (classes, elements, etc.) 

### Modifications

If you are interested to modify the source code, you can clone the repo and read the following instructions.

After cloning the repository, you have to install all the node modules required for the gulp tasks
with the following command:
```
npm install
```

Once the dependencies are installed, you have to start the file watcher that automatically compile SCSS files on change.
The compiled file is generated in the `dist` folder. To start the file watcher, you have to type the following command:

```
npm start
```

After your modifications, you can run the SASS linter on your code with the following command:

```
npm run lint
```

Issues
------
If you find any issues with the library, don't hesitate to open a 
[new issue](https://github.com/antoinebeland/grand-format/issues/new).

License
-------
This project is under MIT license.
