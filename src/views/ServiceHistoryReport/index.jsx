import React from 'react';
import CustomTextField from '../../components/TextField';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const ServiceHistoryReport = () => {
  const serviceHistoryOptions = [{
    value: 'Select Service History',
    label: 'Select Service History',
  },
  {
    value: 'Full Manufacturer Service History',
    label: 'Full Manufacturer Service History',
  },
  {
    value: 'Part Service History',
    label: 'Part Service History',
  },
  {
    value: 'No Service History',
    label: 'No Service History',
  }];

  const selectManualOptions = [{
    value: 'Select Manuals',
    label: 'Select Manuals',
  },{
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'Not Available in the car',
    label: 'Not Available in the car',
  },
  {
    value: 'No',
    label: 'No'
  }];

  const spareKeyOptions = [{
    value: 'Spare Key',
    label: 'Spare Key',
  },{
    value: 1,
    label: 'Yes',
  },{
    value: 0,
    label: 'No',
  }]

  return(
    <Grid2 container spacing={2} sx={{ padding: '20px 0px' }}>
      <Grid2 xs={12}>
        <Grid2 container columns={12}>
          <Grid2 xs={10}>
            <CustomTextField 
              label="Select Service History"
              select={true}
              options={serviceHistoryOptions}
              value={serviceHistoryOptions[0].value}
            />
          </Grid2>
          <Grid2 xs={2} sx={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <PhotoCameraIcon sx={{ marginTop: '24px'}} htmlColor='#004494'/>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 xs={12}>
        <Grid2 container columns={12}>
          <Grid2 xs={10}>
            <CustomTextField 
              label="Select Manuals"
              select={true}
              options={selectManualOptions}
              value={selectManualOptions[0].value}
            />
          </Grid2>
          <Grid2 xs={2} sx={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <PhotoCameraIcon sx={{ marginTop: '24px'}} htmlColor='#004494'/>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 xs={6}>
        <CustomTextField 
          label="Last Service Date"
          placeholder="Enter Date"
        />
      </Grid2>
      <Grid2 xs={6}>
        <CustomTextField 
          label="Last Service KM"
          placeholder="Enter last service km"
        />
      </Grid2>
      <Grid2 xs={6}>
        <CustomTextField 
          label="Next Service Date"
          placeholder="Enter Date"
        />
      </Grid2>
      <Grid2 xs={6}>
        <CustomTextField 
          label="Next Service KM"
          placeholder="Enter next service km"
        />
      </Grid2>
      <Grid2 xs={12}>
        <CustomTextField 
          label="Spare Key"
          select={true}
          options={spareKeyOptions}
          value={spareKeyOptions[0].value}
        />
      </Grid2>
    </Grid2>
  )
}

export default ServiceHistoryReport;