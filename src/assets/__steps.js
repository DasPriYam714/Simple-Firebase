/*
          ---------------------
              Initial Setup
          ---------------------
*1.visit: console.firebase.google.com
*2.create firebase project.[skip google analytics]
*3.register app[create config]
*4. install firebase
*5. add config file to the project 
*6. do not publish firebase config file to push in a public repository
         -------------------
              Integration
         -------------------
*7.Go to Docs > authentication > web > get start
*8. export app from firebase.init.js
*9. Login JSX: import getAuth  from firebase/auth
*10. add const auth = getAuth(app)
            ----------------------
                Provider Setup
            ----------------------
*11. import GoogleAuthProvider from firebase and create new provider
*12. need to add addSignInWithPopup and pass (auth , provider)
*13. Need to active Firebase signIn method (google, gitHub, Facebook etc)
*14. 

*/