import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createCampus, deleteCampus } from '../store';

import { CampusForm } from './forms/CampusForm';

export const Campuses = () => {
  const { students, campuses } = useSelector(({ campuses, students }) => ({ students, campuses }));
  
  const dispatch = useDispatch();

  const submitForm = (inputs) => {
    dispatch(createCampus(inputs));
  };

  const destroyCampus = id => {
    dispatch(deleteCampus(id));
  };

  return (
    <ul>
      <CampusForm submitForm={submitForm} />
      {campuses.map(({ id, name }) => (
        <>
          <Link key={id} to={`/campuses/${id}`}>
            <h1>{name}({students.filter(({ campusId }) => campusId === id).length})</h1>
          </Link>
          <Button variant="outlined" onClick={() => destroyCampus(id)}>Annihilate Campus</Button>
        </>
      ))}
    </ul>
  );
};