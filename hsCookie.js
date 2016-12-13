(function(){
	window.Cookie = undefined

	var Cookie = function(){}

	Cookie.prototype = {
		version: '1.0.0',
		author: 'Hisheng',
		get: function(name){
			return name?this.all()[name]:this.all()
		},
		all: function(){
			var cookies = {}, splitedRawCookies = document.cookie.split(';'), splitedRawCookiesLen = splitedRawCookies.length
			for(var i=0;i<splitedRawCookiesLen;i++){
				var splitedCookie = splitedRawCookies[i].split('=')
				cookies[splitedCookie[0].trim()] = splitedCookie[1]
			}
			return cookies
		},
		set: function(name,value){
			var opts = arguments[2] || {} // 其他配置项

			var cookie = [
				name, '=', value,
				opts.path?'; path='+opts.path:'', // 路径
				opts.expires?'; expires='+(function(expires){
					if(typeof expires !== 'number')return ''
					else {
						var date = new Date()
						date.setTime(date.getTime()+expires*1000) // 毫秒ms
						return date.toUTCString()
					}
				})(opts.expires):'',
				opts.domain?'; domain='+opts.domain:'',
				opts.secure?'; secure':''
			].join('')

			document.cookie = cookie

			return this.all()
		},
		del: function(name){
			var opts = arguments[1] || {}
			opts.expires = -1
			this.set(name,'',opts)
		},
	}

	window.Cookie = new Cookie()
})(window)