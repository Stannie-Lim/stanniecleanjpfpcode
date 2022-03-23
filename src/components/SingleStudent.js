import { Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editStudent } from '../store';

import { StudentCard } from './cards/StudentCard';
import { StudentForm } from './forms/StudentForm';

export const SingleStudent = ({ match }) => {
  const { id } = match.params;
  const student = useSelector(({ students }) => students.find(student => student.id === +id));
  const campus = useSelector(({ campuses }) => campuses.find(({ id }) => id === student?.campusId));

  const dispatch = useDispatch();

  if (!student) return null;

  const submitForm = (values) => {
    dispatch(editStudent(values, id));
  };

  return (
    <>
      <Link to='/students'>Back</Link>
      <StudentCard student={student} campus={campus} />

      <Typography>Edit Student</Typography>
      <StudentForm student={student} submitForm={submitForm} isEdit />
    </>
  );
};