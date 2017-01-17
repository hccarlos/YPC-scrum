var exps = {

  memo: {
    notLoggedIn: {},
    loggedIn: {}
  },

  signInOrEdit: {
    text:{
      notLoggedIn: "Sign In",
      loggedIn: "Edit Info"
    },
    link:{
      notLoggedIn: "/login",
      loggedIn: "/edit"
    }
  },

  generate: function(linkName, loggedIn){
    var navBar = "";
    var loggedInKey = (loggedIn === true)?"loggedIn":"notLoggedIn"; //this will memoize two versions of the "partial" to be able to change the sign in link to edit for logged in users.

    if(exps.memo[loggedInKey][linkName] === undefined){
      let links = {
        home: "",
        executives: "",
        events: "",
        registration: "",
        blog: "",
        contact: "",
        login: "",
      }

      links[linkName] = "class='active'";

      navBar =
              '<li' + links["home"] +'><a href="/">Home</a></li>'
              +'<li' + links["executives"] +'><a href="/executives">Executives</a></li>'
              +'<li' + links["events"] +'><a href="/events">Events</a></li>'
              +'<li' + links["blog"] +'><a href="/blog">Blog</a></li>'
              +'<li' + links["contact"] +'><a href="/contact">Contact</a></li>'
              +'<li' + links["registration"] +'><a href="/registration">Join</a></li>'
              +'<li' + links["login"] +'><a href="' + exps.signInOrEdit.link[loggedInKey] + '">'+ exps.signInOrEdit.text[loggedInKey] +'</a></li>';

      exps.memo[loggedInKey][linkName] = navBar;
    }

    return exps.memo[loggedInKey][linkName]; 
  }
}

module.exports = exps;