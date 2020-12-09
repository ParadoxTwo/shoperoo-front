import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAKNruE5_LkkyRQpRKDS_MwWocmaGvWxVs",
    authDomain: "shoperoo.firebaseapp.com",
    databaseURL: "https://shoperoo.firebaseio.com",
    projectId: "shoperoo",
    storageBucket: "shoperoo.appspot.com",
    messagingSenderId: "553162863152",
    appId: "1:553162863152:web:b0d003f54238a3cd6db3f5",
    measurementId: "G-XEXCE7RYLK"
};

firebase.initializeApp(firebaseConfig)

export default firebase