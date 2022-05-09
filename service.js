import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyDO5Y0qOwgrJNyTGKuXbOWsWHXhvcOEN3s",
        authDomain: "dots-69c76.firebaseapp.com",
        projectId: "dots-69c76",
        storageBucket: "dots-69c76.appspot.com",
        messagingSenderId: "13261912101",
        appId: "1:13261912101:web:2a75f2a25b1ff04bcae7cc",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
        collection,
        addDoc,
        updateDoc,
        deleteDoc,
        deleteField,
      } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";
      const db = getFirestore();

      let WalletBox = document.getElementById("Wallet");
      let AdressBox = document.getElementById("Adress");
      let NameBox = document.getElementById("Name");

      let insbtn = document.getElementById("insbtn");

      async function AddDocument_AutoID() {
        var ref = collection(db, "CustomersList");
        const docRef = await addDoc(ref, {
          WalletOfCst: WalletBox.value,
          AdressOfCst: AdressBox.value,
          NameOfCst: NameBox.value,
        }).then(() => {
          alert("Data Added");
        })
        .catch((error)=>{
            alert("Error"+error);
        })
      }

      insbtn.addEventListener("click",AddDocument_AutoID);