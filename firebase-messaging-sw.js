importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
var config = {
  apiKey: "AIzaSyD_-aLMWb9bftdMWX72ZY0UEgUAcaaj3SM",
  authDomain: "metacafe-f523d.firebaseapp.com",
  databaseURL: "https://metacafe-f523d.firebaseio.com",
  projectId: "metacafe-f523d",
  storageBucket: "metacafe-f523d.appspot.com",
  messagingSenderId: "1001973668871"
};
firebase.initializeApp(config);
var messaging = firebase.messaging();
 // messaging
 //   .requestPermission()
 //   .then(function () {
 //     // MsgElem.innerHTML = "Notification permission granted."
 //     console.log("Notification permission granted.");
 //     // get the token in the form of promise
 //     console.log(messaging.getToken());
 //     return messaging.getToken()
 //   })
 //   .then(function(token) {
 //     // print the token on the HTML page
 //     // TokenElem.innerHTML = "token is : " + token;
 //     console.log("Token is "+token);
 //   })
 //   .catch(function (err) {
 //   // ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
 //   console.log("Unable to get permission to notify.", err);
 // });

  // }
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: payload.data["body"],
//     icon: 'img/ionic.png'
//   };
//
//   // return self.registration.showNotification(notificationTitle,notificationOptions);
//   return null;
//   // return payload;
// });
