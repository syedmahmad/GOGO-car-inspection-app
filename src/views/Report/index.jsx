import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ItemReportsList from '../ItemReportsList';
import OBDReport from '../OBDReport';
import ServiceHistoryReport from '../ServiceHistoryReport';

const ReportMain = () => {
  const [componentToShow, setComponentToShow] = useState('');
  const [listToShow, setListToShow] = useState([]);
  // TODO: need to replace the dummy data in options
  const reportCategories = [{
    name: 'Electrical Controls',
    image: 'https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=1024x1024&w=is&k=20&c=nei8XeySI7U3ZUnHh3cibDrwUX-C1eggQSyOeMZlZ8E=',
    options: [
      {
        name: 'AC Cooling'
      },
      {
        name: 'Air Blower Fan'
      },
      {
        name: 'Cameras'
      },
      {
        name: 'Fog Lights'
      },
      {
        name: 'GPS'
      },
      {
        name: 'Guages'
      },
      {
        name: 'Head Lights'
      },
      {
        name: 'Indicators and Hazards'
      },
      {
        name: 'Warning Signs'
      },
      {
        name: 'Interior Lights'
      },
      {
        name: 'AC Cooling'
      },
      {
        name: 'Air Blower Fan'
      },
      {
        name: 'Cameras'
      },
      {
        name: 'Fog Lights'
      },
      {
        name: 'GPS'
    }],
    nextComponent: 'list'
  },{
    name: 'Engine Compartments',
    image: 'https://i.ytimg.com/vi/5cRlIuGVx-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC1K-jOl955zABHZuq_Zx9_o9BEg',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Exhaust System',
    image: 'https://media.istockphoto.com/id/526209999/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=yXvzy425jTHSTKWxd7XCdIuh9zLLnTfNHD1jrRCwkrk=',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Exterior Body Diagram',
    image: 'https://media.istockphoto.com/id/1147751235/photo/auto-parts-spare-parts-car-on-the-grey-background.jpg?s=612x612&w=0&k=20&c=hryiSAEeeA_l-_D2eUEP1-VfgfiUbNKhERhiu_aTft8=',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Front Suspension',
    image: 'https://i.ytimg.com/vi/5cRlIuGVx-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC1K-jOl955zABHZuq_Zx9_o9BEg',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Fuel System',
    image: 'https://media.istockphoto.com/id/526209999/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=yXvzy425jTHSTKWxd7XCdIuh9zLLnTfNHD1jrRCwkrk=',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Interior',
    image: 'https://media.istockphoto.com/id/1147751235/photo/auto-parts-spare-parts-car-on-the-grey-background.jpg?s=612x612&w=0&k=20&c=hryiSAEeeA_l-_D2eUEP1-VfgfiUbNKhERhiu_aTft8=',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'OBD',
    image: 'https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=1024x1024&w=is&k=20&c=nei8XeySI7U3ZUnHh3cibDrwUX-C1eggQSyOeMZlZ8E=',
    options: [],
    nextComponent: 'obd'
  },{
    name: 'Rear Suspension',
    image: 'https://media.istockphoto.com/id/1147751235/photo/auto-parts-spare-parts-car-on-the-grey-background.jpg?s=612x612&w=0&k=20&c=hryiSAEeeA_l-_D2eUEP1-VfgfiUbNKhERhiu_aTft8=',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Road Test and Final Checks',
    image: 'https://i.ytimg.com/vi/5cRlIuGVx-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC1K-jOl955zABHZuq_Zx9_o9BEg',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Service History and Manuals',
    image: 'https://media.istockphoto.com/id/1147751235/photo/auto-parts-spare-parts-car-on-the-grey-background.jpg?s=612x612&w=0&k=20&c=hryiSAEeeA_l-_D2eUEP1-VfgfiUbNKhERhiu_aTft8=',
    options: [],
    nextComponent: 'service-history'
  },{
    name: 'Steering',
    image: 'https://media.istockphoto.com/id/1147751235/photo/auto-parts-spare-parts-car-on-the-grey-background.jpg?s=612x612&w=0&k=20&c=hryiSAEeeA_l-_D2eUEP1-VfgfiUbNKhERhiu_aTft8=',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Transmission',
    image: 'https://i.ytimg.com/vi/5cRlIuGVx-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC1K-jOl955zABHZuq_Zx9_o9BEg',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Underbody',
    image: 'https://i.ytimg.com/vi/5cRlIuGVx-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC1K-jOl955zABHZuq_Zx9_o9BEg',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  },{
    name: 'Tyres',
    image: 'https://static.pakwheels.com/2016/06/car-tires-e1467006521850.png',
    options: [
      {
        name: 'Air Conditioning'
      },
      {
        name: 'Bonnet Shocks and Stay Rod'
      },
      {
        name: 'Coolant'
      },
      {
        name: 'Drive Belt and Pulleys'
      },
      {
        name: 'Engine Noise'
      },
      {
        name: 'Engine Oil Filler Cap'
      },
      {
        name: 'Engine Oil Leaks'
      },
      {
        name: 'Hoses and Pipes'
      },
      {
        name: 'Mountings'
      },
      {
        name: 'Turbo or Supercharger'
    }],
    nextComponent: 'list'
  }];

  return (
    <>
      {listToShow.length === 0 && componentToShow === '' && reportCategories.map((item) => (
        <Grid container>
          <Grid item xs={12}>
            {/* Container for text and image */}
            <Box 
              sx={{ 
                display: 'flex',
                height: '80px',
                position: 'relative',
                cursor: 'pointer',
                marginTop: '1px'
              }}
              onClick={() => {setListToShow(item?.options); setComponentToShow(item?.nextComponent)}}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: "30%",
                  zIndex: 2,
                  backgroundImage: 'linear-gradient(to right, #fff 30%, transparent)',
                  width: '70%',
                  height: '80px'
                }}
              >

              </Box>
              {/* Box for text */}
              <Box 
              sx={{
                height: '80px',
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px',
                zIndex: 3
              }}
              >
                <Typography variant='caption' fontSize="12px">{item.name}</Typography>
              </Box>
              
              {/* Box for image */}
                <Box sx={{
                  width: '50%',
                  height: '80px'
                }}
                >
                  <img 
                    className='h-20'
                    width="100%"
                    src={item?.image}
                    alt="img"
                  />
              </Box>
            </Box>
          </Grid>
        </Grid>
      ))}

      {componentToShow === 'list' && listToShow.length > 0 && (
        <ItemReportsList listToShow={listToShow} />
      )}

      {componentToShow === 'obd' && (
        <OBDReport />
      )}

      {componentToShow === 'service-history' && (
        <ServiceHistoryReport />
      )}
    </>
  );
}

export default ReportMain;