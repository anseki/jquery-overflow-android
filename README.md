# jQuery.overflowAndroid

The jQuery plugin that is wrapper of [OverflowAndroid](http://anseki.github.io/overflow-android).  
The polyfill for `overflow:scroll` / `overflow:auto` and `element.scrollLeft` / `element.scrollTop` on Android browser.

Android browser has problems as below:

- `overflow:scroll` and `overflow:auto` don't work on Android 2.x. The elements don't accept swipe/flick/drag operation.
- `element.scrollLeft` and `element.scrollTop` don't work on Android 4.0.x. The elements can't scroll via JavaScript. Strange to say, the element that is set `overflow:hidden` can scroll. But of course that element doesn't accept swipe/flick/drag operation.

OverflowAndroid solves above problems both.

**See <a href="http://anseki.github.io/overflow-android">DEMO and more information</a>**

## Usage
[OverflowAndroid](http://anseki.github.io/overflow-android) and [Hammer.js](http://hammerjs.github.io/) are required.

```html
<script src="hammer.min.js"></script>
<script src="overflow-android.min.js"></script>
<script src="jquery-2.1.1.min.js"></script>
<script src="jquery.overflowandroid.min.js"></script>
```

```html
<!-- This `overflow:auto` isn't necessary. It works on desktop PC as native. -->
<div class="view" style="overflow: auto; width: 300px; height: 300px;">   <!-- Like an iframe window -->
  <img src="photo.jpg" width="900" height="600" alt="sample">             <!-- Like an iframe document -->
</div>
```

```js
var element = $('.view').overflowAndroid();
// Now, the element accepts swipe/flick/drag operation.

// And it can scroll via scrollLeft/scrollTop. Therefore animate() method works.
element.animate({scrollLeft: 360, scrollTop: 150}, 1200);

// OverflowAndroid instance can be got via data('overflowAndroid') method.
element.data('overflowAndroid').scrollLeft(100);
```
**See <a href="http://anseki.github.io/overflow-android">DEMO and more information</a>**

## Release History
 * 2014-08-31			v0.1.1			Update package.json for OverflowAndroid v0.1.1.
 * 2014-08-30			v0.1.0			Initial release.
