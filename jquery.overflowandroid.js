/*
 * jQuery.overflowAndroid
 * https://github.com/anseki/jquery-overflow-android
 *
 * OverflowAndroid
 * https://anseki.github.io/overflow-android/
 *
 * Copyright (c) 2017 anseki
 * Licensed under the MIT license.
 */

/* global OverflowAndroid:false */

;(function($) {
'use strict';

var APP_NAME = 'overflowAndroid';

$.fn[APP_NAME] = function() {
  return this.each(function() {
    var that = $(this);
    that.data(APP_NAME, new OverflowAndroid(that.get(0)));
  });
};

})(jQuery);
