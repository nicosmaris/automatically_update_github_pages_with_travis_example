import test from 'ava';

/* loads libs */
var fs = require("fs");
var jsdom = require("jsdom");

/* loads HTML of page under test */
var htmlfile = fs.readFileSync("index.html")

/* does not load js handler of jquery ready event. jsdom.env is even more limited */
var document = jsdom.jsdom(htmlfile, {
  virtualConsole: jsdom.createVirtualConsole().sendTo(console)
});
var window = document.defaultView;
window.onModulesLoaded = function () {
  console.log("ready to roll!");
};
var $ = require('jquery')(window);

/* copy js code here to avoid messing with commonJS and AMD or ES6 */
function unit_under_test(){
  $("#msgid").html("hello world");
}

/* jasmine tests */
test('can add numbers', t => {
  unit_under_test()
  var text = $('#msgid').html();
  console.log(text);
  t.is(text, 'hello world');
});


