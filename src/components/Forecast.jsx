import axios from 'axios';
import { key } from '../../config.json'
import { useEffect, useState } from 'react';
import { Alert, AlertTitle, Card, CardContent, CardHeader, CardMedia, CircularProgress, Typography } from '@mui/material';
import formatDate from '../shared/formatDate';

const Forecast = ({ city }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://www.meteosource.com/api/v1/free/point?place_id=${city}&sections=hourly&units=metric&key=${key}`)
      .then(response => {
        console.log(response);//
        setData(response.data);
      })
      .catch(error => {
        console.log(error);//
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
      <>
        <Card 
          sx={{ maxWidth: 200 }}
        >
      <CardHeader
        title={city}
        subheader={formatDate(data.hourly.data[0].date)}
      />
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={"https://www.meteosource.com/static/img/ico/weather/" + data.hourly.data[0].icon + ".svg"}
        alt={data.hourly.data[0].weather}
      />
      <CardContent>
        <Typography>{data.hourly.data[0].summary}, {data.hourly.data[0].temperature} °C</Typography>
      </CardContent>
      </Card>
      </>
    );
  }
}

export default Forecast;