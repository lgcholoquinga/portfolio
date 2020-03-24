import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDMcw42mUo4srnDMQc6YKtX4LAh9EX8vgE',
  authDomain: 'portfolio-b21bc.firebaseapp.com',
  databaseURL: 'https://portfolio-b21bc.firebaseio.com',
  projectId: 'portfolio-b21bc',
  storageBucket: 'portfolio-b21bc.appspot.com',
  messagingSenderId: '609554580677',
  appId: '1:609554580677:web:6129209437901cf3789cac',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
