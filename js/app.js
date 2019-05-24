firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href="./home/home.html"
      // User is signed in.
    //   var displayName = user.displayName;
    //   var email = user.email;
    //   var emailVerified = user.emailVerified;
    //   var photoURL = user.photoURL;
    //   var isAnonymous = user.isAnonymous;
    //   var uid = user.uid;
    //   var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
      window.location.href="./login/login.html"

    }

  });