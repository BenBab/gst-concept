import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AdminPage from './components/admin/AdminPage';

import AFilingOption from './components/gstReturn/AFilingOption';
import BSalesAndIncome from './components/gstReturn/BSalesAndIncome';
import CPurchasesAndExpense from './components/gstReturn/CPurchasesAndExpense';
import DReview from './components/gstReturn/DReview';

import FDeclaration from './components/gstReturn/FDeclaration';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="admin" component={AdminPage} />
    <Route path="about" component={AboutPage} />
    <Route path="filing-option" component={AFilingOption} />
    <Route path="sales-and-income" component={BSalesAndIncome} />
    <Route path="purchases-and-expenses" component={CPurchasesAndExpense} />
    <Route path="review" component={DReview} />
    <Route path="declaration" component={FDeclaration} />

  </Route>
);
