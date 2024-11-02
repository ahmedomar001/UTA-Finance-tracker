import React from 'react';
import { Grid, Paper } from '@mui/material';

function MyComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper style={{ padding: '20px', textAlign: 'center' }}>Header</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{ padding: '20px', textAlign: 'center' }}>Left Pane</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{ padding: '20px', textAlign: 'center' }}>Right Pane</Paper>
      </Grid>
    </Grid>
  );
}

export default MyComponent;
