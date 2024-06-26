import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../componets/Homesection/HomePage';
 

export const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} /> 
     </Route>
  </Routes>
);
