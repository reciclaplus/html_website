function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

console.log(document.cookie)

if (getCookie("hasConsent") == "true"){

}
else{
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
            "background": "#efefef",
            "text": "#404040"
            },
            "button": {
            "background": "#0db872"
            }
        },
        "content": {
            "message": "El sitio web reciclaplus.com utiliza cookies propias y de terceros para recopilar\n\ninformación con finalidades técnicas, analíticas y publicitarias.\n\nEncontrará más información en nuestra Política de Cookies.",
            "dismiss": "Aceptar",
            "link": "Leer más",
            "href": "https://nuevoscaminos.org/es/lopd/politica-de-cookies/"
        }
        });
    
document.cookie = "hasConsent=true;SameSite=Lax;"
}