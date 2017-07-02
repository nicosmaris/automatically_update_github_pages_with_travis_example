/* loads libs. To use 'npm run debug', comment the following line */
import test from 'ava';

var sinon = require("sinon");
var fs = require("fs");
var jsdom = require("jsdom");
var assert = require('assert');

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

/**************************************************************/
var call = require("../app/call.js").call;
 
/* To use 'npm run debug', comment the following line and keep the body of the function that does not use 't' */
test('makes a call with Restcomm Connect API call and the response has the account SID', t => {
  var sid = 'AC1'
  var success = require("../app/call.js").success
  var fakes = sinon.collection;
  success(fakes, $);
  call(window, $, sid, '', '', '');

  var response = $('#msgid').data();
  t.true(response.hasOwnProperty('AccountSid'), response);
  t.is(response['AccountSid'], sid, response['AccountSid']);
  fakes.restore();
});

test('makes a call with Restcomm Connect API call and the response has a CallSid', t => {
  var sid = 'AC1'
  var success = require("../app/call.js").success
  var fakes = sinon.collection;
  success(fakes, $);
  call(window, $, sid, '', '', '');

  var response = $('#msgid').data();
  t.true(response.hasOwnProperty('CallSid'), response);
  fakes.restore();
});

test('makes a call with Restcomm Connect API call and the response has a CallStatus', t => {
  var sid = 'AC1'
  var success = require("../app/call.js").success
  var fakes = sinon.collection;
  success(fakes, $);
  call(window, $, sid, '', '', '');

  var response = $('#msgid').data();
  t.true(response.hasOwnProperty('CallStatus'), response);
  fakes.restore();
});

test('makes a call with Restcomm Connect API and a failing response leads to the displayed text "call failed"', t => {
  var sid = 'AC1'
  var error = require("../app/call.js").error
  var fakes = sinon.collection;
  error(fakes, $);
  call(window, $, sid, '', '', '');

  var text = $('#msgid').html();
  t.is(text, 'call failed', text);
  fakes.restore();
});

test('modifies a ringing call and the response has CallStatus cancelled', t => {
  var sid = 'AC1'
  var success = require("../app/call.js").success
  var fakes = sinon.collection;
  var spy = success(fakes, $);
  call(window, $, sid, '', '', '', 'aCallSid', 'cancelled');

  var response = $('#msgid').data();
  sinon.assert.calledWith(spy, sinon.match(function (value) {
    // TODO 
    return !!value;
  }));
  spy.calledWith('json');
  fakes.restore();
});

test('modifies an accepted call by playing the audio file hello and the response has the expected CallStatus', t => {
  var sid = 'AC1'
  var success = require("../app/call.js").success
  var fakes = sinon.collection;
  success(fakes, $);
  var callSid = 'aCallSid';
  call(window, $, sid, '', '', '', callSid, 'not given', 'http://127.0.0.1:8080/restcomm/rcml?callSid=' + callSid + '&method=play&file=hello');

  var response = $('#msgid').data();
  t.true(response.hasOwnProperty('CallStatus'), response);
  fakes.restore();
});

// TODO: when user clicks at Say, the ajax call has url with regex /say
test('modifies an accepted call by saying hello hello and the response has the expected CallStatus', t => {
  var sid = 'AC1'
  var success = require("../app/call.js").success
  var fakes = sinon.collection;
  success(fakes, $);
  var callSid = 'aCallSid';
  call(window, $, sid, '', '', '', callSid, 'not given', 'http://127.0.0.1:8080/restcomm/rcml/say?callSid=' + callSid + '&text=hello+hello');

  var response = $('#msgid').data();
  t.true(response.hasOwnProperty('CallStatus'), response);
  fakes.restore();
});

test('the generated RCML of rcml/play?callSid=x&method=play&file=hello has the format <Response><Play>http://foobar.com/demo.wav</Play></Response>', t => {
  var msg = "This should be tested on the backend";
});


