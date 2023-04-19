import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createCampus, deleteCampus } from "../store";

import { CampusForm } from "./forms/CampusForm";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Campuses = () => {
  const { students, campuses } = useSelector(({ campuses, students }) => ({
    students,
    campuses,
  }));

  const dispatch = useDispatch();

  const submitForm = (inputs) => {
    dispatch(createCampus(inputs));
  };

  const destroyCampus = (id) => {
    dispatch(deleteCampus(id));
  };

  return (
    <ul>
      <CampusForm submitForm={submitForm} />
      {campuses.map((campus) => (
        <MaterialUICampusCard campus={campus} />
        // <>
        //   <Link key={id} to={`/campuses/${id}`}>
        //     <h1>
        //       {name}({students.filter(({ campusId }) => campusId === id).length}
        //       )
        //     </h1>
        //   </Link>
        //   <button variant="outlined" onClick={() => destroyCampus(id)}>
        //     Annihilate Campus
        //   </button>
        // </>
      ))}
    </ul>
  );
};

const MaterialUICampusCard = ({ campus }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CampusCard campus={campus} />
      </Card>
    </Box>
  );
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CampusCard = ({ campus }) => (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      ></Typography>
      <Typography variant="h5" component="div">
        {campus.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {campus.address}
      </Typography>
      <Typography variant="body2">{campus.description}</Typography>
    </CardContent>
    <CardActions>
      <Link key={campus.id} to={`/campuses/${campus.id}`}>
        <Button size="small">Learn More</Button>
      </Link>
    </CardActions>
  </React.Fragment>
);
