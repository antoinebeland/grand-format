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
of the master branch
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
This class is used 




License
-------
This project is under MIT license.
