import React, { useState } from 'react';

import { TextField, Grid, Button } from '@material-ui/core';

export const CampusForm = ({ campus, submitForm, isEdit }) => {
  const [inputs, setInputs] = useState({
    name: campus?.name || '',
    imageUrl: campus?.imageUrl || '',
    address: campus?.address || '',
    description: campus?.description || '',
  });

  const onChange = ({ target: { name, value } }) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submitForm(inputs);
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField required name="name" value={inputs.name} onChange={onChange} fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <TextField required name="imageUrl" value={inputs.imageUrl} onChange={onChange} fullWidth label="Image url" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <TextField required name="address" value={inputs.address} onChange={onChange} fullWidth label="Address" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <TextField required name="description" value={inputs.description} onChange={onChange} fullWidth label="Description" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <Button type="submit" variant="outlined">{isEdit ? 'Edit' : 'Create'}</Button>
        </Grid>
        <Grid item xs={12}>
          {inputs.imageUrl && <img src={inputs.imageUrl} style={{ width: '300px', height: '300px' }} />}
        </Grid>
      </Grid>
    </form>
  );
};