function ReadCookie() {
    var allcookies = document.cookie;
    document.write ("All Cookies : " + allcookies );
    cookiearray = allcookies.split(';');
    
    
    for(const element of cookiearray) {
       name = element.split('=')[0];
       value = element.split('=')[1];
       document.write ("Key is : " + name + " and Value is : " + value);
    }
}
function setCookie() {
   var now = new Time();
   now.setTime(now.getTime() + (exdays * 24 * 60 * 60 * 1000));
   cookievalue = escape(document.form.uname.value) + ";"
   
   document.cookie = "name=" + cookievalue;
   document.cookie = "expires=" + now.toUTCString() + ";"
   document.write ("Setting Cookies : " + "name=" + cookievalue );
}