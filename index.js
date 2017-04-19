/* jshint node: true */

'use strict';

module.exports = {
  name: 'ember-wurfl',

  contentFor : function(type, config) {
    if (type === 'head') {
      var src = 'https://wurfl.io/wurfl.js';
      var content = '<script type="text/javascript" src="' + src + '"></script>';

      return content;
    }

    return '';
  }
};
