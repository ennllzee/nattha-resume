import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';
import Contact from '../Contact/Contact';
import Interests from '../Interests/Interests';
import LangSet from '../../models/LangSet';


function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

interface PageProp{
  langSet : LangSet
}

export default function Page({langSet} : PageProp) {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label={langSet.education.title} {...a11yProps(0)} />
          <Tab label={langSet.skill} {...a11yProps(1)} />
          <Tab label={langSet.work} {...a11yProps(2)} />
          <Tab label={langSet.interest} {...a11yProps(3)} />
          <Tab label={langSet.contact} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Education langSet={langSet}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Skills langSet={langSet}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Works langSet={langSet}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Interests langSet={langSet}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Contact langSet={langSet}/>
      </TabPanel>
    </div>
  );
}