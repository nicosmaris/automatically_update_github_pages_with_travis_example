import test from 'ava';

var jsdom = require("jsdom");

jsdom.env({
  url: "http://digg.com",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
    var $ = window.$;
    console.log($("a.story-title-link.story-link").text());
  }
});


test('can add numbers', t => {
	    t.is(1 + 1, 2);
});
