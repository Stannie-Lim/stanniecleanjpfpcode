import { Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editCampus } from "../store";
import { CampusCard } from "./cards/CampusCard";
import { CampusForm } from "./forms/CampusForm";

export const SingleCampus = ({ match }) => {
  const { id } = match.params;
  const { campus, student } = useSelector(({ campuses, students }) => ({
    student: students.filter(({ campusId }) => campusId === campus.id),
    campus: campuses.find((campus) => campus.id === +id),
  }));

  const dispatch = useDispatch();

  if (!campus) return null;

  const submitForm = (inputs) => {
    dispatch(editCampus(inputs, id));
  };

  return (
    <>
      <Link to="/campuses">Back</Link>
      <CampusCard campus={campus} students={students} />

      <Typography>Edit Campus</Typography>
      <CampusForm campus={campus} submitForm={submitForm} isEdit />
    </>
  );
};
