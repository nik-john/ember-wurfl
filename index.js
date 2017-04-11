/* jshint node: true */

'use strict';

module.exports = {
  name: 'ember-wurfl',
  contentFor : function(type, config) {
    var content = '';
    if (type === 'body') {
      var src = '//wurfl.io/wurfl.js';
    }
    content = '<script type="text/javascript" src="' + src + '"></script>';
    return content;
  }
};
