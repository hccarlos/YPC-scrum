module.exports = function generateNavBar(linkName){

  var links = {
    home: "",
    executives: "",
    events: "",
    registration: "",
    blog: "",
    contact: "",
    login: "",
  }

  links[linkName] = "class='active'";

  var loginButtonText = "Sign In";

  var navBar =
          '<li' + links["home"] +'><a href="/">Home</a></li>'
          +'<li' + links["executives"] +'><a href="/executives">Executives</a></li>'
          +'<li' + links["events"] +'><a href="/events">Events</a></li>'
          +'<li' + links["blog"] +'><a href="/blog">Blog</a></li>'
          +'<li' + links["contact"] +'><a href="/contact">Contact</a></li>'
          +'<li' + links["registration"] +'><a href="/registration">Join</a></li>'
          +'<li' + links["login"] +'><a href="/login">'+ loginButtonText +'</a></li>';

  return navBar; 
}