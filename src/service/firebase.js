import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

try{
    firebase.initializeApp({
    apiKey: 'AIzaSyCOlSMRrmpNK4OrZC6Q_WuhWf9XVjPfitU',
    authDomain: 'chat-app-1f224.firebaseapp.com' ,
    projectId: 'chat-app-1f224' ,
    storageBucket: 'chat-app-1f224.appspot.com' ,
    messagingSenderId: '34703617377' ,
    appId: '1:34703617377:web:4a4f0d61f7fa1314836920'
    });
    console.log('heyyyyyyyyyyyyy')

}
catch(err){
    console.error('Error in firebase intilization');
}
export const fb={
    auth:firebase.auth(),
    Storage:firebase.storage(),
    firestore:firebase.firestore()
}