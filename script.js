$(document).ready(function() {
  var minVal;
  var maxVal;
  var bgCol;
  var pointerCol;
  var alphaCol;
  var currVal;
  var trackCol;

  function math_random_int(a, b) {
    if(a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function colour_random() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
  }
  // Block#: 1
  function on_minValB_click(e) {
    try {
      // Block#: 2
      minVal = math_random_int(0, 5);
      // Block#: 6
      com.fc.JavaScriptDistLib.Gauge.setProperty["Minimum Value"]("Gauge", minVal); // Block#: 8
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("minValL", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Gauge.getProperty["Minimum Value"]("Gauge"))));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="minValB"]').on('click', on_minValB_click);
  // Block#: 11
  function on_maxValB_click(e) {
    try {
      // Block#: 12
      maxVal = math_random_int(100, 150);
      // Block#: 16
      com.fc.JavaScriptDistLib.Gauge.setProperty["Maximum Value"]("Gauge", maxVal); // Block#: 18
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("maxValL", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Gauge.getProperty["Maximum Value"]("Gauge"))));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="maxValB"]').on('click', on_maxValB_click);
  // Block#: 21
  function on_bgColB_click(e) {
    try {
      // Block#: 22
      bgCol = colour_random();
      // Block#: 24
      com.fc.JavaScriptDistLib.Gauge.setProperty["Background color"]("Gauge", bgCol); // Block#: 26
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("bgColB", bgCol);
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="bgColB"]').on('click', on_bgColB_click);
  // Block#: 28
  function on_pointerColB_click(e) {
    try {
      // Block#: 29
      pointerCol = colour_random();
      // Block#: 31
      com.fc.JavaScriptDistLib.Gauge.setProperty["pointer color"]("Gauge", pointerCol); // Block#: 33
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("pointerColB", pointerCol);
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="pointerColB"]').on('click', on_pointerColB_click);
  // Block#: 35
  function on_alphaB_click(e) {
    try {
      // Block#: 36
      alphaCol = colour_random();
      // Block#: 38
      com.fc.JavaScriptDistLib.Gauge.setProperty["Alpha"]("Gauge", alphaCol); // Block#: 40
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("alphaB", alphaCol);
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="alphaB"]').on('click', on_alphaB_click);
  // Block#: 42
  function on_currValB_click(e) {
    try {
      // Block#: 43
      currVal = math_random_int(5, 100);
      // Block#: 47
      com.fc.JavaScriptDistLib.Gauge.setProperty["Current Value"]("Gauge", currVal); // Block#: 49
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("currValL", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Gauge.getProperty["Current Value"]("Gauge"))));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="currValB"]').on('click', on_currValB_click);
  // Block#: 52
  function on_trackColB_click(e) {
    try {
      // Block#: 53
      trackCol = colour_random();
      // Block#: 55
      com.fc.JavaScriptDistLib.Gauge.setProperty["track color"]("Gauge", trackCol); // Block#: 57
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("trackColB", trackCol);
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="trackColB"]').on('click', on_trackColB_click);
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 448038-547351-177015-263501
