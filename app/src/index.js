import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from './Login';
import SignUp from './Register';
import Profile from './profile'
import Post from './Post'
import Feed from './Feedpage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Auth, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC_7I2I8WtpcWbuKSif1N-R9Mk78LQme5k",
    authDomain: "danstagram-ad70a.firebaseapp.com",
    projectId: "danstagram-ad70a",
    storageBucket: "danstagram-ad70a.appspot.com",
    messagingSenderId: "84384280152",
    appId: "1:84384280152:web:b98abf6a4044ebc202e42d",
    measurementId: "G-R1EKFL26PG"
  };

  const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<SignUp />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="post" element={<Post />} />
                    {/* <Route path='feed' element={<Feed />} /> */}
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
