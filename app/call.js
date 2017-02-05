exports.call = function(window, jquery, sid, token, src, dest, CallSid, status, Url){
  /* src and dest are str and need the country prefix like +30 */
  CallSid = CallSid || 'not given';
  status = status || 'not given';
  Url = Url || 'not given';
  var host = 'https://localhost' // tadhack.restcomm.com does not have CORS
  var endpoint = '/restcomm/2012-04-24/Accounts/' + sid + '/Calls.json';
  if(CallSid!='not given'){
    endpoint += CallSid;
  }
  var url = host + endpoint
  var basic = "Basic " + window.btoa(sid + ':' + token);
  var body = {
    'To': dest,
    'From': src
  }
  if(status!='not given'){
    body['status'] = status;
  }
  if(Url!='not given'){
    body['Url'] = Url;
  }
  jquery.ajax({
    type: 'POST',
    contentType: "application/json",
    url: url,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", basic);
    },
    json: body,
    success: function (response) {
      jquery("#msgid").data(response);
    },
    error: function (response) {
      jquery("#msgid").html("call failed");
    },
  });
}

// stub functions so that we don't depend on tadhack.restcomm.com which also has no CORS
exports.success = function(sinon, jquery){
  var response = {
    'CallSid':'CA4e83cdce15c24b48a4b89c05f09f0dff',
    'AccountSid':'AC1',
    'To':'%2B306901234567',
    'CallStatus':'in-progress'
  }
  sinon.stub(jquery, "ajax").yieldsTo("success", response);
}

exports.cancelled = function(sinon, jquery){
  var response = {
    'CallSid':'CA4e83cdce15c24b48a4b89c05f09f0dff',
    'AccountSid':'AC1',
    'To':'%2B306901234567',
    'CallStatus':'cancelled'
  }
  sinon.stub(jquery, "ajax").yieldsTo("success", response);
}

exports.error = function(sinon, jquery){
  var response = {
    'CallSid':'CA4e83cdce15c24b48a4b89c05f09f0dff',
    'AccountSid':'AC1',
    'To':'%2B306901234567',
    'CallStatus':'in-progress'
  }
  sinon.stub(jquery, "ajax").yieldsTo("error", response);
}

