import { AppBar, Toolbar, Typography } from "@mui/material"
import Forecast from "./components/Forecast"

const App = () => {
  return (
    <>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography 
          variant="h4"
        >
          WeatherReporter
        </Typography>
      </Toolbar>
    </AppBar>
    feed <br/>
    <Forecast city="Kyiv"/>
    </>
  )
}

export default App;
