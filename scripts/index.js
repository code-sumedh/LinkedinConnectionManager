chrome.runtime.onMessage.addListener(gotMessage);

async function gotMessage(noOfUser, sender, sendresponse) {
  console.log({ noOfUser });
  var val = document.querySelectorAll('[data-control-name="withdraw_single"]');
  var len = noOfUser || val.length;
  var i = 0;
  var to;
  alert(len);
  var syncIt = () => {
    console.log(i);
    if (i > len) {
      clearInterval(to);
      return;
    }
    var id = val[i].id;
    console.log({ id });
    val[i].click();
    to = setTimeout(() => {
      console.log("removeing inner");
      var elem = document.querySelector("[data-test-dialog-primary-btn]");
      console.log(elem);
      elem.click();
      i++;
      syncIt();
    }, 1500);
  };
  syncIt();
}