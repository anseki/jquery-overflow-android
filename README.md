# jQuery.overflowAndroid

[![npm](https://img.shields.io/npm/v/jquery-overflowandroid.svg)](https://www.npmjs.com/package/jquery-overflowandroid) [![GitHub issues](https://img.shields.io/github/issues/anseki/jquery-overflow-android.svg)](https://github.com/anseki/jquery-overflow-android/issues) [![David](https://img.shields.io/david/anseki/jquery-overflow-android.svg)](package.json) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

The jQuery plugin that is wrapper of [OverflowAndroid](https://anseki.github.io/overflow-android/).  
The polyfill for `overflow:scroll` / `overflow:auto` and `element.scrollLeft` / `element.scrollTop` on Android browser.

[![ss-01](ss-01.gif)](https://anseki.github.io/overflow-android/)

Android browser has problems as below:

- `overflow:scroll` and `overflow:auto` don't work on Android 2.x. The elements don't accept scroll operations (swipe, flick, drag, etc.).
- `element.scrollLeft` and `element.scrollTop` don't work on Android 4.0.x. The elements can't scroll via JavaScript. Strange to say, the element that is set `overflow:hidden` can scroll. But of course that element doesn't accept scroll operations.

OverflowAndroid solves above problems both.

**See <a href="https://anseki.github.io/overflow-android/">DEMO and more information</a>**

## Usage
[Hammer.js](http://hammerjs.github.io/) is required.

```html
<script src="hammer.min.js"></script>
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
// Now, the element accepts scroll operations (swipe, flick, drag, etc.).

// And it can scroll via scrollLeft/scrollTop. Therefore animate() method works.
element.animate({scrollLeft: 360, scrollTop: 150}, 1200);

// OverflowAndroid instance can be got via data('overflowAndroid') method.
element.data('overflowAndroid').scrollLeft(100);
```
**See <a href="https://anseki.github.io/overflow-android/">DEMO and more information</a>**
