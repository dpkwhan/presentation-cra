import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from "antd";

import reportWebVitals from './reportWebVitals';
import Presentation from './Presentation';
import DashboardTutorial from './DashboardTutorial';

import './index.css';

const { darkAlgorithm } = theme;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route path="/dashboard-tutorial" element={<DashboardTutorial />} />
      </Routes>
    </Router>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
