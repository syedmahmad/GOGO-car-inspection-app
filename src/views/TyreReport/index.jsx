import React from "react";
import { Box, Button, NativeSelect, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomTextField from "../../components/TextField";

function TyreMenu() {
  const manufacturerOptions = [{
    value: 'ACCELERA',
    label: 'ACCELERA',
  },
  {
    value: 'ADVANCE',
    label: 'ADVANCE',
  },
  {
    value: 'APOLLO',
    label: 'APOLLO',
  },
  {
    value: 'ARROYO',
    label: 'ARROYO',
  }];

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
            <Typography variant="text" align="center"
              sx={{
                fontSize: '14px'
              }}
            >
              Passenger front Tyre
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} spacing={2}>
        <Grid item xs={7}>
          <Box display={"flex"} justifyContent={"center"}>
            <CustomTextField
              select={true}
              variant="standard"
              options={manufacturerOptions}
              value={manufacturerOptions[1].value}
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "8px", marginTop: '10px', backgroundColor: '#004494', }} variant="contained" size="large">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container alignItems={"center"} spacing={2}>
        <Grid item xs={7}>
          <Box display={"flex"} justifyContent={"center"}>
            <CustomTextField
              select={true}
              variant="standard"
              options={manufacturerOptions}
              value={manufacturerOptions[1].value}
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "8px", marginTop: '10px', backgroundColor: '#004494', }} variant="contained" size="large">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container alignItems={"center"} spacing={2}>
        <Grid item xs={7}>
          <Box display={"flex"} justifyContent={"center"}>
            <CustomTextField
              select={true}
              variant="standard"
              options={manufacturerOptions}
              value={manufacturerOptions[1].value}
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "8px", marginTop: '10px', backgroundColor: '#004494', }} variant="contained" size="large">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container alignItems={"center"} spacing={2}>
        <Grid item xs={7}>
          <Box display={"flex"} justifyContent={"center"}>
            <CustomTextField
              select={true}
              variant="standard"
              options={manufacturerOptions}
              value={manufacturerOptions[1].value}
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "8px", marginTop: '10px', backgroundColor: '#004494', }} variant="contained" size="large">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container alignItems={"center"} spacing={2}>
        <Grid item xs={7}>
          <Box display={"flex"} justifyContent={"center"}>
            <CustomTextField
              select={true}
              variant="standard"
              options={manufacturerOptions}
              value={manufacturerOptions[1].value}
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "8px", marginTop: '10px', backgroundColor: '#004494', }} variant="contained" size="large">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      {/*  */}
      <Grid container>
        <Grid item xs={8} xsOffset={2}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#4c4c4c", width: '45%', fontSize: '12px', borderRadius: '8px' }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#004494", width: '45%', fontSize: '12px', borderRadius: '8px' }}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default TyreMenu;