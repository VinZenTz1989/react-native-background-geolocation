var React = require('react-native');

var BackgroundGeolocationManager = require('NativeModules').RNBackgroundGeolocation;
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

var BackgroundGeolocation = {
  configure: function(callback, config) {
    BackgroundGeolocationManager.configure(callback, config);
  }
};

module.exports = BackgroundGeolocation;
