import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, Avatar, CardHeader, Typography, CardContent } from '@material-ui/core';
import { StudentCard } from './StudentCard';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '350px',
  },
}));

export const CampusCard = ({ campus, students }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardHeader
        avatar={
          <Avatar src={campus.imageUrl} />
        }
        title={campus.name}
        subheader={campus.address}
      />
      <CardContent>
        <>
          <Typography variant="body2" color="textSecondary" component="p">
            {campus.description}
          </Typography>
          {students && (
            <>
              <Typography>Students</Typography>
              {students.map(student => <StudentCard key={student.id} student={student} />)}
            </>
          )}
        </>
      </CardContent>
    </Card>
  );
};