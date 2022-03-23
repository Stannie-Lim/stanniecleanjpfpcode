import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, Avatar, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: '350px',
  },
}));

export const StudentCard = ({ student, campus }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <CardHeader
        avatar={
          <Avatar src={student.imageUrl} />
        }
        title={student.fullName}
        subheader={`GPA: ${student.gpa}`}
      />
      {campus && (
        <CardContent>
          <Typography variant="h6">
            School: 
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};