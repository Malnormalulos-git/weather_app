import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import Forecast from "./components/Forecast"
import { useState } from "react";
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const App = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Box display="flex" justifyContent="center" width="100%">
          <Typography variant="h4">WeatherReporter</Typography>
        </Box>
        </Toolbar>
      </AppBar>

      <TabContext value={value}>
        <Box 
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider' 
          }}
        >
          <TabList onChange={handleChange} aria-label="Forecast tabs" variant="fullWidth">
            <Tab label="Zaporizhzhia" value="1" />
            <Tab label="Kyiv" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Forecast lat="47.8508" lon="35.1183"/></TabPanel>
        <TabPanel value="2"><Forecast lat="50.45466" lon="30.5238"/></TabPanel>
      </TabContext>
    </>
  )
}

export default App;
