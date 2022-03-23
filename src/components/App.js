import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import { Nav } from './Nav';
import { Students } from './Students';
import { Campuses } from './Campuses';
import { SingleStudent } from './SingleStudent';
import { SingleCampus } from './SingleCampus';

import { getStudents, getCampuses } from '../store';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampuses());
    dispatch(getStudents());
  }, []);

  return (
    <HashRouter>
      <Route path='/' component={Nav} />
      <Route exact path='/students' component={Students} />
      <Route exact path='/campuses' component={Campuses} />
      <Route exact path='/students/:id' component={SingleStudent} />
      <Route exact path='/campuses/:id' component={SingleCampus} />
    </HashRouter>
  );
};