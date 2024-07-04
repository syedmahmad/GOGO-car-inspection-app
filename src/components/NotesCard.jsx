import React from 'react';
import {
  Card, CardContent, TextField,
  Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import 'react-circular-progressbar/dist/styles.css';

export const NotesCard = () => {
  return (
    <Grid2 xs={12}>
      <Card
        sx={{
          width: '100%',
          background: '#f1fcff',
          cursor: 'pointer',
          borderRadius: '8px',
        }}
      >
        <CardContent
          sx={{
            padding: '12px !important',
          }}
        >
          <Grid2 container>
            {/* First row for notes typography */}
            <Grid2
              xs={12}
              sm={10}
              // sx={{
              //   display: 'flex',
              // }}
            >
              <Typography fontSize="14px" fontWeight="600" padding="10px 10px">
                Notes
              </Typography>
            </Grid2>
          </Grid2>
          {/* For text fields */}
          <Grid2 container>
            <Grid2 xs={12}>
              <TextField
                placeholder="Enter notes here"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  },
                }}
                sx={{
                  marginTop: '8px',
                  '& .MuiInputBase-input::placeholder': {
                    color: '#000',
                  },
                }}
              />
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Grid2>
  );
};
