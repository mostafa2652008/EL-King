<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDxbV_2jwbRP5d6VJyg_HmaCr3dLtBoVU4",
    authDomain: "el-king-4a778.firebaseapp.com",
    projectId: "el-king-4a778",
    storageBucket: "el-king-4a778.firebasestorage.app",
    messagingSenderId: "648133046020",
    appId: "1:648133046020:web:9a5c3e86b8a24e94f9aa51",
    measurementId: "G-0DCQFFNNCY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>