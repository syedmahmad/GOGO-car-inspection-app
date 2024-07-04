import React, { useState } from 'react';
import {
  Card, CardContent,
  Typography,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import 'react-circular-progressbar/dist/styles.css';

export const VehicalImage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid2 xs={12}>
      <Card
        sx={{
          width: '100%',
          height: expanded ? '150px' : '100px',
          background: '#f1fcff',
          cursor: 'pointer',
          borderRadius: '8px',
          transition: 'height 0.3s ease-in-out',
          position: 'relative'
        }}
        onClick={handleCardClick}
      >
        <CardContent
          sx={{
            padding: '12px !important',
            height: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Grid2 container height='76px'>
            <Grid2
              xs={10}
              sm={10}
              sx={{
                display: 'flex',
              }}
            >
              <Typography fontSize="14px" fontWeight='600' padding="10px 10px">0 Vehicle Images</Typography>
            </Grid2>
            <Grid2
              xs={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                padding: '10px 10px'
              }}
            >
              <AddCircleOutlineIcon />
            </Grid2>
          </Grid2>
          {expanded && (
            <ExpandLessIcon
              sx={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '25px',
                zIndex: 1,
              }}
              onClick={handleCardClick} 
            />
          )}
        </CardContent>
      </Card>
    </Grid2>
  );
};
