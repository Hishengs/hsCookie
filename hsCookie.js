;(function(window){
  if(typeof window === 'undefined'){
    throw ReferenceError('window is not declared.');
    return;
  }

  var Cookie = function(){
    this.cookie = window.document.cookie;
  };

  Cookie.prototype.version = '1.0.1';

  Cookie.prototype.author = 'Hisheng';

  Cookie.prototype.get = function(name){
    return name ? this.all()[name] : this.all();
  };

  Cookie.prototype.all = function(){
    var cookies = {}, splitedRawCookies = this.cookie.split(';');

    for(var i = 0, ilen = splitedRawCookies.length; i < ilen; i++){
      var splitedCookie = splitedRawCookies[i].split('=');
      cookies[splitedCookie[0].trim()] = splitedCookie[1];
    }

    return cookies
  };

  Cookie.prototype.set = function(name, value){
    var opts = arguments[2] || {}; // options

    var cookie = [
      name, '=', value,
      opts.path ? '; path=' + opts.path : '', // set path
      opts.expires ? '; expires=' + (function(expires){
        if(typeof expires !== 'number')
          return '';
        else {
          var date = new Date();
          date.setTime(date.getTime() + expires * 1000); // ms
          return date.toUTCString();
        }
      })(opts.expires) : '',
      opts.domain ? '; domain=' + opts.domain : '',
      opts.secure ? '; secure' : '',
    ].join('');

    this.cookie = cookie;

    return this.all();
  };

  Cookie.prototype.del = function(name){
    var opts = arguments[1] || {};
    opts.expires = -1;
    this.set(name, '', opts);
  };

  window.Cookie = Cookie;

  window.hsCookie = new Cookie();
})(window);