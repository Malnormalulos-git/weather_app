import axios from 'axios';
import { key } from '../../config.json'
import { useEffect, useState } from 'react';
import { Alert, AlertTitle, Box, Card, CardContent, CardHeader, CardMedia, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import formatDate from '../shared/formatDate';
import formatWindDirection from '../shared/formatWindDirection';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const Forecast = ({ lat, lon }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://www.meteosource.com/api/v1/free/point?lat=${lat}&lon=${lon}&sections=hourly&units=metric&key=${key}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error.message}
      </Alert>
  );
  } else if (!data) {
    return (
        <Alert severity="info">
          <AlertTitle>Loading...</AlertTitle>
          <CircularProgress />
        </Alert>
  );
  } else {
    return (
      <Grid2 
        container 
        justifyContent="center"
      >
        {data.hourly.data.map(hour => (
          <Grid 
            item xs={12}
            key={hour.id}
          >
            <Card 
              sx={{ 
                width: 200,
                borderRadius: 5,
                margin: 1,
                boxShadow: `0 0 10px #5292D2`
              }}
            >
              <CardHeader subheader={formatDate(hour.date)}/>
              <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <CardMedia
                  component="img"
                  sx={{
                    height: 100,
                    width: 100
                  }}
                  image={"https://www.meteosource.com/static/img/ico/weather/" + hour.icon + ".svg"}
                  alt={hour.weather}
                />
                <Typography>{hour.summary}</Typography>
              </Box>
              <CardContent>
                <Box display="flex">
                  <ThermostatIcon/>
                  <Typography>{hour.temperature} °C</Typography>
                </Box>
                <Box display="flex">
                  <AirIcon/>
                  <Typography>
                    {hour.wind.speed} m/s
                  </Typography>
                </Box>
                <Typography variant='h7'>
                  {formatWindDirection(hour.wind.dir)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid2>
    );
  }
}

export default Forecast;