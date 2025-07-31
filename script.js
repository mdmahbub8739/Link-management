import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDV3mk3Ze50XZqhSrVNjBAbVVGVVUHd1E",
  authDomain: "ludo-tournament-ff1cd.firebaseapp.com",
  databaseURL: "https://ludo-tournament-ff1cd-default-rtdb.firebaseio.com",
  projectId: "ludo-tournament-ff1cd",
  storageBucket: "ludo-tournament-ff1cd.appspot.com",
  messagingSenderId: "54812731588",
  appId: "1:54812731588:web:2b98aa0b5498d58c70c191"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const linksRef = ref(database, 'links/');
const linkList = document.getElementById('link-list');

onValue(linksRef, (snapshot) => {
  const data = snapshot.val();
  linkList.innerHTML = '';
  for (let key in data) {
    const link = data[key];
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
    linkList.appendChild(li);
  }
});
