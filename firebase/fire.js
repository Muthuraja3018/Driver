import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALh5tA0lhfB02jJf1pAI2Lojw0pPIp02Q",
    authDomain: "my-driver-app-31460.firebaseapp.com",
    databaseURL: "https://my-driver-app-31460-default-rtdb.firebaseio.com",
    projectId: "my-driver-app-31460",
    storageBucket: "my-driver-app-31460.appspot.com",
    messagingSenderId: "22117066109",
    appId: "1:22117066109:web:c51a2f6d314e8a2e125814"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;