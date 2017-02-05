exports.f = function(window, jquery, sid, token, src, dest){
  /* src and dest are str and need the country prefix like +30 */
  var host = 'https://tadhack.restcomm.com'
  var endpoint = '/restcomm/2012-04-24/Accounts/' + sid + '/Calls.json'
  var url = host + endpoint
  var basic = "Basic " + window.btoa(sid + ':' + token);
  var body = {
    'To': dest,
    'From': src
  }

  jquery.ajax({
    type: 'POST',
    contentType: "application/json",
    url: url,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", basic);
    },
    json: body,
    success: function (data) {
      console.log('done');
      jquery("#msgid").html(data);
    }
  });
}
