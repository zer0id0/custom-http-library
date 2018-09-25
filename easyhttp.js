function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTp GET Request
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);
  
  let self = this;
  //Arrow functions lexical "this" fixes bug instead of es5 "self" hack
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error:' + self.http.status)
    }
  }
  this.http.send();
}


//Make an HTTp POST Request
//Make an HTTp PUT Request
//Make an HTTp DELETE Request