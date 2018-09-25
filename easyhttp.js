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
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  
  let self = this;
  //Arrow functions lexical "this" fixes bug instead of es5 "self" hack
  this.http.onload = function() {
      callback(null, self.http.responseText);
  }
  

  this.http.send(JSON.stringify(data));
}


//Make an HTTp PUT Request
//Make an HTTp DELETE Request