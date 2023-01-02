import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import timeout_pw_recover_api from './api/timeout_pw_recover'
import Home from '../src/pages'
import AfterSubmit from '../src/pages/AfterSubmit';

export default () => {
  return (
    <Router>
      <Routes>
        <Route path='/AfterSubmit' element={<AfterSubmit />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
};