function guess_dxr_url(mxr_url){
  // The choice to repeat mozilla is to make a safer replacement, in case there
  // is a mxr substring in any url that is not the MXR subdomain.
  let dxr_url = mxr_url.replace("mxr.mozilla", "dxr.mozilla");

  // What we'll be searching for to replace
  var regexp = /search\?/;
  var regexp2 = /find\?/;

  if (dxr_url.search(regexp) != -1){
    dxr_url = dxr_url.replace("string=", "q=");
  } else if (dxr_url.search(regexp2) != -1) {
    dxr_url = dxr_url.replace("find?string=", "search?q=file%3A");
  };

  regexp = /\?mark\=/;
  if (dxr_url.search(regexp) != -1){
    let query = dxr_url.split("#");
    dxr_url = query[0];
    dxr_url = dxr_url.replace(regexp, '#');
  };

  return dxr_url;
};

function updateurl(input){

  // When the project is finished we will use window.location as input
  // let mxr_url = window.location;

  var guess_url = guess_dxr_url(input);

  document.getElementById("dxrurl_suggestion").style.display = "block";

  let dxr_url_el = document.getElementById("dxrurl");
  dxr_url_el.href = guess_url;
  dxr_url_el.text = guess_url;

};
