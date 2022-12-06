import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login  from "./router/Login";
import Dashboard from "./router/Dashboard";
import EditProfile from "./router/EditeProfile";
import SignOut from './router/SignOut';
import PublicProfile from './router/PublicProfile';
import ChooseUserName from './router/ChooseUserName';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<App />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/dashboard/profile" element={<EditProfile />} />
  <Route path="/signout" element={<SignOut />} />
  <Route path="/usuario/:username" element={<PublicProfile />} />
  <Route path="/choose-username" element={<ChooseUserName />} />
 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
