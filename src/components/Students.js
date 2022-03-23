import { Typography, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStudent, deleteStudent } from '../store';

import { StudentForm } from './forms/StudentForm';

export const Students = () => {
  const students = useSelector(({ students }) => students);

  const dispatch = useDispatch();
  const submitForm = (inputs) => {
    dispatch(createStudent(inputs));
  };

  const destroyStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <ul>
      <Typography>Create Student</Typography>
      <StudentForm submitForm={submitForm} />

      {students.map(({ id, fullName }) => (
        <Grid key={id} container spacing={2} alignItems="center">
          <Grid item>
            <Link key={id} to={`/students/${id}`}>
              <h1>{fullName}</h1>
            </Link>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => destroyStudent(id)}>Utterly destroy student</Button>
          </Grid>
        </Grid>
      ))}
    </ul>
  );
};