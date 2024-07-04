import {
  Box,
  Card, CardContent, Container,
  Typography,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import VehicleDetails from '../VehicalDetails';
import ReportMain from '../Report';
import { VehicalImage } from '../../components/0VehicalImage';
import { NotesCard } from '../../components/NotesCard';

export default function Inspection() {
  const [showVehicalDetails, setShowVehicalDetails] = useState(false);
  const [showReport, setShowReport] = useState(false);
  return (
    <Container maxWidth="md" sx={{ height: 'calc(100vh - 20px)', margin: '20px 0px', overflow: 'auto'}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: "center",
          marginBottom: '20px',
          cursor: 'pointer'
        }}
        onClick={() => {setShowVehicalDetails(false); setShowReport(false)}}
      >
        <ChevronLeftIcon />
        <Typography fontSize="14px">Inspections</Typography>
      </Box>
      {!showVehicalDetails && !showReport && (
        <Grid2 container gap={2}>
          {/* 0Vehcial Images Top Card.. */}
         <VehicalImage />

        <Grid2 xs={12}>
          <Card
            sx={{
              width: '100%',
              height: '100px',
              background: '#f1fcff',
              cursor: 'pointer',
              borderRadius: '8px'
            }}
            onClick={() => setShowVehicalDetails(true)}
          >
            <CardContent
              sx={{
                padding: '12px !important',
                height: 'inherit'
              }}
            >
              <Grid2 container height='76px'>
                <Grid2
                  xs={2.5}
                  sm={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRight: '1px solid #dcdcde',
                    height: 'inherit'
                  }}
                >
                  <Typography fontSize="14px">Vehicle Details</Typography>
                </Grid2>
                <Grid2
                  xs={7.5}
                  sm={8}
                  sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    paddingLeft: '8px'
                  }}
                >
                  <Typography fontSize="10px" textTransform="uppercase" color="#515152">2019 Chevrolet Spark</Typography>
                  <Typography fontSize="10px" textTransform="uppercase" color="#515152">KL1CD6CAXKC722664</Typography>
                </Grid2>
                <Grid2
                  xs={2}
                  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}
                >
                  <ChevronRightIcon />
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 xs={12}>
          <Card
            sx={{
              width: '100%',
              height: '100px',
              background: '#f1fcff',
              cursor: 'pointer',
              borderRadius: '12px'
            }}
            onClick={() => setShowReport(true)}
          >
            <CardContent
              sx={{
                padding: '12px !important',
                height: 'inherit'
              }}
            >
              <Grid2 container height='76px'>
                <Grid2
                  xs={4}
                  md={3.5}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRight: '1px solid #dcdcde',
                    height: 'inherit'
                  }}
                >
                  <div className='h-10 w-10'>
                    <CircularProgressbar
                      strokeWidth={8}
                      value={68}
                      text={`${68}%`}
                      styles={buildStyles({
                        textSize: '16px',
                        pathColor: '#004494',
                        textColor: '#000',
                      })}
                    />
                  </div>
                  <Typography fontSize="14px" marginLeft="12px">Report</Typography>
                </Grid2>
                <Grid2
                  xs={6}
                  md={6.5}
                  sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    paddingLeft: '12px'
                  }}
                >
                  <Typography fontSize="10px" color="#515152">14: Verified</Typography>
                  <Typography fontSize="10px" color="#515152">0: Skipped</Typography>
                  <Typography fontSize="10px" color="#515152">3: Faulty</Typography>
                </Grid2>
                <Grid2
                  xs={2}
                  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}
                >
                  <ChevronRightIcon />
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
        {/* Notes card... */}
        <NotesCard />
        </Grid2>
      )}

      {showVehicalDetails && (
        <VehicleDetails />
      )}

      {showReport && (
        <ReportMain />
      )}
    </Container>
    
)};