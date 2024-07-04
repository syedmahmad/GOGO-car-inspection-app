import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomTextField from '../../components/TextField';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const OBDReport = () => {
  return(
    <Box
      sx={{
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Box>
        <Typography sx={{ cursor: 'pointer' }} color="#8a8a8a" align='center' variant="body1" fontWeight={400} fontSize="12px">
            Please send the OBD report to this email: ocerej2@obd.axleinspect.com
        </Typography>
        <CustomTextField
          placeholder="OBD Report Linked"
        />
      </Box>
      <br />
      <Grid2 container spacing={2}>
        <Grid2 xs={6}>
          <Button
            variant='contained'
            size='large'
            fullWidth
            sx={{
              backgroundColor: '#004494',
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '8px'
            }}
          >
            Not Available
          </Button>
        </Grid2>
        <Grid2 xs={6}>
          <Button
            variant='contained'
            size='large'
            fullWidth
            sx={{
              backgroundColor: '#004494',
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '8px'
            }}
          >
            Pass
          </Button>
        </Grid2>
        <Grid2 xs={6}>
          <Button
            variant='contained'
            size='large'
            fullWidth
            sx={{
              backgroundColor: '#004494',
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '8px'
            }}
          >
            Communication Error
          </Button>
        </Grid2>
        <Grid2 xs={6}>
          <Button
            variant='contained'
            size='large'
            fullWidth
            sx={{
              backgroundColor: '#004494',
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '8px'
            }}
          >
            Customer Disallow
          </Button>
        </Grid2>
        <Grid2 xs={6}>
          <Button
            variant='contained'
            size='large'
            fullWidth
            sx={{
              backgroundColor: '#004494',
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '8px'
            }}
          >
            Port Damaged
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default OBDReport;