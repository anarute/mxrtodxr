function updateurl(input){

  // let mxrulr = window.location;
  //let mxr_url = "http://mxr.mozilla.org/comm-central/find?string=blah";
  let mxr_url = input;

  // The choice to repeat mozilla is to make a safer replacement, in case there is
  // a mxr substring in any url that is not the MXR subdomain.
  let dxr_url = mxr_url.replace("mxr.mozilla", "dxr.mozilla");

  // http://mxr.mozilla.org/comm-central/find?string=blah → https://dxr.mozilla.org/comm-central/search?q=file%3Ablah
  var regexp = /search\?/;
  var regexp2 = /find\?/;

  if (dxr_url.search(regexp) != -1){
    dxr_url = dxr_url.replace("string=", "q=");
  } else if (dxr_url.search(regexp2) != -1) {
    dxr_url = dxr_url.replace("find?string=", "search?q=file%3A");
  }

  document.getElementById("dxrurl").href = dxr_url;
  document.getElementById("dxrurl").text = dxr_url;
  // let urlresto = window.location.search.substring(0);
  // console.log(urlresto);
  //
  // let urlquery = window.location.search.substring(1);
  //
  // const DXR_BASE_ULR = "https://dxr.mozilla.org/"
  //
  // console.log(DXR_BASE_ULR + urlquery);
  console.log(mxr_url);
  console.log(dxr_url);

};
