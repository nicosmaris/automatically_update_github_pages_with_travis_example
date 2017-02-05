/* loads libs. To use 'npm run debug', comment the following line */
import test from 'ava';

var sinon = require("sinon");
var fs = require("fs");
var jsdom = require("jsdom");

/* loads HTML of page under test */
var htmlfile = fs.readFileSync("index.html")

/* does not load js handler of jquery ready event. jsdom.env is even more limited */
var document = jsdom.jsdom(htmlfile, {
  /* console errors on a browser like 'XMLHttpRequest cannot load' will be ignored */
  virtualConsole: jsdom.createVirtualConsole().sendTo(console)
});
var window = document.defaultView;
window.onModulesLoaded = function () {
  console.log("ready to roll!");
};
var $ = require('jquery')(window);

/* mocking */
function stubs(){
  sinon.stub($, "ajax").yieldsTo("success", "hello world"); // so we don't depend on tadhack.restcomm.com which also has no CORS
}
/**************************************************************/
/* loads Unit Under Test */
var call = require("../app/call.js").f;

/* isolated tests that run in parallel */
/* To use 'npm run debug', comment the following line and keep the body of the function that does not use 't' */
test('the test msisdn calls itself and response of restcomm connect appears at #msgid', t => {
  var sid = ''   // fs.readFileSync("sid")
  var token = '' // fs.readFileSync("token")
  var dest = ''  // fs.readFileSync("msisdn_dest")

  stubs();
 
  call(window, $, sid, token, dest, dest);

  var text = $('#msgid').html();
  console.log('start of content of #msgid');
  console.log(text);
  console.log('end of content of #msgid');

  t.is(text, 'hello world', text);
});

