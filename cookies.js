function getCookie(uname) {
   let name = uname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for(const element of ca) {
     let c = element;
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
}
function setCookie(uname,cvalue,exdays) {
   const d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   let expires = "expires=" + d.toUTCString();
   document.cookie = uname + "=" + cvalue + ";" + expires + ";path=/";
 }