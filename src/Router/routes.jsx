import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../componets/Homesection/HomePage';
import { Leftside } from '../componets/Homesection/Leftside';


export const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} /> {/* HomePage will render at the root */}
      <Route path="chart" element={<Leftside />} /> {/* Leftside will render at /chart */}
    </Route>
  </Routes>
);
