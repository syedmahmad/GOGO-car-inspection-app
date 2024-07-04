import React from 'react';
import CustomTextField from '../../components/TextField';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CameraInput from '../../common/CameraInput/Index';

const VehicalDetails = () => {
  const yearOptions = [
    {
      value: '2021',
      label: '2021',
    },
    {
      value: '2022',
      label: '2022',
    },
    {
      value: '2023',
      label: '2023',
    },
    {
      value: '2024',
      label: '2024',
    },
  ];

  const gccOptions = [
    {
      value: 1,
      label: 'Yes',
    },
    {
      value: 0,
      label: 'No',
    },
  ];

  const exColorOptions = [
    {
      value: 'black',
      label: 'Black',
    },
    {
      value: 'white',
      label: 'White',
    },
    {
      value: 'gray',
      label: 'Gray',
    },
    {
      value: 'blue',
      label: 'Blue',
    },
  ];

  const inColorOptions = [
    {
      value: 'black',
      label: 'Fabric - Black',
    },
    {
      value: 'white',
      label: 'Fabric - White',
    },
    {
      value: 'gray',
      label: 'Fabric - Gray',
    },
    {
      value: 'blue',
      label: 'Fabric - Blue',
    },
  ];

  return(
    <Grid2 container gap={2} sx={{ padding: '20px 0px' }}>
      <Grid2 xs={12}>
        <Grid2 container columns={12}>
          <Grid2 xs={10}>
            <CustomTextField 
              label="VIN"
            />
          </Grid2>
          <Grid2 xs={2} sx={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CameraInput />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Engine Number"
        />
      </Grid2>
      <Grid2 xs={12}>
        <Grid2 container columns={12}>
          <Grid2 xs={10}>
            <CustomTextField 
              label="Odometer"
            />
          </Grid2>
          <Grid2 xs={2} sx={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CheckCircleOutlineIcon sx={{ marginTop: '24px'}} htmlColor='green'/>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Year"
          select={true}
          options={yearOptions}
          value={yearOptions[0].value}
        />
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Make"
        />
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Model"
        />
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Variant"
        />
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Plate"
        />
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="GCC Specs"
          select={true}
          options={gccOptions}
          value={gccOptions[0].value}
        />
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Exterior Color"
          select={true}
          options={exColorOptions}
          value={exColorOptions[0].value}
        />
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Interior Color"
          select={true}
          options={inColorOptions}
          value={inColorOptions[0].value}
        />
      </Grid2>
    </Grid2>
  );
}

export default VehicalDetails;